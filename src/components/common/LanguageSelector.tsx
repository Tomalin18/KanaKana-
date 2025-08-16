import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { GlassContainer } from './GlassContainer';
import { TechTheme, TechColors } from '../../constants/theme';
import { changeLanguage, getCurrentLanguage, getSupportedLanguages } from '../../i18n';

interface LanguageSelectorProps {
  visible: boolean;
  onClose: () => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  visible,
  onClose,
}) => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(getCurrentLanguage());
  const supportedLanguages = getSupportedLanguages();

  const handleLanguageChange = async (languageCode: string) => {
    try {
      await changeLanguage(languageCode);
      setSelectedLanguage(languageCode);
      
      // 顯示成功訊息
      Alert.alert(
        t('success.languageChanged'),
        t('success.languageChanged'),
        [{ text: t('common.confirm'), onPress: onClose }]
      );
    } catch (error) {
      console.error('語言切換失敗:', error);
      Alert.alert(
        t('errors.unknownError'),
        t('errors.tryAgainLater'),
        [{ text: t('common.confirm') }]
      );
    }
  };

  const renderLanguageOption = (language: {
    code: string;
    name: string;
    nativeName: string;
  }) => {
    const isSelected = selectedLanguage === language.code;
    
    return (
      <TouchableOpacity
        key={language.code}
        style={[
          styles.languageOption,
          isSelected && styles.selectedLanguageOption,
        ]}
        onPress={() => handleLanguageChange(language.code)}
        activeOpacity={0.7}
      >
        <GlassContainer
          variant={isSelected ? 'accent' : 'secondary'}
          glowEffect={isSelected}
          style={styles.languageContainer}
        >
          <View style={styles.languageInfo}>
            <Text style={[
              styles.languageName,
              isSelected && styles.selectedLanguageText,
            ]}>
              {language.nativeName}
            </Text>
            <Text style={[
              styles.languageCode,
              isSelected && styles.selectedLanguageText,
            ]}>
              {language.name}
            </Text>
          </View>
          {isSelected && (
            <View style={styles.selectedIndicator}>
              <Text style={styles.selectedIndicatorText}>✓</Text>
            </View>
          )}
        </GlassContainer>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <GlassContainer
          variant="primary"
          glowEffect={true}
          style={styles.modalContainer}
        >
          <View style={styles.header}>
            <Text style={styles.title}>{t('language.title')}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={onClose}
              activeOpacity={0.7}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.subtitle}>
            {t('language.selectLanguage')}
          </Text>

          <ScrollView
            style={styles.languageList}
            showsVerticalScrollIndicator={false}
          >
            {supportedLanguages.map(renderLanguageOption)}
          </ScrollView>

          <View style={styles.footer}>
            <Text style={styles.currentLanguageText}>
              {t('language.currentLanguage')}: {
                supportedLanguages.find(lang => lang.code === selectedLanguage)?.nativeName
              }
            </Text>
          </View>
        </GlassContainer>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    width: '100%',
    maxWidth: 400,
    maxHeight: '80%',
    borderRadius: 20,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: TechTheme.text,
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: TechColors.neonPink + '20',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 18,
    color: TechColors.neonPink,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: TechTheme.textSecondary,
    marginBottom: 20,
    textAlign: 'center',
  },
  languageList: {
    flex: 1,
  },
  languageOption: {
    marginBottom: 10,
  },
  selectedLanguageOption: {
    // 選中狀態的樣式
  },
  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
  },
  languageInfo: {
    flex: 1,
  },
  languageName: {
    fontSize: 18,
    fontWeight: '600',
    color: TechTheme.text,
    marginBottom: 4,
  },
  languageCode: {
    fontSize: 14,
    color: TechTheme.textSecondary,
  },
  selectedLanguageText: {
    color: TechTheme.text,
  },
  selectedIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: TechColors.neonGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedIndicatorText: {
    fontSize: 16,
    color: TechTheme.background,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: TechTheme.border,
  },
  currentLanguageText: {
    fontSize: 14,
    color: TechTheme.textSecondary,
    textAlign: 'center',
  },
});
