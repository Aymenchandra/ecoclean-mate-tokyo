import { useTranslation } from "react-i18next";

interface TranslationLoaderProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

export default function TranslationLoader({
    children,
    fallback
}: TranslationLoaderProps) {
    const { ready } = useTranslation();

    if (!ready) {
        return fallback ? (
            <>{fallback}</>
        ) : (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">Loading...</p>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}