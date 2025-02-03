import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {useTheme} from "../../provider/theme-provider/CustomThemeProvider.tsx";

export type TouchableBtnProps = {
    buttonText: string;
} & TouchableOpacityProps;

export const TouchableBtn: FC<TouchableBtnProps> = ({buttonText, ...otherProps}) => {
    const {colors} = useTheme();
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors.primary}]} {...otherProps}>
            <Text style={[styles.buttonText, {color: colors.textBtn}]}>{buttonText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
