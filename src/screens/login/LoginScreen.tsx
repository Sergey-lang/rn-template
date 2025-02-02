import React, {useState} from 'react';
import {Alert, TextInput, StyleSheet, ActivityIndicator} from "react-native";
import {Colors} from "../../tokens/colors.ts";
import {TouchableBtn} from "../../components/TouchableBtn/TouchableBtn.tsx";
import {Container} from "../../components/Container/Container.tsx";
import profileStore from "../auth/Profile/profile-store.ts";
import {useTranslation} from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
        const newLang = language === "en" ? "ru" : "en";
        await AsyncStorage.setItem("language", newLang);
        i18n.changeLanguage(newLang);
        setLanguage(newLang);
    };

    return (
        <Container type="center">
            {loading ? <ActivityIndicator size="large"/> : (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder={t('EMAIL')}
                        placeholderTextColor="#888"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder={t('PASSWORD')}
                        placeholderTextColor="#888"
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

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 12,
        backgroundColor: Colors.white,
        fontSize: 16,
    },
});
