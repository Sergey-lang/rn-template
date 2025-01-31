import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {View, Text, StyleSheet} from "react-native";
import {AppRoutes, PeopleStackParamList} from "../../../navigation/types.ts";

type Props = NativeStackScreenProps<PeopleStackParamList, AppRoutes.PEOPLE_ITEM>;

export const PeopleItemScreen = ({route}: Props) => {
    const id = route?.params?.id;

    return (
        <View>
            <Text>Id is: {id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleHeader: {},
});
