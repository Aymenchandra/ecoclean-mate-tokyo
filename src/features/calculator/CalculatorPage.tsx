// src/features/calculator/CalculatorPage.tsx

import React from "react";
import Stepper from "./Stepper";
import { useCalculator } from "../../hooks/useCalculator";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import Step7 from "./steps/Step7";
import Step8 from "./steps/Step8";
import { Link } from "react-router-dom";

// ---------------------------------------------------------------------------
// Success screen
// ---------------------------------------------------------------------------

const SuccessScreen: React.FC<{ onReset: () => void }> = ({ onReset }) => (
    <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
            <svg
                className="w-8 h-8 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Estimate Downloaded!</h2>
        <p className="text-gray-500 max-w-xs">
            Your estimate PDF has been generated. We'll also send a copy to your email.
        </p>
        <div className="flex gap-3 pt-2">
            <button
                onClick={onReset}
                className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors"
            >
                New Estimate
            </button>
            <Link
                to="/"
                className="px-6 py-2.5 border border-gray-300 text-gray-600 hover:bg-gray-50 text-sm font-semibold rounded-lg transition-colors"
            >
                Back to Home
            </Link>
        </div>
    </div>
);

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

const CalculatorPage: React.FC = () => {
    const calc = useCalculator();

    // Steps 4 and 5 need the wider layout for the 3-column product selection
    const isWideStep = calc.currentStep === 4 || calc.currentStep === 5;

    const renderStep = () => {
        switch (calc.currentStep) {
            case 1:
                return (
                    <Step1
                        data={calc.formData.step1}
                        onChange={calc.updateStep1}
                    />
                );
            case 2:
                return (
                    <Step2
                        data={calc.formData.step2}
                        onChange={calc.updateStep2}
                    />
                );
            case 3:
                return (
                    <Step3
                        data={calc.formData.step3}
                        onChange={calc.updateStep3}
                    />
                );
            case 4:
                return (
                    <Step4
                        data={calc.formData.step4}
                        onAdd={calc.addItem}
                        onRemove={calc.removeItem}
                    />
                );
            case 5:
                return (
                    <Step5
                        data={calc.formData.step4}
                        step5Data={calc.formData.step5}
                        onUpdateItem={calc.updateItem}
                        onStep5Change={calc.updateStep5}
                    />
                );
            case 6:
                return (
                    <Step6
                        data={calc.formData.step6}
                        onChange={calc.updateStep6}
                    />
                );
            case 7:
                return (
                    <Step7
                        formData={calc.formData}
                        totals={calc.calculateTotal()}
                    />
                );
            case 8:
                return (
                    <Step8
                        data={calc.formData.step8}
                        onChange={calc.updateStep8}
                    />
                );
            default:
                return null;
        }
    };

    if (calc.isSubmitted) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
                <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <SuccessScreen onReset={calc.reset} />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Minimal top bar */}
            <header className="w-full border-b border-gray-200 bg-white px-6 py-4 flex items-center justify-between">
                <span className="font-bold text-orange-500 text-lg tracking-tight">
                    エコクリーン MATE 東京
                </span>

                <button
                    onClick={calc.reset}
                    className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
                >
                    Clear & start over
                </button>
            </header>

            {/* Main content */}
            <main className="flex-1 flex items-start justify-center px-4 py-8 sm:py-10">
                <div
                    className={[
                        "w-full space-y-6 sm:space-y-8 transition-all duration-300",
                        isWideStep ? "max-w-5xl" : "max-w-2xl",
                    ].join(" ")}
                >
                    {/* Stepper */}
                    <Stepper
                        currentStep={calc.currentStep}
                        onStepClick={calc.goToStep}
                    />

                    {/* Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-8">
                        {/* Step content */}
                        <div className="min-h-[200px]">{renderStep()}</div>

                        {/* Navigation */}
                        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                            <button
                                type="button"
                                onClick={calc.goPrev}
                                disabled={calc.isFirstStep}
                                className={[
                                    "px-5 py-2.5 rounded-lg text-sm font-medium border transition-colors",
                                    calc.isFirstStep
                                        ? "opacity-0 pointer-events-none"
                                        : "border-gray-300 text-gray-600 hover:bg-gray-50",
                                ].join(" ")}
                            >
                                ← Back
                            </button>

                            {calc.isLastStep ? (
                                <button
                                    type="button"
                                    onClick={calc.submit}
                                    className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors"
                                >
                                    Download Estimate PDF →
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={calc.goNext}
                                    className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors"
                                >
                                    Next →
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                            className="bg-orange-500 h-1.5 rounded-full transition-all duration-500"
                            style={{ width: `${calc.progressPercent}%` }}
                        />
                    </div>
                    <p className="text-center text-xs text-gray-400">
                        {calc.progressPercent}% complete
                    </p>
                </div>
            </main>
        </div>
    );
};

export default CalculatorPage;