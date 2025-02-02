import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PeopleScreen } from './PeopleScreen.tsx';
import { PersonalInfoScreen } from './PersonalInfoScreen.tsx';
import { AppRoutes, PeopleStackParamList } from '../../../navigation/types.ts';
import { useTheme } from '../../../provider/theme-provider/CustomThemeProvider.tsx';

const Stack = createNativeStackNavigator<PeopleStackParamList>();

export const PeopleStack = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTitleStyle: { color: colors.text },
        headerTintColor: colors.text,
      }}
    >
      <Stack.Screen name={AppRoutes.PEOPLE} component={PeopleScreen} />
      <Stack.Screen name={AppRoutes.PERSONAL_PAGE} component={PersonalInfoScreen} />
    </Stack.Navigator>
  );
};
