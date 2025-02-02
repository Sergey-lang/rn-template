import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {PeopleScreen} from "./PeopleScreen.tsx";
import {PersonalInfoScreen} from "./PersonalInfoScreen.tsx";
import {AppRoutes, PeopleStackParamList} from "../../../navigation/types.ts";

const Stack = createNativeStackNavigator<PeopleStackParamList>();

export const PeopleStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={AppRoutes.PEOPLE} component={PeopleScreen}/>
            <Stack.Screen name={AppRoutes.PERSONAL_PAGE} component={PersonalInfoScreen}/>
        </Stack.Navigator>
    );
};
