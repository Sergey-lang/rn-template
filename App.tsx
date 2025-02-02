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
import {observer} from "mobx-react-lite";
import profileStore from "./src/screens/auth/Profile/profile-store.ts";
import {I18nextProvider} from "react-i18next";
import i18next from "./src/lang/i18n.ts";

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

const App = observer(() => {
    const {profile} = profileStore;

    return (

        <NavigationContainer>
            <CustomThemeProvider>
                <I18nextProvider i18n={i18next}>
                    <RootStack.Navigator screenOptions={{headerShown: false}}>
                        {profile ? (
                            <RootStack.Screen
                                name={AppStacks.MAIN}
                                component={MainTabs}
                                options={{headerShown: false}}/>
                        ) : (
                            <RootStack.Screen
                                name={AppStacks.LOGIN}
                                component={LoginScreen}

                                options={{headerShown: false}}/>
                        )}
                    </RootStack.Navigator>
                </I18nextProvider>
            </CustomThemeProvider>
        </NavigationContainer>

    );
})

export default App;
