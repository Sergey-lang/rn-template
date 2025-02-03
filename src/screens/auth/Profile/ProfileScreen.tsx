import { Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { observer } from 'mobx-react-lite';
import profileStore from './profile-store.ts';
import * as React from 'react';
import { useEffect } from 'react';
import { useTheme } from '../../../provider/theme-provider/CustomThemeProvider.tsx';
import { TextInfo } from '../../../components/Empty/TextInfo.tsx';
import { Container } from '../../../components/Container/Container.tsx';
import {TouchableBtn} from "../../../components/TouchableBtn/TouchableBtn.tsx";
import {useTranslation} from "react-i18next";

const avatarURl = 'https://randomuser.me/api/portraits/men/45.jpg';
// theme switch example
export const ProfileScreen = observer(() => {
  const { theme, setTheme, colors } = useTheme();
  const {t} = useTranslation();
  const { profile, getProfileAction, loading, error } = profileStore;

  useEffect(() => {
    getProfileAction(1);
  }, []);

  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  if (error) {
    return <TextInfo>{error}</TextInfo>;
  }

  return (
    <Container type="center">
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Image source={{ uri: avatarURl }} style={styles.avatar} />
          <Text style={[styles.name, { color: colors.text }]}>{profile?.name}</Text>
          <Text style={[styles.info, { color: colors.text }]}>{profile?.website}</Text>
          <Text style={[styles.info, { color: colors.text }]}>{profile?.phone}</Text>
          <TouchableBtn onPress={handleToggleTheme} buttonText={t('THEME_SWITCH', {theme: theme === 'light' ? 'Dark' : 'Light'})}/>
        </>
      )}
    </Container>
  );
});

const styles = StyleSheet.create({
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
});
