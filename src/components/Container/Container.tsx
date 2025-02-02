import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../provider/theme-provider/CustomThemeProvider.tsx';
import { Colors } from '../../tokens';

type ContainerProps = {
  type?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
} & PropsWithChildren;

export const Container: FC<ContainerProps> = ({ children, type = 'start' }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const stylesProperty = {
    backgroundColor: isDark ? Colors.bgPrimaryDark : Colors.bgPrimary,
    alignItems: type,
    justifyContent: type,
  };

  return <View style={[styles.container, stylesProperty as ViewStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20,
  },
});
