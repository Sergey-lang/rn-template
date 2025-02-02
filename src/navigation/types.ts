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
  Profile: undefined;
  Personal_Page: { id: number };
};

export type ProfileStackParamList = {
  Profile: undefined;
};

export enum AppRoutes {
  PROFILE = 'Profile',
  PEOPLE = 'People',
  PERSONAL_PAGE = 'Personal_Page',
  LOGIN = 'Login',
}

export enum AppStacks {
  MAIN = 'MainStack',
  LOGIN = 'LoginStack',
}
