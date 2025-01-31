import React, {useState} from 'react';
import {View, Text, Alert, TextInput, StyleSheet} from "react-native";
import {Colors} from "../../tokens/colors.ts";
import {TouchableBtn} from "../../components/TouchableBtn/TouchableBtn.tsx";

export const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Ошибка', 'Введите логин и пароль');
            return;
        }
        Alert.alert('Успешный вход', `Добро пожаловать, ${email}!`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Авторизация</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#888"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableBtn onPress={handleLogin} buttonText="Login"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        padding: 20,
    },
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
