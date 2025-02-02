import {View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator} from "react-native";
import {Colors} from "../../../tokens/colors.ts";
import {observer} from "mobx-react-lite";
import profileStore from "./profile-store.ts";
import * as React from "react";
import {useEffect} from "react";
import {useTheme} from "../../../provider/theme-provider/CustomThemeProvider.tsx";
import {TextInfo} from "../../../components/Empty/TextInfo.tsx";
import {Container} from "../../../components/Container/Container.tsx";

const avatarURl = 'https://randomuser.me/api/portraits/men/45.jpg';

export const ProfileScreen = observer(() => {
    const {theme, setTheme} = useTheme();
    const {profile, getProfileAction, loading, error} = profileStore;

    useEffect(() => {
        getProfileAction(1);
    }, []);

    const handleToggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    if (error) {
        return <TextInfo>{error}</TextInfo>
    }

    return (
        <Container type="center">
            {loading ? <ActivityIndicator size="large"/> : (
                <>
                    <Image source={{uri: avatarURl}} style={styles.avatar}/>
                    <Text style={styles.name}>{profile?.name}</Text>
                    <Text style={styles.info}>{profile?.website}</Text>
                    <Text style={styles.info}>{profile?.phone}</Text>
                    <TouchableOpacity style={styles.button} onPress={handleToggleTheme}>
                        <Text style={styles.buttonText}>
                            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
                        </Text>
                    </TouchableOpacity>
                </>
            )}
        </Container>
    )
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
        color: Colors.textPrimary,
        marginBottom: 5,
    },
    button: {
        marginTop: 20,
        backgroundColor: Colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
