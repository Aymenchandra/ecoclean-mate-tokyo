import { memo, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import Stepper from "./Stepper";
import { useCalculator } from "../../hooks/useCalculator";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../../components/ui/LanguageSwitcher";

const Step1 = lazy(() => import("./steps/Step1"));
const Step2 = lazy(() => import("./steps/Step2"));
const Step3 = lazy(() => import("./steps/Step3"));
const Step4 = lazy(() => import("./steps/Step4"));
const Step5 = lazy(() => import("./steps/Step5"));
const Step6 = lazy(() => import("./steps/Step6"));
const Step7 = lazy(() => import("./steps/Step7"));
const Step8 = lazy(() => import("./steps/Step8"));

// Success screen
const SuccessScreen: React.FC<{ onReset: () => void }> = ({ onReset }) => {
    const { t } = useTranslation();

    return (
        <div data-testid="success-screen" className="flex flex-col items-center justify-center text-center py-16 space-y-4">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                <svg
                    className="w-8 h-8 text-orange-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
                {t("calculator.success.title")}
            </h2>
            <p className="text-gray-500 max-w-xs">
                {t("calculator.success.description")}
            </p>
            <div className="flex gap-3 pt-2">
                <button
                    onClick={onReset}
                    className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                    {t("calculator.success.newEstimate")}
                </button>
                <Link
                    to="/"
                    className="px-6 py-2.5 border border-gray-300 text-gray-600 hover:bg-gray-50 text-sm font-semibold rounded-lg transition-colors"
                >
                    {t("calculator.success.backHome")}
                </Link>
            </div>
        </div>
    );
};

const CalculatorPage = memo(function CalculatorPage() {
    const { t } = useTranslation();
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
                        itemFloor={calc.formData.step2.itemFloor}
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
                <Link to="/" className="font-bold text-orange-700 text-lg tracking-tight hover:text-orange-800 transition-colors">
                    {t("brand.name")}
                </Link>
                <LanguageSwitcher />
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
                        <div className="min-h-[200px]">
                            <Suspense fallback={<div className="h-full flex items-center justify-center p-8"><div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" /></div>}>
                                {renderStep()}
                            </Suspense>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                            <button
                                data-testid="calculator-back-btn"
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
                                ← {t("calculator.navigation.back")}
                            </button>

                            {calc.isLastStep ? (
                                <button
                                    data-testid="generate-pdf-btn"
                                    type="button"
                                    onClick={calc.submit}
                                    disabled={calc.isGeneratingPDF}
                                    className={`px-6 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-lg transition-colors flex items-center justify-center ${calc.isGeneratingPDF ? "opacity-70 cursor-not-allowed" : "hover:bg-orange-600"
                                        }`}
                                >
                                    {calc.isGeneratingPDF ? (
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : null}
                                    {t("calculator.navigation.download")} {calc.isGeneratingPDF ? "" : "→"}
                                </button>
                            ) : (
                                <button
                                    data-testid="calculator-next-btn"
                                    type="button"
                                    onClick={calc.goNext}
                                    className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors"
                                >
                                    {t("calculator.navigation.next")} →
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
                        {t("calculator.progress", { percent: calc.progressPercent })}
                    </p>
                </div>
            </main>
        </div>
    );
});

export default CalculatorPage;