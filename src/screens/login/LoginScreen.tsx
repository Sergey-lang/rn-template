import React, {useState} from 'react';
import {Alert, ActivityIndicator} from 'react-native';
import {TouchableBtn} from '../../components/TouchableBtn/TouchableBtn.tsx';
import {Container} from '../../components/Container/Container.tsx';
import profileStore from '../auth/Profile/profile-store.ts';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Input} from "../../components/Input/Input.tsx";

export const LoginScreen = () => {
    const [email, setEmail] = useState('test@mail.com');
    const [password, setPassword] = useState('123456');
    const {t, i18n} = useTranslation();
    const [language, setLanguage] = useState(i18n.language);
    const {getProfileAction, loading} = profileStore;

    const handleLogin = async () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert(t('ERROR'), t('LOGIN_ERROR'));
            return;
        }

        try {
            await getProfileAction(1);
        } catch (e) {
            Alert.alert(t('ERROR'), t('LOGIN_SOME_ERROR'));
        }
    };

    const changeLanguage = async () => {
        const newLang = language === 'en' ? 'ru' : 'en';
        await AsyncStorage.setItem('language', newLang);
        i18n.changeLanguage(newLang);
        setLanguage(newLang);
    };

    return (
        <Container type="center">
            {loading ? (
                <ActivityIndicator size="large"/>
            ) : (
                <>
                    <Input
                        placeholder={t('EMAIL')}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <Input
                        placeholder={t('PASSWORD')}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <TouchableBtn onPress={handleLogin} buttonText={t('LOGIN')}/>
                    <TouchableBtn onPress={changeLanguage} buttonText={t('CHANGE_LANGUAGE')}/>
                </>
            )}
        </Container>
    );
};
