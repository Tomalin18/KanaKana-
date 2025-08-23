import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { useTranslation } from 'react-i18next';
import { authService } from '@/services/authService';
import { TechColors, Typography, Spacing } from '@/constants/theme';

interface LoginModalProps {
  visible: boolean;
  onClose: () => void;
  onLoginSuccess?: () => void;
  trigger?: 'first_launch' | 'game_end' | 'manual' | 'profile';
}

export const LoginModal: React.FC<LoginModalProps> = ({
  visible,
  onClose,
  onLoginSuccess,
  trigger = 'manual',
}) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  // 重置表單
  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setDisplayName('');
    setShowEmailForm(false);
    setIsSignUp(false);
  };

  // Email 登入/註冊
  const handleEmailAuth = async () => {
    // 驗證輸入
    if (!email || !password) {
      Alert.alert(t('common.error'), t('auth.pleaseEnterEmailPassword'));
      return;
    }

    if (isSignUp && password !== confirmPassword) {
      Alert.alert(t('common.error'), t('auth.passwordsDoNotMatch'));
      return;
    }

    if (isSignUp && password.length < 6) {
      Alert.alert(t('common.error'), t('auth.passwordTooShort'));
      return;
    }

    setIsLoading(true);
    try {
      const result = isSignUp 
        ? await authService.signUpWithEmail(email, password, displayName)
        : await authService.signInWithEmail(email, password);
      
      if (result.success) {
        Alert.alert(
          isSignUp ? t('auth.signUpSuccess') : t('auth.loginSuccess'),
          t('auth.dataWillSync'),
          [{ text: t('common.ok'), onPress: () => {
            onLoginSuccess?.();
            onClose();
            resetForm();
          }}]
        );
      } else {
        Alert.alert(
          t('common.error'),
          result.error || t('auth.unknownError')
        );
      }
    } catch (error) {
      Alert.alert(
        t('common.error'),
        error instanceof Error ? error.message : t('auth.unknownError')
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Google 登入
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const result = await authService.signInWithGoogle();
      
      if (result.success) {
        Alert.alert(
          t('auth.loginSuccess'),
          t('auth.dataWillSync'),
          [{ text: t('common.ok'), onPress: () => {
            onLoginSuccess?.();
            onClose();
          }}]
        );
      } else {
        Alert.alert(
          t('auth.loginFailed'),
          result.error || t('auth.tryAgainLater')
        );
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert(
        t('auth.loginFailed'),
        t('auth.tryAgainLater')
      );
    } finally {
      setIsLoading(false);
    }
  };

  // 繼續作為訪客
  const handleContinueAsGuest = async () => {
    await authService.continueAsGuest();
    onClose();
  };

  // 根據觸發場景顯示不同文案
  const getHeaderText = () => {
    switch (trigger) {
      case 'first_launch':
        return t('auth.welcomeTitle');
      case 'game_end':
        return t('auth.saveProgressTitle');
      case 'profile':
        return t('auth.loginTitle');
      default:
        return t('auth.loginTitle');
    }
  };

  const getSubtitleText = () => {
    switch (trigger) {
      case 'first_launch':
        return t('auth.welcomeSubtitle');
      case 'game_end':
        return t('auth.saveProgressSubtitle');
      case 'profile':
        return t('auth.loginSubtitle');
      default:
        return t('auth.loginSubtitle');
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => {
        onClose();
        resetForm();
      }}
    >
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <BlurView intensity={80} style={StyleSheet.absoluteFillObject} />
        
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.modal}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>{getHeaderText()}</Text>
              <Text style={styles.subtitle}>{getSubtitleText()}</Text>
            </View>

            {/* Login Options */}
            <View style={styles.loginOptions}>
              {!showEmailForm ? (
                <>
                  {/* Google 登入按鈕 */}
                  <TouchableOpacity
                    style={[styles.loginButton, styles.googleButton]}
                    onPress={handleGoogleLogin}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <ActivityIndicator color="#FFFFFF" />
                    ) : (
                      <>
                        <Text style={styles.buttonIcon}>🔵</Text>
                        <Text style={styles.buttonText}>
                          {t('auth.continueWithGoogle')}
                        </Text>
                      </>
                    )}
                  </TouchableOpacity>

                  {/* Email 登入按鈕 */}
                  <TouchableOpacity
                    style={[styles.loginButton, styles.emailButton]}
                    onPress={() => setShowEmailForm(true)}
                    disabled={isLoading}
                  >
                    <Text style={styles.buttonIcon}>✉️</Text>
                    <Text style={styles.buttonText}>
                      {t('auth.continueWithEmail')}
                    </Text>
                  </TouchableOpacity>

                  {/* 分隔線 */}
                  <View style={styles.divider}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>{t('auth.or')}</Text>
                    <View style={styles.dividerLine} />
                  </View>

                  {/* 訪客模式按鈕 */}
                  <TouchableOpacity
                    style={[styles.loginButton, styles.guestButton]}
                    onPress={handleContinueAsGuest}
                    disabled={isLoading}
                  >
                    <Text style={[styles.buttonText, styles.guestButtonText]}>
                      {t('auth.continueAsGuest')}
                    </Text>
                  </TouchableOpacity>
                </>
              ) : (
                /* Email 表單 */
                <View style={styles.emailForm}>
                  {isSignUp && (
                    <TextInput
                      style={styles.input}
                      placeholder={t('auth.displayName')}
                      placeholderTextColor="rgba(255, 255, 255, 0.5)"
                      value={displayName}
                      onChangeText={setDisplayName}
                      autoCapitalize="words"
                    />
                  )}
                  
                  <TextInput
                    style={styles.input}
                    placeholder={t('auth.email')}
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoComplete="email"
                    textContentType="emailAddress"
                  />
                  
                  <TextInput
                    style={styles.input}
                    placeholder={t('auth.password')}
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    autoCapitalize="none"
                    autoComplete="off"
                    textContentType="none"
                  />
                  
                  {isSignUp && (
                    <TextInput
                      style={styles.input}
                      placeholder={t('auth.confirmPassword')}
                      placeholderTextColor="rgba(255, 255, 255, 0.5)"
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
                      secureTextEntry
                      autoCapitalize="none"
                      autoComplete="off"
                      textContentType="none"
                    />
                  )}
                  
                  <TouchableOpacity
                    style={[styles.loginButton, styles.submitButton]}
                    onPress={handleEmailAuth}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <ActivityIndicator color="#FFFFFF" />
                    ) : (
                      <Text style={styles.buttonText}>
                        {isSignUp ? t('auth.signUp') : t('auth.signIn')}
                      </Text>
                    )}
                  </TouchableOpacity>
                  
                  <TouchableOpacity
                    style={styles.switchMode}
                    onPress={() => setIsSignUp(!isSignUp)}
                  >
                    <Text style={styles.switchModeText}>
                      {isSignUp ? t('auth.alreadyHaveAccount') : t('auth.needAccount')}
                    </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => {
                      setShowEmailForm(false);
                      resetForm();
                    }}
                  >
                    <Text style={styles.backButtonText}>{t('common.back')}</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>

            {/* Footer */}
            <Text style={styles.footerText}>
              {t('auth.privacyNotice')}
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  modal: {
    width: '85%',
    maxWidth: 400,
    backgroundColor: 'rgba(26, 26, 46, 0.95)',
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: '600',
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    lineHeight: 20,
    fontSize: 14,
  },
  loginOptions: {
    width: '100%',
    marginBottom: 24,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 16,
  },
  googleButton: {
    backgroundColor: '#4285F4',
  },
  emailButton: {
    backgroundColor: TechColors.neonPurple,
  },
  guestButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  buttonIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  guestButtonText: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  dividerText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 16,
    fontSize: 12,
  },
  footerText: {
    color: 'rgba(255, 255, 255, 0.5)',
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 16,
  },
  emailForm: {
    width: '100%',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 15,
    color: '#FFFFFF',
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  submitButton: {
    backgroundColor: TechColors.neonBlue,
    marginTop: 10,
  },
  switchMode: {
    marginTop: 15,
    alignItems: 'center',
  },
  switchModeText: {
    color: TechColors.neonBlue,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  backButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
  },
});