import React, {FC} from 'react';
import {StyleSheet, TextInput, TextInputProps} from "react-native";
import {Colors} from "../../tokens";
import {useTheme} from "../../provider/theme-provider/CustomThemeProvider.tsx";

type InputProps = {} & TextInputProps;

export const Input: FC<InputProps> = ({...restProps}) => {
    const { colors } = useTheme();
    return (
        <TextInput
            placeholderTextColor={colors.primaryPlaceholder}
            style={[styles.input, { color: colors.text, backgroundColor: colors.background }, restProps.style]}
            {...restProps}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 12,
        fontSize: 16,
    },
});

