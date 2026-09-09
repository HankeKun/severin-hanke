import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en-translation.json";
import deTranslation from "./locales/de-translation.json";

i18next.use(LanguageDetector).use(initReactI18next).init({
    interpolation: {escapeValue: false},
    fallbackLng: 'en',
    resources: {
        en: {translation: enTranslation},
        de: {translation: deTranslation},
    },
});

export default i18next;
