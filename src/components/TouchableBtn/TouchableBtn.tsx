import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {Colors} from "../../tokens/colors.ts";

export type TouchableBtnProps = {
    buttonText: string
    onPress: () => void
}

export const TouchableBtn: FC<TouchableBtnProps> = ({buttonText, onPress }) => {
    return <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
};


const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
});



