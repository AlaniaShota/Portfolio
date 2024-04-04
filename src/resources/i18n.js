import en from "../../i18n/en/translation.json";
import ka from "../../i18n/ka/translation.json";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import Backend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: "en",
//     debug: true,
//     interpolation: {
//       escapeValue: false,
//     },
//     backend: {
//       loadPath: "/locales/{{lng}}/{{ns}}.json",
//     },
//   });
i18n.use(initReactI18next).init({
  debugger: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { translation: en },
    ka: { translation: ka },
    // en: {
    //   translation: {
    //     welcome: "Hello Eng",
    //   },
    // },
    // ka: {
    //   translation: {
    //     welcome: "გამარჯობა საქ",
    //   },
    // },
  },
});
export default i18n;
