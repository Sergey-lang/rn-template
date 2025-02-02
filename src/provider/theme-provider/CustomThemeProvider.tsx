import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'react-native';
import { Colors } from '../../tokens';

export type ThemeType = 'light' | 'dark' | 'system';

type ThemeColors = {
  background: string;
  text: string;
  primary: string;
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
    primary: Colors.primary,
  },
  dark: {
    background: Colors.bgPrimaryDark,
    text: Colors.textPrimaryDark,
    primary: Colors.primaryDark,
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
