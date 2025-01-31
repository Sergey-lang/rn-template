import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {NavigationProp, ParamListBase, useNavigation} from "@react-navigation/native";
import {AppRoutes} from "../../../navigation/types.ts";
import {getFontFamily} from "../../../tokens/fonts.ts";
import {useState} from "react";
import {Colors} from "../../../tokens/colors.ts";

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

export const PeopleScreen = () => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const [searchText, setSearchText] = useState<string>('');

    const onPress = (id: string) => {
        navigation.navigate(AppRoutes.PEOPLE_ITEM, {id});
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Поиск..."
                value={searchText}
                onChangeText={setSearchText}
            />
            <FlatList data={DATA}
                      keyExtractor={item => item.id}
                      renderItem={({item}) => {
                          return (
                              <TouchableOpacity onPress={() => onPress(item.id)} style={styles.item}>
                                  <Text style={styles.itemText}>{item.title}</Text>
                              </TouchableOpacity>
                          )
                      }}
                      ListEmptyComponent={<Text style={styles.emptyText}>Ничего не найдено</Text>}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.white,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: Colors.graySecondary,
    },
    itemText: {
        fontSize: 16,
        fontFamily: getFontFamily('normal'),
        color: Colors.textPrimary,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        color: Colors.textPrimary,
    },
});
