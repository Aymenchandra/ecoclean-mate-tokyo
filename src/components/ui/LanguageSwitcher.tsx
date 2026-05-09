import { useState, useRef, useEffect, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES, type LangCode } from "../../i18n/i18n";
import { useOptimizedLanguage } from "../../hooks/useOptimizedLanguage";

const LanguageSwitcher = memo(function LanguageSwitcher() {
    const { t } = useTranslation();
    const { currentLanguage, changeLanguage } = useOptimizedLanguage();
    const [open, setOpen] = useState(false);
    const [changing, setChanging] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const focusRef = useRef<HTMLButtonElement>(null);

    const current = LANGUAGES.find((l) => l.code === currentLanguage)
        ?? LANGUAGES.find((l) => currentLanguage.startsWith(l.code.split("-")[0]))
        ?? LANGUAGES[0];

    // Close on outside click - memoized handler
    const handleClickOutside = useCallback((e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            setOpen(false);
        }
    }, []);

    // Close on Escape - memoized handler
    const handleEscapeKey = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            setOpen(false);
            // Return focus to trigger button
            focusRef.current?.focus();
        }
    }, []);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscapeKey);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [handleClickOutside, handleEscapeKey]);

    // Focus trap in dropdown
    const handleSelect = useCallback(async (code: LangCode) => {
        if (code === currentLanguage) {
            setOpen(false);
            return;
        }

        setChanging(true);
        try {
            await changeLanguage(code);
        } finally {
            setChanging(false);
            setOpen(false);
            // Focus back to trigger after language change
            focusRef.current?.focus();
        }
    }, [currentLanguage, changeLanguage]);

    const toggleOpen = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);

    return (
        <div ref={ref} className="relative z-50">
            {/* Trigger button */}
            <button
                ref={focusRef}
                type="button"
                onClick={toggleOpen}
                disabled={changing}
                aria-label={t("aria.switchLanguage")}
                aria-haspopup="listbox"
                aria-expanded={open}
                className="relative flex items-center gap-1.5 h-9 px-2.5 rounded-lg border border-gray-200/60 bg-gray-50 hover:border-orange-300 transition-all duration-300 group disabled:opacity-50 disabled:cursor-wait"
            >
                {changing ? (
                    <div
                        className="w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"
                        aria-hidden="true"
                    />
                ) : (
                    <>
                        <span className="text-base leading-none" aria-hidden="true">
                            {current.flag}
                        </span>
                        <span className="text-xs font-semibold text-gray-700 group-hover:text-orange-500 transition-colors duration-300 tabular-nums">
                            {current.short}
                        </span>
                        {/* Chevron */}
                        <svg
                            className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""
                                }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </>
                )}
            </button>

            {/* Dropdown */}
            <div
                role="listbox"
                aria-label={t("aria.switchLanguage")}
                className={`
          absolute right-0 mt-2 w-40 origin-top-right
          bg-white 
          rounded-xl shadow-xl shadow-black/10 
          border border-gray-100 
          overflow-hidden
          transition-all duration-200
          ${open
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                    }
        `}
            >
                <div className="py-1.5 px-1.5 flex flex-col gap-0.5">
                    {LANGUAGES.map((lang) => {
                        const isActive = current.code === lang.code;
                        return (
                            <button
                                key={lang.code}
                                role="option"
                                aria-selected={isActive}
                                type="button"
                                onClick={() => handleSelect(lang.code)}
                                disabled={changing}
                                className={`
                  flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-left
                  transition-all duration-200 text-sm font-medium
                  disabled:opacity-50
                  ${isActive
                                        ? "bg-orange-50 text-orange-600"
                                        : "text-gray-700 hover:bg-gray-50 hover:text-orange-500"
                                    }
                `}
                            >
                                <span className="text-base leading-none">{lang.flag}</span>
                                <span className="flex-1">{lang.label}</span>
                                {isActive && (
                                    <svg
                                        className="w-3.5 h-3.5 text-orange-500 shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
});

export default LanguageSwitcher;