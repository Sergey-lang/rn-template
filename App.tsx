import * as React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PeoplesStack} from "./src/screens/auth/Peoples/PeoplesStack.tsx";
import {AppRoutes, AppStacks, MainStackParamList, RootStackParamList} from "./src/navigation/types.ts";
import {ProfileScreen} from "./src/screens/auth/Profile/ProfileScreen.tsx";
import {LoginScreen} from "./src/screens/login/LoginScreen.tsx";

const Tab = createBottomTabNavigator<MainStackParamList>();
const RootStack = createNativeStackNavigator<RootStackParamList>();

const MainTabs = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name={AppRoutes.PEOPLES} component={PeoplesStack}/>
            <Tab.Screen options={{headerShown: true}} name={AppRoutes.PROFILE} component={ProfileScreen}/>
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{headerShown: false}}>
                <RootStack.Screen name={AppStacks.MAIN} component={MainTabs} options={{headerShown: false}}/>
                <RootStack.Screen name={AppStacks.LOGIN} component={LoginScreen} options={{headerShown: false}}/>
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
