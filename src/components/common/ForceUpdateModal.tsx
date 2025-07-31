import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { UpdateInfo } from '@/utils/versionCheck';

interface ForceUpdateModalProps {
  updateInfo: UpdateInfo;
  onRetry?: () => void;
}

const { width, height } = Dimensions.get('window');

export const ForceUpdateModal: React.FC<ForceUpdateModalProps> = ({
  updateInfo,
  onRetry,
}) => {
  const handleUpdate = async () => {
    try {
      const supported = await Linking.canOpenURL(updateInfo.updateUrl);
      
      if (supported) {
        await Linking.openURL(updateInfo.updateUrl);
      } else {
        Alert.alert(
          '無法打開應用商店',
          '請手動前往應用商店更新應用',
          [
            { text: '取消', style: 'cancel' },
            { text: '重試', onPress: onRetry },
          ]
        );
      }
    } catch (error) {
      console.error('Failed to open update URL:', error);
      Alert.alert(
        '更新失敗',
        '無法打開應用商店，請手動前往更新',
        [
          { text: '取消', style: 'cancel' },
          { text: '重試', onPress: onRetry },
        ]
      );
    }
  };

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    }
  };

  return (
    <View style={styles.container}>
      <BlurView intensity={20} style={styles.blurContainer}>
        <LinearGradient
          colors={['rgba(30, 64, 175, 0.95)', 'rgba(59, 130, 246, 0.95)']}
          style={styles.modalContainer}
        >
          <View style={styles.content}>
            {/* 圖標 */}
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>🔄</Text>
            </View>

            {/* 標題 */}
            <Text style={styles.title}>需要更新</Text>
            
            {/* 副標題 */}
            <Text style={styles.subtitle}>
              發現新版本，請更新到最新版本以獲得最佳體驗
            </Text>

            {/* 版本信息 */}
            <View style={styles.versionInfo}>
              <Text style={styles.versionText}>
                當前版本：{updateInfo.currentVersion}
              </Text>
              <Text style={styles.versionText}>
                最新版本：{updateInfo.latestVersion}
              </Text>
            </View>

            {/* 更新說明 */}
            {updateInfo.releaseNotes && (
              <View style={styles.releaseNotesContainer}>
                <Text style={styles.releaseNotesTitle}>更新內容：</Text>
                <Text style={styles.releaseNotes}>{updateInfo.releaseNotes}</Text>
              </View>
            )}

            {/* 按鈕 */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.updateButton}
                onPress={handleUpdate}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={['#10B981', '#059669']}
                  style={styles.updateButtonGradient}
                >
                  <Text style={styles.updateButtonText}>立即更新</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.retryButton}
                onPress={handleRetry}
                activeOpacity={0.8}
              >
                <Text style={styles.retryButtonText}>重試檢查</Text>
              </TouchableOpacity>
            </View>

            {/* 提示 */}
            <Text style={styles.hint}>
              更新完成後請重新啟動應用
            </Text>
          </View>
        </LinearGradient>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
  },
  blurContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: width * 0.85,
    maxWidth: 400,
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  content: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
  versionInfo: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    width: '100%',
  },
  versionText: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 4,
  },
  releaseNotesContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    width: '100%',
  },
  releaseNotesTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  releaseNotes: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 20,
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  updateButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  updateButtonGradient: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  updateButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  retryButton: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  retryButtonText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  hint: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    marginTop: 16,
  },
}); 