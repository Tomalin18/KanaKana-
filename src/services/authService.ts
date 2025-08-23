import { supabase } from '@/lib/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { Platform } from 'react-native';

// 確保 WebBrowser 完成設定
WebBrowser.maybeCompleteAuthSession();

/**
 * 認證服務
 * 處理 Google 登入、登出、資料同步等
 */

// Storage Keys
const STORAGE_KEYS = {
  AUTH_STATE: '@auth_state',
  USER_ID: '@user_id',
  USER_PROFILE: '@user_profile',
  LAST_SYNC: '@last_sync',
};

// 認證狀態
export type AuthState = 'anonymous' | 'authenticated' | 'loading';

// 使用者資料
export interface UserProfile {
  id: string;
  email?: string;
  name?: string;
  avatar?: string;
  provider?: string;
}

class AuthService {
  private redirectUrl: string;

  constructor() {
    // 設定 OAuth redirect URL
    this.redirectUrl = AuthSession.makeRedirectUri({
      scheme: 'com.kanakana.app', // 需要與 app.json 的 scheme 一致
      path: 'auth'
    });
    
    console.log('OAuth Redirect URL:', this.redirectUrl);
  }

  /**
   * 檢查當前認證狀態
   */
  async checkAuthState(): Promise<AuthState> {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session) {
        // 有 session，已登入
        await AsyncStorage.setItem(STORAGE_KEYS.AUTH_STATE, 'authenticated');
        await AsyncStorage.setItem(STORAGE_KEYS.USER_ID, session.user.id);
        return 'authenticated';
      } else {
        // 無 session，匿名狀態
        const authState = await AsyncStorage.getItem(STORAGE_KEYS.AUTH_STATE);
        return (authState as AuthState) || 'anonymous';
      }
    } catch (error) {
      console.error('Check auth state error:', error);
      return 'anonymous';
    }
  }

  /**
   * 繼續作為訪客
   */
  async continueAsGuest(): Promise<void> {
    await AsyncStorage.setItem(STORAGE_KEYS.AUTH_STATE, 'anonymous');
  }

  /**
   * Email/Password 登入
   */
  async signInWithEmail(email: string, password: string): Promise<{ success: boolean; error?: string }> {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Email sign in error:', error);
        return { success: false, error: error.message };
      }

      if (data.user) {
        await this.ensureUserProfile(data.user);
        await this.onLoginSuccess(data.user.id);
      }

      return { success: true };
    } catch (error) {
      console.error('Email sign in error:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }

  /**
   * Email 註冊
   */
  async signUpWithEmail(email: string, password: string, displayName?: string): Promise<{ success: boolean; error?: string }> {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: displayName,
          }
        }
      });

      if (error) {
        console.error('Email sign up error:', error);
        return { success: false, error: error.message };
      }

      if (data.user) {
        await this.ensureUserProfile(data.user);
        await this.onLoginSuccess(data.user.id);
      }

      return { success: true };
    } catch (error) {
      console.error('Email sign up error:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }

  /**
   * Google 登入
   */
  async signInWithGoogle(): Promise<{ success: boolean; error?: string }> {
    try {
      // 使用 Supabase OAuth
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: this.redirectUrl,
          skipBrowserRedirect: Platform.OS === 'ios', // iOS 需要特殊處理
        }
      });

      if (error) {
        console.error('Google sign in error:', error);
        return { success: false, error: error.message };
      }

      // 在 Web 端會自動開啟瀏覽器
      // 在 Native 端需要手動開啟
      if (data?.url && Platform.OS !== 'web') {
        const result = await WebBrowser.openAuthSessionAsync(
          data.url,
          this.redirectUrl
        );

        if (result.type === 'success' && result.url) {
          // 處理回調 URL
          await this.handleOAuthCallback(result.url);
        }
      }

      // 登入成功後，檢查並同步用戶資料
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await this.ensureUserProfile(user);
        await this.onLoginSuccess(user.id);
      }

      return { success: true };
    } catch (error) {
      console.error('Google sign in error:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }

  /**
   * 處理 OAuth 回調
   */
  private async handleOAuthCallback(url: string): Promise<void> {
    // 從 URL 中提取 token
    const params = this.extractParamsFromUrl(url);
    
    if (params.access_token && params.refresh_token) {
      // 設定 session
      const { data, error } = await supabase.auth.setSession({
        access_token: params.access_token,
        refresh_token: params.refresh_token,
      });

      if (!error && data.session) {
        // 登入成功，同步本地資料到雲端
        await this.onLoginSuccess(data.session.user.id);
      }
    }
  }

  /**
   * 從 URL 提取參數
   */
  private extractParamsFromUrl(url: string): Record<string, string> {
    const params: Record<string, string> = {};
    const queryString = url.split('#')[1] || url.split('?')[1];
    
    if (queryString) {
      queryString.split('&').forEach(param => {
        const [key, value] = param.split('=');
        params[key] = decodeURIComponent(value);
      });
    }
    
    return params;
  }

  /**
   * 確保用戶 Profile 存在於資料庫
   */
  private async ensureUserProfile(user: any): Promise<void> {
    try {
      // 首先檢查或創建 users 表記錄
      const { data: existingUser, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('auth_id', user.id)
        .single();

      let userId: string;

      if (!existingUser) {
        // 創建新的 user 記錄
        const { data: newUser, error: createUserError } = await supabase
          .from('users')
          .insert({
            auth_id: user.id,
            email: user.email,
            is_anonymous: false,
            updated_at: new Date().toISOString(),
          })
          .select()
          .single();

        if (createUserError) {
          console.error('Failed to create user:', createUserError);
          return;
        }
        
        userId = newUser.id;
      } else {
        userId = existingUser.id;
      }

      // 檢查是否已有 profile
      const { data: existingProfile } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (!existingProfile) {
        // 創建新的 user profile (不需要 created_at 和 updated_at，Prisma 會自動處理)
        const { error } = await supabase
          .from('user_profiles')
          .insert({
            user_id: userId,
            display_name: user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split('@')[0],
            avatar_url: user.user_metadata?.avatar_url || user.user_metadata?.picture,
            preferred_difficulty: 'normal',
          });

        if (error) {
          console.error('Failed to create user profile:', error);
        } else {
          console.log('User profile created successfully');
        }
      }
    } catch (error) {
      console.error('Error ensuring user profile:', error);
    }
  }

  /**
   * 登入成功後的處理
   */
  private async onLoginSuccess(userId: string): Promise<void> {
    // 更新認證狀態
    await AsyncStorage.setItem(STORAGE_KEYS.AUTH_STATE, 'authenticated');
    await AsyncStorage.setItem(STORAGE_KEYS.USER_ID, userId);
    
    // 上傳本地資料到雲端
    await this.uploadLocalDataToCloud(userId);
    
    // 更新最後同步時間
    await AsyncStorage.setItem(STORAGE_KEYS.LAST_SYNC, new Date().toISOString());
  }

  /**
   * 上傳本地資料到雲端
   */
  private async uploadLocalDataToCloud(userId: string): Promise<void> {
    try {
      // 獲取本地資料
      const localData = await this.getLocalGameData();
      
      if (!localData) return;

      // 檢查雲端是否已有資料
      const { data: existingProgress } = await supabase
        .from('game_progress')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (existingProgress) {
        // 合併資料（取最高分）
        const mergedData = this.mergeGameData(localData, existingProgress);
        
        // 更新雲端資料
        await supabase
          .from('game_progress')
          .update(mergedData)
          .eq('user_id', userId);
      } else {
        // 創建新的雲端資料
        await supabase
          .from('game_progress')
          .insert({
            user_id: userId,
            ...localData
          });
      }

      console.log('Local data uploaded to cloud successfully');
    } catch (error) {
      console.error('Upload local data error:', error);
    }
  }

  /**
   * 獲取本地遊戲資料
   */
  private async getLocalGameData(): Promise<any> {
    try {
      const gameProgress = await AsyncStorage.getItem('@game_progress');
      const achievements = await AsyncStorage.getItem('@achievements');
      const highScores = await AsyncStorage.getItem('@high_scores');
      
      return {
        game_progress: gameProgress ? JSON.parse(gameProgress) : null,
        achievements: achievements ? JSON.parse(achievements) : null,
        high_scores: highScores ? JSON.parse(highScores) : null,
      };
    } catch (error) {
      console.error('Get local data error:', error);
      return null;
    }
  }

  /**
   * 合併遊戲資料（取較優的值）
   */
  private mergeGameData(local: any, cloud: any): any {
    return {
      total_games_played: Math.max(
        local.game_progress?.total_games_played || 0,
        cloud.total_games_played || 0
      ),
      total_score: Math.max(
        local.game_progress?.total_score || 0,
        cloud.total_score || 0
      ),
      best_score_classic: Math.max(
        local.high_scores?.classic || 0,
        cloud.best_score_classic || 0
      ),
      best_score_kanji: Math.max(
        local.high_scores?.kanji || 0,
        cloud.best_score_kanji || 0
      ),
      best_score_tetris: Math.max(
        local.high_scores?.tetris || 0,
        cloud.best_score_tetris || 0
      ),
      // 成就取聯集
      achievements_unlocked: [
        ...new Set([
          ...(local.achievements || []),
          ...(cloud.achievements_unlocked || [])
        ])
      ],
    };
  }

  /**
   * 登出
   */
  async signOut(): Promise<void> {
    try {
      await supabase.auth.signOut();
      
      // 更新本地狀態為匿名
      await AsyncStorage.setItem(STORAGE_KEYS.AUTH_STATE, 'anonymous');
      await AsyncStorage.removeItem(STORAGE_KEYS.USER_ID);
      await AsyncStorage.removeItem(STORAGE_KEYS.USER_PROFILE);
      
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  }

  /**
   * 刪除帳號
   */
  async deleteAccount(): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        // 刪除用戶資料（資料庫會透過 CASCADE 自動刪除相關資料）
        const { error: deleteError } = await supabase
          .from('users')
          .delete()
          .eq('auth_id', user.id);

        if (deleteError) {
          console.error('Delete user data error:', deleteError);
        }

        // 刪除 Auth 帳號
        // 注意：這需要在 Supabase 設定中啟用帳號刪除功能
        // 或者需要使用 service role key（不建議在客戶端使用）
        
        // 登出
        await this.signOut();
      }
    } catch (error) {
      console.error('Delete account error:', error);
      throw error;
    }
  }

  /**
   * 獲取當前使用者資料
   */
  async getCurrentUser(): Promise<UserProfile | null> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        const profile: UserProfile = {
          id: user.id,
          email: user.email,
          name: user.user_metadata?.full_name || user.user_metadata?.name,
          avatar: user.user_metadata?.avatar_url || user.user_metadata?.picture,
          provider: user.app_metadata?.provider,
        };
        
        // 快取到本地
        await AsyncStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
        
        return profile;
      }
      
      // 嘗試從本地快取獲取
      const cachedProfile = await AsyncStorage.getItem(STORAGE_KEYS.USER_PROFILE);
      return cachedProfile ? JSON.parse(cachedProfile) : null;
    } catch (error) {
      console.error('Get current user error:', error);
      return null;
    }
  }

  /**
   * 監聽認證狀態變化
   */
  onAuthStateChange(callback: (user: UserProfile | null) => void): () => void {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, 'Session:', session);
        
        // 忽略 INITIAL_SESSION 事件，讓組件自己載入資料
        if (event === 'INITIAL_SESSION') {
          return;
        }
        
        if (session && session.user) {
          // 當有 session 時，獲取用戶資料
          const profile: UserProfile = {
            id: session.user.id,
            email: session.user.email,
            name: session.user.user_metadata?.full_name || session.user.user_metadata?.name,
            avatar: session.user.user_metadata?.avatar_url || session.user.user_metadata?.picture,
            provider: session.user.app_metadata?.provider,
          };
          callback(profile);
        } else {
          // 無 session 時傳遞 null
          callback(null);
        }
      }
    );

    // 返回取消訂閱函數
    return () => {
      subscription.unsubscribe();
    };
  }
}

// 匯出單例
export const authService = new AuthService();