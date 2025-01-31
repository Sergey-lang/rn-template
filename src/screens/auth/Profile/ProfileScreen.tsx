import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import {Colors} from "../../../tokens/colors.ts";

export const ProfileScreen = () => {

    const user = {
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg', // Фейковый аватар
        name: 'Alex Ivanov',
        email: 'alex.ivanov@example.com',
        phone: '+7 (999) 123-45-67',
        location: 'Moscow, Russia',
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.info}>{user.email}</Text>
            <Text style={styles.info}>{user.phone}</Text>
            <Text style={styles.info}>{user.location}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        padding: 20,
    },
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
