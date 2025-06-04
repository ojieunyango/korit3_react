import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import de from './de.json';
// i18 초기화
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en }, // 영어 번역 파일
    de: { translation: de }, // 독일어 번역 파일
  },
  lng: 'en',
  fallbackLng: 'en', // 기본 언어
  interpolation: {
    escapeValue: false, //React에서는 HTML escape 불필요
  },
});

export default i18n;