import React, { useEffect, useState } from "react";

interface ToastProps {
    message: string;
    type?: "error" | "success" | "warning";
    onClose: () => void;
    duration?: number;
}

const Toast: React.FC<ToastProps> = ({
    message,
    type = "error",
    onClose,
    duration = 3000,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);

    useEffect(() => {
        // Trigger enter animation
        requestAnimationFrame(() => setIsVisible(true));

        // Auto dismiss
        const timer = setTimeout(() => {
            handleClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    const handleClose = () => {
        setIsLeaving(true);
        setTimeout(() => {
            onClose();
        }, 300);
    };

    const typeStyles = {
        error: {
            bg: "bg-red-50 border-red-200",
            icon: "text-red-500",
            text: "text-red-800",
            bar: "bg-red-500",
        },
        success: {
            bg: "bg-green-50 border-green-200",
            icon: "text-green-500",
            text: "text-green-800",
            bar: "bg-green-500",
        },
        warning: {
            bg: "bg-orange-50 border-orange-200",
            icon: "text-orange-500",
            text: "text-orange-800",
            bar: "bg-orange-500",
        },
    };

    const styles = typeStyles[type];

    return (
        <div
            className={[
                "fixed top-4 right-4 z-50 max-w-sm w-full",
                "rounded-xl border shadow-lg p-4",
                "transition-all duration-300 ease-in-out",
                styles.bg,
                isVisible && !isLeaving
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0",
            ].join(" ")}
        >
            <div className="flex items-start gap-3">
                {/* Icon */}
                <div className={`flex-shrink-0 ${styles.icon}`}>
                    {type === "error" && (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )}
                    {type === "success" && (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                    {type === "warning" && (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    )}
                </div>

                {/* Message */}
                <p className={`text-sm font-medium flex-1 ${styles.text}`}>
                    {message}
                </p>

                {/* Close button */}
                <button
                    onClick={handleClose}
                    className={`flex-shrink-0 ${styles.icon} hover:opacity-70 transition-opacity`}
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Progress bar */}
            <div className="mt-2 h-1 bg-gray-200/50 rounded-full overflow-hidden">
                <div
                    className={`h-full rounded-full ${styles.bar} transition-all`}
                    style={{
                        animation: `shrink ${duration}ms linear forwards`,
                        width: "100%",
                    }}
                />
            </div>

            <style>{`
                @keyframes shrink {
                    from { width: 100%; }
                    to { width: 0%; }
                }
            `}</style>
        </div>
    );
};

export default Toast;