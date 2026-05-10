import type { ResourceLanguage } from "i18next";

type TranslationLoader = () => Promise<ResourceLanguage>;

// Two-level map: [lang][namespace] → loader
const translationLoaders: Record<string, Record<string, TranslationLoader>> = {
  en: {
    translation: () => import("./en/en.json").then((m) => m.default),
    products: () => import("./en/en.products.json").then((m) => m.default),
  },
  ja: {
    translation: () => import("./ja/ja.json").then((m) => m.default),
    products: () => import("./ja/ja.products.json").then((m) => m.default),
  },
  fil: {
    translation: () => import("./fil/fil.json").then((m) => m.default),
    products: () => import("./fil/fil.products.json").then((m) => m.default),
  },
};

// Cache key includes both lang and namespace so they don't collide
type CacheKey = `${string}:${string}`;

const translationCache = new Map<CacheKey, {
  data: ResourceLanguage;
  timestamp: number;
}>();

const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

export function clearTranslationCache(lang?: string) {
  if (lang) {
    // Clear all namespaces for this lang
    for (const key of translationCache.keys()) {
      if (key.startsWith(`${lang}:`)) translationCache.delete(key);
    }
  } else {
    translationCache.clear();
  }
}

export function getCacheSize(): number {
  return translationCache.size;
}

export async function loadTranslation(
  lang: string,
  namespace = "translation"
): Promise<ResourceLanguage> {
  const cacheKey: CacheKey = `${lang}:${namespace}`;
  const cached = translationCache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  const loader = translationLoaders[lang]?.[namespace];

  if (!loader) {
    console.warn(
      `No loader for [${lang}/${namespace}]. ` +
      (namespace === "products"
        ? "Did you run split-translations.js?"
        : "Falling back to empty.")
    );
    return {};
  }

  try {
    const data = await loader();
    translationCache.set(cacheKey, { data, timestamp: Date.now() });
    return data;
  } catch (error) {
    console.error(`Failed to load [${lang}/${namespace}]:`, error);
    // Stale cache fallback (offline resilience)
    if (cached) {
      console.warn(`Using stale cache for [${lang}/${namespace}]`);
      return cached.data;
    }
    return {};
  }
}

// Preload the UI translation for a language (not products — those load on demand)
const PRELOAD_LANGUAGES = ["en"];

export function preloadTranslations(languages: string[] = PRELOAD_LANGUAGES) {
  if (typeof window === "undefined") return;

  const preload = () => {
    languages.forEach((lang) => {
      loadTranslation(lang, "translation").catch(() => { });
    });
  };

  if ("requestIdleCallback" in window) {
    requestIdleCallback(preload, { timeout: 2000 });
  } else {
    setTimeout(preload, 1000);
  }
}
