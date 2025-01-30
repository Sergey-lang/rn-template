import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {PeoplesScreen} from "./PeoplesScreen.tsx";
import {PeopleScreen} from "./PeopleScreen.tsx";
import {AppRoutes, PeopleStackParamList} from "../../../navigation/types.ts";

const Stack = createNativeStackNavigator<PeopleStackParamList>();

export const PeoplesStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={AppRoutes.PEOPLES} component={PeoplesScreen}/>
            <Stack.Screen name={AppRoutes.PEOPLE} component={PeopleScreen}/>
        </Stack.Navigator>
    );
};
