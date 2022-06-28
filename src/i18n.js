import LanguageDetector from 'i18next-browser-languagedetector'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translate from './translate'

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: translate.en,
      },
      th: {
        translation: translate.th,
      },
    },
  })

export default i18n

const langs = {
  en: { nativeName: 'EN' },
  th: { nativeName: 'TH' },
}

export function languages() {
  return langs
}

export function getValueByLanguage(lang, obj) {
  return lang === 'en' ? obj.en : obj.th
}
