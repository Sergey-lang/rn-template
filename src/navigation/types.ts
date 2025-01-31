export type RootStackParamList = {
  MainStack: undefined;
  LoginStack: undefined;
};

export type MainStackParamList = {
  Profile: undefined;
  People: undefined;
};

export type PeopleStackParamList = {
  People: undefined;
  PeopleItem: { id: string };
};

export enum AppRoutes {
  PROFILE = 'Profile',
  PEOPLE = 'People',
  PEOPLE_ITEM = 'PeopleItem',
  LOGIN = 'Login',
}

export enum AppStacks {
  MAIN = 'MainStack',
  LOGIN = 'LoginStack',
}
