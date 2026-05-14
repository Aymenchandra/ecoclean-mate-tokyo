import { memo } from "react";
import { useTranslation } from "react-i18next";
import { STEPS } from "./calculatorConfig";

interface StepperProps {
    currentStep: number;
    onStepClick: (step: number) => void;
}

const Stepper = memo(function Stepper({ currentStep, onStepClick }: StepperProps) {
    const { t } = useTranslation();

    return (
        <div className="w-full">
            {/* Step indicators */}
            <div className="flex items-start justify-between relative">
                {/* Background connector line */}
                <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 z-0" />

                {/* Active connector line */}
                <div
                    className="absolute top-4 left-0 h-0.5 bg-orange-500 z-0 transition-all duration-500 ease-in-out"
                    style={{
                        width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%`,
                    }}
                />

                {STEPS.map((step) => {
                    const isCompleted = step.id < currentStep;
                    const isActive = step.id === currentStep;
                    const isClickable = step.id < currentStep;

                    return (
                        <div
                            key={step.id}
                            className="relative z-10 flex flex-col items-center"
                        >
                            {/* Circle */}
                            <button
                                type="button"
                                onClick={() => isClickable && onStepClick(step.id)}
                                disabled={!isClickable}
                                className={[
                                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shrink-0",
                                    "border-2 transition-all duration-300",
                                    isCompleted
                                        ? "bg-orange-500 border-orange-500 text-white cursor-pointer hover:bg-orange-600"
                                        : isActive
                                            ? "bg-white border-orange-500 text-orange-700 cursor-default"
                                            : "bg-white border-gray-300 text-gray-400 cursor-default",
                                ].join(" ")}
                                aria-label={t("calculator.stepper.ariaLabel", { step: step.id, label: t(step.label) })}
                            >
                                {isCompleted ? (
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                ) : (
                                    step.id
                                )}
                            </button>

                            {/* Label - hidden on mobile, visible on sm and up */}
                            <span
                                className={[
                                    "hidden sm:block text-xs font-medium text-center mt-2 w-20 sm:w-24",
                                    "leading-tight break-words",
                                    isActive
                                        ? "text-orange-700"
                                        : isCompleted
                                            ? "text-gray-700"
                                            : "text-gray-400",
                                ].join(" ")}
                            >
                                {t(step.label)}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Current step description */}
            <p className="mt-6 text-center text-sm text-gray-500">
                {t("calculator.stepper.stepOf", {
                    current: currentStep,
                    total: STEPS.length
                })}{" "}
                —{" "}
                <span className="text-gray-700 font-medium">
                    {t(STEPS[currentStep - 1]?.description)}
                </span>
            </p>
        </div>
    );
});

export default Stepper;