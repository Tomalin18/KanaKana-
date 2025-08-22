import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { GlassContainer } from './GlassContainer';
import { TechTheme, TechColors } from '../../constants/theme';
import { changeLanguage, getCurrentLanguage, getSupportedLanguages } from '../../i18n';

interface LanguageDropdownProps {
  onLanguageChange?: (languageCode: string) => void;
}

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  onLanguageChange,
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(getCurrentLanguage());
  const supportedLanguages = getSupportedLanguages();
  const slideAnim = useRef(new Animated.Value(0)).current;

  const getCurrentLanguageName = () => {
    const currentLang = getCurrentLanguage();
    return supportedLanguages.find(lang => lang.code === currentLang)?.nativeName || '繁體中文';
  };

  const toggleDropdown = () => {
    if (isOpen) {
      // 關閉下拉選單
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => setIsOpen(false));
    } else {
      // 開啟下拉選單
      setIsOpen(true);
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleLanguageSelect = async (languageCode: string) => {
    try {
      await changeLanguage(languageCode);
      setSelectedLanguage(languageCode);
      onLanguageChange?.(languageCode);
      
      // 關閉下拉選單
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => setIsOpen(false));
    } catch (error) {
      console.error('語言切換失敗:', error);
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
        onPress={() => handleLanguageSelect(language.code)}
        activeOpacity={0.7}
      >
        <View style={styles.languageOptionContent}>
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
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* 主要選擇器按鈕 */}
      <TouchableOpacity
        style={styles.selectorButton}
        onPress={toggleDropdown}
        activeOpacity={0.8}
      >
        <GlassContainer
          variant="surface"
          glowEffect={isOpen}
          style={styles.selectorContent}
        >
          <View style={styles.selectorInfo}>
            <Text style={styles.selectorLabel}>{t('language.uiLanguage')}</Text>
            <Text style={styles.selectorValue}>{getCurrentLanguageName()}</Text>
          </View>
          <View style={[
            styles.arrow,
            isOpen && styles.arrowUp
          ]}>
            <Text style={styles.arrowText}>▼</Text>
          </View>
        </GlassContainer>
      </TouchableOpacity>

      {/* 下拉選單 */}
      {isOpen && (
        <Animated.View
          style={[
            styles.dropdownContainer,
            {
              maxHeight: slideAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 200],
              }),
              opacity: slideAnim,
            },
          ]}
        >
          <GlassContainer
            variant="primary"
            glowEffect={true}
            style={styles.dropdownContent}
          >
            {supportedLanguages.map(renderLanguageOption)}
          </GlassContainer>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1000,
  },
  selectorButton: {
    width: '100%',
  },
  selectorContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
  },
  selectorInfo: {
    flex: 1,
  },
  selectorLabel: {
    fontSize: 14,
    color: TechTheme.textSecondary,
    marginBottom: 4,
  },
  selectorValue: {
    fontSize: 16,
    fontWeight: '600',
    color: TechTheme.text,
  },
  arrow: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowUp: {
    transform: [{ rotate: '180deg' }],
  },
  arrowText: {
    fontSize: 12,
    color: TechTheme.textSecondary,
  },
  dropdownContainer: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    zIndex: 1001,
    marginTop: 5,
    borderRadius: 12,
    overflow: 'hidden',
  },
  dropdownContent: {
    padding: 8,
  },
  languageOption: {
    marginBottom: 4,
  },
  selectedLanguageOption: {
    // 選中狀態的樣式
  },
  languageOptionContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
  },
  languageName: {
    fontSize: 16,
    fontWeight: '500',
    color: TechTheme.text,
  },
  languageCode: {
    fontSize: 12,
    color: TechTheme.textSecondary,
    marginLeft: 8,
  },
  selectedLanguageText: {
    color: TechTheme.text,
  },
  selectedIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: TechColors.neonGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedIndicatorText: {
    fontSize: 12,
    color: TechTheme.background,
    fontWeight: 'bold',
  },
});
