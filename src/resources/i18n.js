import en from "../../i18n/en/translation.json";
import ka from "../../i18n/ka/translation.json";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
i18n.use(initReactI18next).init({
  debugger: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { translation: en },
    ka: { translation: ka },
  },
});
export default i18n;
