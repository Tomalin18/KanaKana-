import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { GameMode, ClassicModeSettings, KanjiModeSettings } from '@/types';
import { MainMenuScreen } from '@/screens/main/MainMenuScreen';
import { GameScreen } from '@/screens/main/GameScreen';
import { SettingsScreen } from '@/screens/common/SettingsScreen';

export type RootStackParamList = {
  MainMenu: undefined;
  Game: {
    mode: GameMode;
    settings?: ClassicModeSettings | KanjiModeSettings;
  };
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * 主應用導航器
 * 管理應用的主要導航流程
 */
export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainMenu"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen 
          name="MainMenu" 
          component={MainMenuScreen}
          options={{
            title: 'かなタワー',
          }}
        />
        <Stack.Screen 
          name="Game" 
          component={GameScreen}
          options={{
            title: 'ゲーム',
            gestureEnabled: false, // 遊戲中禁用手勢返回
          }}
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{
            title: '設定',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; 