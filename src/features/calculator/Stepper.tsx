// src/features/calculator/Stepper.tsx

import React from "react";
import { STEPS } from "./calculatorConfig";

interface StepperProps {
    currentStep: number;
    onStepClick: (step: number) => void;
}

const Stepper: React.FC<StepperProps> = ({ currentStep, onStepClick }) => {
    return (
        <div className="w-full">
            {/* Step indicators */}
            <div className="flex items-center justify-between relative">
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
                    const isClickable = step.id < currentStep; // only allow going back

                    return (
                        <div
                            key={step.id}
                            className="relative z-10 flex flex-col items-center gap-2"
                        >
                            {/* Circle */}
                            <button
                                type="button"
                                onClick={() => isClickable && onStepClick(step.id)}
                                disabled={!isClickable}
                                className={[
                                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
                                    "border-2 transition-all duration-300",
                                    isCompleted
                                        ? "bg-orange-500 border-orange-500 text-white cursor-pointer hover:bg-orange-600"
                                        : isActive
                                            ? "bg-white border-orange-500 text-orange-500 cursor-default"
                                            : "bg-white border-gray-300 text-gray-400 cursor-default",
                                ].join(" ")}
                                aria-label={`Step ${step.id}: ${step.label}`}
                            >
                                {isCompleted ? (
                                    // Checkmark icon
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

                            {/* Label */}
                            <span
                                className={[
                                    "text-xs font-medium whitespace-nowrap hidden sm:block",
                                    isActive
                                        ? "text-orange-500"
                                        : isCompleted
                                            ? "text-gray-700"
                                            : "text-gray-400",
                                ].join(" ")}
                            >
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Current step description */}
            <p className="mt-4 text-center text-sm text-gray-500">
                Step {currentStep} of {STEPS.length} —{" "}
                <span className="text-gray-700 font-medium">
                    {STEPS[currentStep - 1]?.description}
                </span>
            </p>
        </div>
    );
};

export default Stepper;
