export type RootStackParamList = {
  MainStack: undefined;
  LoginStack: undefined;
};

export type MainStackParamList = {
  Profile: undefined;
  Peoples: undefined;
};

export type PeopleStackParamList = {
  Peoples: undefined;
  People: { id: string };
};

export enum AppRoutes {
  PROFILE = 'Profile',
  PEOPLES = 'Peoples',
  PEOPLE = 'People',
  LOGIN = 'Login',
}

export enum AppStacks {
  MAIN = 'MainStack',
  LOGIN = 'LoginStack',
}
