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

const lazyLoadBackend = {
    type: "backend" as const,
    init: () => { },
    // i18next now passes the namespace — forward it to loadTranslation
    read: async (
        language: string,
        namespace: string,
        callback: (err: unknown, data: unknown) => void
    ) => {
        try {
            const translations = await loadTranslation(language, namespace);
            callback(null, translations);
        } catch (error) {
            callback(error, null);
        }
    },
};

i18n
    .use(LanguageDetector)
    .use(lazyLoadBackend as any)
    .use(initReactI18next)
    .init({
        fallbackLng: "ja",
        supportedLngs: ["ja", "en", "fil"],

        // Declare both namespaces; "translation" is the default
        ns: ["translation", "products"],
        defaultNS: "translation",

        // Load namespaces on demand (products loads when Step4 mounts)
        partialBundledLanguages: true,

        detection: {
            order: ["localStorage", "navigator"],
            lookupLocalStorage: "ecoclean_lang",
            caches: ["localStorage"],
        },

        interpolation: {
            escapeValue: false,
        },

        load: "languageOnly",
        returnDetails: false,

        react: {
            useSuspense: false, // loading state handled in components
        },
    });

i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
});

export default i18n;
