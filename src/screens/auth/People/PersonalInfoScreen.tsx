import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import { AppRoutes, PeopleStackParamList } from '../../../navigation/types.ts';
import { observer } from 'mobx-react-lite';
import peopleStore from './people-store.ts';
import { useEffect } from 'react';
import * as React from 'react';
import { TextInfo } from '../../../components/Empty/TextInfo.tsx';
import { Container } from '../../../components/Container/Container.tsx';
import { useTheme } from '../../../provider/theme-provider/CustomThemeProvider.tsx';
import { Colors } from '../../../tokens';

type Props = NativeStackScreenProps<PeopleStackParamList, AppRoutes.PERSONAL_PAGE>;

export const PersonalInfoScreen = observer(({ route }: Props) => {
  const { selectedPerson, getPersonAction, loading, error } = peopleStore;
  const { colors } = useTheme();
  const id = route?.params?.id;

  useEffect(() => {
    if (!id) return;
    getPersonAction(id);
  }, [id]);

  if (error) {
    return <TextInfo>{error}</TextInfo>;
  }

  return (
    <Container type="center">
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Text style={[styles.name, { color: colors.text }]}>{selectedPerson?.name}</Text>
          <Text style={[styles.info, { color: colors.text }]}>{selectedPerson?.website}</Text>
          <Text style={[styles.info, { color: colors.text }]}>{selectedPerson?.phone}</Text>
        </>
      )}
    </Container>
  );
});

const styles = StyleSheet.create({
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: Colors.textPrimary,
    marginBottom: 5,
  },
});
