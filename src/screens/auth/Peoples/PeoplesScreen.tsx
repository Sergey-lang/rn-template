import {FlatList, StyleSheet, Text, TouchableOpacity} from "react-native";
import * as React from "react";
import {NavigationProp, ParamListBase, useNavigation} from "@react-navigation/native";
import {AppRoutes} from "../../../navigation/types.ts";

const DATA: Array<{ id: string, title: string }> = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '586942a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f1-bd96-145571e29d72',
        title: 'Fourth Item',
    },
    {
        id: '58694a0f-34da1-471f-bd96-145571e29d72',
        title: '5 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-1455713e29d72',
        title: '6 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145534713e29d72',
        title: '7 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571563e29d72',
        title: '8 Item',
    },
];

export const PeoplesScreen = () => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const onPress = (id: string) => {
        navigation.navigate(AppRoutes.PEOPLE, {id});
    }

    return (
        <FlatList data={DATA} keyExtractor={item => item.id} renderItem={({item}) => {
            return (
                <TouchableOpacity onPress={() => onPress(item.id)} style={styles.item}>
                    <Text style={styles.title}>{item.title}</Text>
                </TouchableOpacity>
            )
        }}/>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
