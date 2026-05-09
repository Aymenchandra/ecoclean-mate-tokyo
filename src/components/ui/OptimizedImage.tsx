import { memo } from "react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    /** Image source URL */
    src: string;
    /** Descriptive alt text for accessibility */
    alt: string;
    /** Intrinsic width — prevents CLS */
    width?: number | string;
    /** Intrinsic height — prevents CLS */
    height?: number | string;
    /** 
     * Loading strategy. Defaults to "lazy".
     * Use "eager" only for above-the-fold images (hero, logo, etc.)
     */
    loading?: "lazy" | "eager";
    /** Fallback image URL on error */
    fallbackSrc?: string;
}

/**
 * A performance-optimized image component that applies best practices:
 * - Native lazy loading (default)
 * - Async decoding to avoid blocking the main thread
 * - Explicit width/height to prevent layout shift (CLS)
 * - Optional error fallback
 */
const OptimizedImage = memo(function OptimizedImage({
    src,
    alt,
    loading = "lazy",
    fallbackSrc,
    onError,
    ...rest
}: OptimizedImageProps) {
    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        if (fallbackSrc) {
            (e.target as HTMLImageElement).src = fallbackSrc;
        }
        onError?.(e);
    };

    return (
        <img
            src={src}
            alt={alt}
            loading={loading}
            decoding="async"
            onError={fallbackSrc ? handleError : onError}
            {...rest}
        />
    );
});

export default OptimizedImage;
