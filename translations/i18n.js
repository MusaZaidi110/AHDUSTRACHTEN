import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './en.json';
import nlTranslations from './nl.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    nl: { translation: nlTranslations }
  },
  lng: 'en' // Default language
});

export default i18n;
