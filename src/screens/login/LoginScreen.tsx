import React, {useState} from 'react';
import {Alert, TextInput, StyleSheet, ActivityIndicator} from "react-native";
import {Colors} from "../../tokens/colors.ts";
import {TouchableBtn} from "../../components/TouchableBtn/TouchableBtn.tsx";
import {Container} from "../../components/Container/Container.tsx";
import profileStore from "../auth/Profile/profile-store.ts";

export const LoginScreen = () => {
    const [email, setEmail] = useState('test@mail.com');
    const [password, setPassword] = useState('123456');
    const {getProfileAction, loading} = profileStore;

    const handleLogin = async () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert('Error', 'Enter login and password');
            return;
        }

        try {
            await getProfileAction(1);
            Alert.alert('Login successfully', `Welcome, ${email}!`);
        } catch (e) {
            Alert.alert('Some error', 'Please try again later');
        }
    };

    return (
        <Container type="center">
            {loading ? <ActivityIndicator size="large"/> : (
                <>
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
