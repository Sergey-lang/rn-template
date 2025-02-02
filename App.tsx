import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PeopleStack} from "./src/screens/auth/People/PeopleStack.tsx";
import {AppRoutes, AppStacks, MainStackParamList, RootStackParamList} from "./src/navigation/types.ts";
import {ProfileScreen} from "./src/screens/auth/Profile/ProfileScreen.tsx";
import {LoginScreen} from "./src/screens/login/LoginScreen.tsx";
import {CustomThemeProvider} from './src/provider/theme-provider/CustomThemeProvider.tsx'
import {IconSearch} from "./src/assets/icons/IconSearch.tsx";
import {IconProfile} from "./src/assets/icons/IconProfile.tsx";

const Tab = createBottomTabNavigator<MainStackParamList>();
const RootStack = createNativeStackNavigator<RootStackParamList>();

const MainTabs = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name={AppRoutes.PEOPLE}
                component={PeopleStack}
                options={{tabBarIcon: () => <IconSearch/>}}/>
            <Tab.Screen
                options={{headerShown: true, tabBarIcon: () => <IconProfile/>}}
                name={AppRoutes.PROFILE}
                component={ProfileScreen}/>
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <CustomThemeProvider>
                <RootStack.Navigator screenOptions={{headerShown: false}}>
                    <RootStack.Screen
                        name={AppStacks.MAIN}
                        component={MainTabs}
                        options={{headerShown: false}}/>
                    <RootStack.Screen
                        name={AppStacks.LOGIN}
                        component={LoginScreen}

                        options={{headerShown: false}}/>
                </RootStack.Navigator>
            </CustomThemeProvider>
        </NavigationContainer>
    );
}
