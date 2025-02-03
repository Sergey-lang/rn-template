import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'react-native';
import { Colors } from '../../tokens';

export type ThemeType = 'light' | 'dark' | 'system';

type ThemeColors = {
  primary: string;
  background: string;
  text: string;
  textBtn: string;
  invertedText: string;
  primaryPlaceholder: string;
};

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  colors: ThemeColors;
}

const themes = {
  light: {
    background: Colors.bgPrimary,
    text: Colors.textPrimary,
    textBtn: Colors.textBtnPrimary,
    invertedText: Colors.textInverted,
    primary: Colors.primary,
    primaryPlaceholder: Colors.gray,
  },
  dark: {
    background: Colors.bgPrimaryDark,
    text: Colors.textPrimaryDark,
    textBtn: Colors.textBtnPrimaryDark,
    invertedText: Colors.textInvertedDark,
    primary: Colors.primaryDark,
    primaryPlaceholder: Colors.gray,
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemScheme = useColorScheme();
  const [theme, setThemeState] = useState<ThemeType>('system');

  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('theme');
      console.log('storedTheme', storedTheme);
      if (storedTheme) {
        setThemeState(storedTheme as ThemeType);
      }
    };
    loadTheme();
  }, []);

  const setTheme = async (newTheme: ThemeType) => {
    await AsyncStorage.setItem('theme', newTheme);
    setThemeState(newTheme);
  };

  const currentTheme = theme === 'system' ? systemScheme || 'light' : theme;
  const colors = themes[currentTheme as 'light' | 'dark'];

  return <ThemeContext.Provider value={{ theme, setTheme, colors }}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a CustomThemeProvider');
  }
  return context;
};
