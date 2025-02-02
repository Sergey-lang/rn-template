import {
    ActivityIndicator,
    FlatList,
    RefreshControl,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import * as React from "react";
import {NavigationProp, ParamListBase, useNavigation} from "@react-navigation/native";
import {AppRoutes} from "../../../navigation/types.ts";
import {getFontFamily} from "../../../tokens/fonts.ts";
import {useEffect, useState} from "react";
import {Colors} from "../../../tokens/colors.ts";
import peopleStore from "./people-store.ts";
import {observer} from "mobx-react-lite";
import {TextInfo} from "../../../components/Empty/TextInfo.tsx";
import {Container} from "../../../components/Container/Container.tsx";

export const PeopleScreen = observer(() => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const {people, getPeopleAction, loading, error} = peopleStore;
    const [searchText, setSearchText] = useState<string>('');

    const onPress = (id: number) => {
        navigation.navigate(AppRoutes.PERSONAL_PAGE, {id});
    }
    useEffect(() => {
        getPeopleAction();
    }, []);


    if (error) {
        return <TextInfo>{error}</TextInfo>
    }

    return (
        <Container>
            <TextInput
                style={styles.input}
                placeholder="Search..."
                value={searchText}
                onChangeText={setSearchText}
            />
            {loading ? <ActivityIndicator size="large"/> : (
                <FlatList data={people}
                          keyExtractor={item => String(item.id)}
                          renderItem={({item}) => {
                              return (
                                  <TouchableOpacity onPress={() => onPress(item.id)} style={styles.item}>
                                      <Text style={styles.itemText}>{item.name}</Text>
                                  </TouchableOpacity>
                              )
                          }}
                          ListEmptyComponent={<TextInfo>No results...</TextInfo>}
                          refreshControl={
                              <RefreshControl
                                  refreshing={loading}
                                  onRefresh={getPeopleAction}
                              />
                          }
                />
            )}
        </Container>
    )
});

const styles = StyleSheet.create({
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
});
