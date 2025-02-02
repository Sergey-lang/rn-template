import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoutes, ProfileStackParamList } from '../../../navigation/types.ts';
import { useTheme } from '../../../provider/theme-provider/CustomThemeProvider.tsx';
import { ProfileScreen } from './ProfileScreen.tsx';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export const ProfileStack = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTitleStyle: { color: colors.text },
        headerTintColor: colors.text,
      }}
    >
      <Stack.Screen name={AppRoutes.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
};
