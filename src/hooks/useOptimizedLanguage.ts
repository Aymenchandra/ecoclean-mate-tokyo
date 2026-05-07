import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { preloadTranslations } from "../i18n/locales/loadTranslation";

export function useOptimizedLanguage() {
    const { i18n, ready } = useTranslation();

    // Preload other languages after initial render
    useEffect(() => {
        if (ready) {
            const otherLanguages = i18n.languages.filter(
                (lang: string) => lang !== i18n.language
            );

            if (otherLanguages.length > 0) {
                preloadTranslations(otherLanguages);
            }
        }
    }, [i18n.language, ready, i18n.languages]);

    // Memoized language change handler
    const changeLanguage = useCallback(
        async (lang: string) => {
            if (lang === i18n.language) return;

            try {
                await i18n.changeLanguage(lang);
                return true;
            } catch (error) {
                console.error("Failed to change language:", error);
                return false;
            }
        },
        [i18n]
    );

    return {
        currentLanguage: i18n.language,
        changeLanguage,
        isReady: ready,
    };
}