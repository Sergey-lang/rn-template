import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ru from './locales/ru.json';
import i18next from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const resources = {
  en: { translation: en },
  ru: { translation: ru },
};

const loadLanguage = async () => {
  const savedLang = await AsyncStorage.getItem('language');
  return savedLang || 'ru';
};
loadLanguage().then((lang) => {
  i18next.use(initReactI18next).init({
    resources,
    lng: lang,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });
});

export default i18next;
