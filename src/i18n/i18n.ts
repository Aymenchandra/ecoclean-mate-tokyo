import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { loadTranslation } from "./locales/loadTranslation";

export const LANGUAGES = [
    { code: "ja", label: "日本語", flag: "🇯🇵", short: "JP" },
    { code: "en", label: "English", flag: "🇺🇸", short: "EN" },
    { code: "fil", label: "Filipino", flag: "🇵🇭", short: "PH" },
] as const;

export type LangCode = (typeof LANGUAGES)[number]["code"];

// Type for our backend plugin
const lazyLoadBackend = {
    type: "backend" as const,
    init: () => { },
    read: async (language: string, _namespace: string, callback: Function) => {
        try {
            const translations = await loadTranslation(language);
            callback(null, translations);
        } catch (error) {
            callback(error, null);
        }
    },
};

i18n
    .use(LanguageDetector)
    .use(lazyLoadBackend as any) // Type assertion needed for custom backend
    .use(initReactI18next)
    .init({
        fallbackLng: "ja",
        supportedLngs: ["ja", "en", "fil"],

        // Use custom backend for lazy loading
        partialBundledLanguages: true,

        detection: {
            order: ["localStorage", "navigator"],
            lookupLocalStorage: "ecoclean_lang",
            caches: ["localStorage"],
        },

        interpolation: {
            escapeValue: false,
        },

        // Important: Don't load anything initially
        load: "languageOnly",

        // Return details for debugging
        returnDetails: false,

        // React specific options
        react: {
            useSuspense: false, // We'll handle loading ourselves
        },
    });

export default i18n;