import React, {FC, PropsWithChildren} from 'react';
import {StyleSheet, Text} from "react-native";
import {Colors} from "../../tokens/colors.ts";

export const TextInfo: FC<PropsWithChildren> = ({children}) => {
    return (
        <Text style={styles.emptyText}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        color: Colors.textPrimary,
    },
});
