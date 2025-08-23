import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import { authService, UserProfile } from '@/services/authService';
import { TechColors, Typography } from '@/constants/theme';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<any>;

const ProfileScreen: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProp>();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSigningOut, setIsSigningOut] = useState(false);

  useEffect(() => {
    loadUserProfile();
    
    // 監聽認證狀態變化
    const unsubscribe = authService.onAuthStateChange((user) => {
      if (user) {
        setUserProfile(user);
        setIsLoading(false);
      } else {
        // 用戶登出時，返回主選單
        setUserProfile(null);
        setIsLoading(false);
        navigation.goBack();
      }
    });
    
    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const loadUserProfile = async () => {
    try {
      const profile = await authService.getCurrentUser();
      setUserProfile(profile);
      
      // 如果沒有用戶資料，在 useEffect 中處理返回
      if (!profile) {
        setTimeout(() => navigation.goBack(), 0);
      }
    } catch (error) {
      console.error('Failed to load user profile:', error);
      setTimeout(() => navigation.goBack(), 0);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = () => {
    Alert.alert(
      t('profile.signOutTitle'),
      t('profile.signOutMessage'),
      [
        {
          text: t('common.cancel'),
          style: 'cancel',
        },
        {
          text: t('common.confirm'),
          onPress: performSignOut,
          style: 'destructive',
        },
      ]
    );
  };

  const performSignOut = async () => {
    setIsSigningOut(true);
    try {
      await authService.signOut();
      // 導航回主選單
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainMenu' }],
      });
    } catch (error) {
      console.error('Sign out error:', error);
      Alert.alert(t('common.error'), t('profile.signOutError'));
    } finally {
      setIsSigningOut(false);
    }
  };

  // 同步資料
  const handleSyncData = async () => {
    Alert.alert(
      t('profile.syncData'),
      t('profile.syncDataMessage'),
      [
        {
          text: t('common.cancel'),
          style: 'cancel',
        },
        {
          text: t('common.confirm'),
          onPress: async () => {
            try {
              // TODO: 實作資料同步邏輯
              Alert.alert(t('common.success'), t('profile.syncDataSuccess'));
            } catch (error) {
              Alert.alert(t('common.error'), t('profile.syncDataError'));
            }
          },
        },
      ]
    );
  };

  // 隱私設定
  const handlePrivacySettings = () => {
    Alert.alert(
      t('profile.privacy'),
      t('profile.privacyMessage'),
      [
        { text: t('common.ok') }
      ]
    );
  };

  // 刪除帳號
  const handleDeleteAccount = () => {
    Alert.alert(
      t('profile.deleteAccount'),
      t('profile.deleteAccountWarning'),
      [
        {
          text: t('common.cancel'),
          style: 'cancel',
        },
        {
          text: t('profile.deleteAccountConfirm'),
          style: 'destructive',
          onPress: () => {
            // 二次確認
            Alert.alert(
              t('profile.deleteAccountFinalWarning'),
              t('profile.deleteAccountFinalMessage'),
              [
                {
                  text: t('common.cancel'),
                  style: 'cancel',
                },
                {
                  text: t('profile.deleteAccountFinalConfirm'),
                  style: 'destructive',
                  onPress: async () => {
                    try {
                      await authService.deleteAccount();
                      navigation.reset({
                        index: 0,
                        routes: [{ name: 'MainMenu' }],
                      });
                    } catch (error) {
                      Alert.alert(t('common.error'), t('profile.deleteAccountError'));
                    }
                  },
                },
              ]
            );
          },
        },
      ]
    );
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <BlurView intensity={80} style={StyleSheet.absoluteFillObject} />
        <ActivityIndicator size="large" color={TechColors.neonBlue} />
      </View>
    );
  }

  // 如果沒有用戶資料且不在載入中，顯示空狀態
  if (!userProfile && !isLoading) {
    return (
      <View style={styles.container}>
        <BlurView intensity={80} style={StyleSheet.absoluteFillObject} />
        <View style={styles.emptyState}>
          <ActivityIndicator size="large" color={TechColors.neonBlue} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BlurView intensity={80} style={StyleSheet.absoluteFillObject} />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{t('profile.title')}</Text>
          <View style={styles.backButton} />
        </View>

        {/* Profile Info */}
        <View style={styles.profileCard}>
          {/* Avatar */}
          <View style={styles.avatarContainer}>
            {userProfile.avatar ? (
              <Image source={{ uri: userProfile.avatar }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <Text style={styles.avatarText}>
                  {userProfile.name?.[0]?.toUpperCase() || '?'}
                </Text>
              </View>
            )}
          </View>

          {/* User Info */}
          <Text style={styles.userName}>
            {userProfile.name || t('profile.anonymous')}
          </Text>
          {userProfile.email && (
            <Text style={styles.userEmail}>{userProfile.email}</Text>
          )}
          
          {/* Provider Info */}
          <View style={styles.providerBadge}>
            <Text style={styles.providerText}>
              {userProfile.provider === 'google' ? '🔵 Google' : 
               userProfile.provider === 'apple' ? '🍎 Apple' : 
               '📧 Email'}
            </Text>
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsCard}>
          <Text style={styles.sectionTitle}>{t('profile.statistics')}</Text>
          
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>0</Text>
              <Text style={styles.statLabel}>{t('profile.totalGames')}</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>0</Text>
              <Text style={styles.statLabel}>{t('profile.totalScore')}</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>0</Text>
              <Text style={styles.statLabel}>{t('profile.achievements')}</Text>
            </View>
          </View>
        </View>

        {/* Settings Section */}
        <View style={styles.settingsCard}>
          <Text style={styles.sectionTitle}>{t('profile.accountSettings')}</Text>
          
          <TouchableOpacity style={styles.settingItem} onPress={handleSyncData}>
            <Text style={styles.settingText}>{t('profile.syncData')}</Text>
            <Text style={styles.settingIcon}>🔄</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem} onPress={handlePrivacySettings}>
            <Text style={styles.settingText}>{t('profile.privacy')}</Text>
            <Text style={styles.settingIcon}>🔒</Text>
          </TouchableOpacity>

          {/* 刪除帳號功能暫時隱藏 */}
          {/* <TouchableOpacity style={[styles.settingItem, styles.deleteAccountItem]} onPress={handleDeleteAccount}>
            <Text style={[styles.settingText, styles.deleteAccountText]}>{t('profile.deleteAccount')}</Text>
            <Text style={styles.settingIcon}>🗑️</Text>
          </TouchableOpacity> */}
        </View>

        {/* Sign Out Button */}
        <TouchableOpacity
          style={styles.signOutButton}
          onPress={handleSignOut}
          disabled={isSigningOut}
        >
          {isSigningOut ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.signOutButtonText}>{t('profile.signOut')}</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: TechColors.darkSpace,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
    paddingTop: 40,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'System',
    color: '#FFFFFF',
  },
  profileCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  avatarContainer: {
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: TechColors.neonBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 40,
    color: '#FFFFFF',
    fontFamily: 'System',
  },
  userName: {
    fontSize: 24,
    fontFamily: 'System',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 15,
  },
  providerBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  providerText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  statsCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'System',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 28,
    fontFamily: 'System',
    color: TechColors.neonBlue,
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  settingsCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  settingText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  settingIcon: {
    fontSize: 20,
  },
  signOutButton: {
    backgroundColor: '#FF4444',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  signOutButtonText: {
    fontSize: 16,
    fontFamily: 'System',
    color: '#FFFFFF',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteAccountItem: {
    borderBottomWidth: 0,
  },
  deleteAccountText: {
    color: '#FF6B6B',
  },
});

export default ProfileScreen;