import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type ThemeType = 'light' | 'dark' | 'system';

interface ThemeContextType {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a CustomThemeProvider');
    }
    return context;
};
