import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {PeopleScreen} from "./PeopleScreen.tsx";
import {PeopleItemScreen} from "./PeopleItemScreen.tsx";
import {AppRoutes, PeopleStackParamList} from "../../../navigation/types.ts";

const Stack = createNativeStackNavigator<PeopleStackParamList>();

export const PeopleStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={AppRoutes.PEOPLE} component={PeopleScreen}/>
            <Stack.Screen name={AppRoutes.PEOPLE_ITEM} component={PeopleItemScreen}/>
        </Stack.Navigator>
    );
};
