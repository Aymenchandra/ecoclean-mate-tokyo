import type { ResourceLanguage } from "i18next";

type TranslationLoader = () => Promise<ResourceLanguage>;

const translationLoaders: Record<string, TranslationLoader> = {
  en: () => import("./en.json").then(m => m.default),
  ja: () => import("./ja.json").then(m => m.default),
  fil: () => import("./fil.json").then(m => m.default),
};

// Cache management
const translationCache = new Map<string, {
  data: ResourceLanguage;
  timestamp: number;
}>();

const CACHE_DURATION = 1000 * 60 * 60; // 1 hour cache
const PRELOAD_LANGUAGES = ["en"]; // Languages to preload after initial render

export function clearTranslationCache(lang?: string) {
  if (lang) {
    translationCache.delete(lang);
  } else {
    translationCache.clear();
  }
}

export function getCacheSize(): number {
  return translationCache.size;
}

export async function loadTranslation(lang: string): Promise<ResourceLanguage> {
  // Check cache first
  const cached = translationCache.get(lang);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  const loader = translationLoaders[lang];

  if (!loader) {
    console.warn(`No translation loader found for language: ${lang}. Falling back to default.`);
    return {};
  }

  try {
    const translations = await loader();

    // Store in cache
    translationCache.set(lang, {
      data: translations,
      timestamp: Date.now(),
    });

    return translations;
  } catch (error) {
    console.error(`Failed to load translations for ${lang}:`, error);

    // Try to return stale cache if available (offline fallback)
    if (cached) {
      console.warn(`Using stale cache for ${lang}`);
      return cached.data;
    }

    return {};
  }
}

// Preload commonly used languages
export function preloadTranslations(languages: string[] = PRELOAD_LANGUAGES) {
  if (typeof window !== "undefined") {
    // Use requestIdleCallback for non-critical preloading
    const preload = () => {
      languages.forEach(lang => {
        loadTranslation(lang).catch(() => {
          // Silently fail preloading
        });
      });
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(preload, { timeout: 2000 });
    } else {
      setTimeout(preload, 1000);
    }
  }
}