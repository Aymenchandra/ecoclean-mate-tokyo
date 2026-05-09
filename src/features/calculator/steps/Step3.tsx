import { memo } from "react";
import { useTranslation } from "react-i18next";
import type { Step3Data } from "../../../hooks/useCalculator";
import { STAIR_CLIMBING_FEE } from "../calculatorConfig";

interface Props {
    data: Step3Data;
    onChange: (data: Partial<Step3Data>) => void;
    itemFloor?: string;
}

const Step3 = memo(function Step3({ data, onChange, itemFloor }: Props) {
    const { t } = useTranslation();
    const feeFormatted = STAIR_CLIMBING_FEE.toLocaleString();

    const floorNumber = parseInt(itemFloor || "0", 10);
    const isUpperFloor = !isNaN(floorNumber) && floorNumber >= 3;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-xl font-bold text-gray-900">
                    {t("calculator.step3.title")}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    {t("calculator.step3.description")}
                </p>
            </div>

            {/* Elevator Question */}
            <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">
                    {t("calculator.step3.elevatorQuestion")}
                </label>
                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={() =>
                            onChange({
                                hasElevator: true,
                                wantsStairHelp: false,
                            })
                        }
                        className={[
                            "flex-1 px-5 py-4 rounded-xl border-2 font-medium transition-all text-center",
                            data.hasElevator === true
                                ? "border-green-500 bg-green-50 text-green-700 shadow-sm"
                                : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50",
                        ].join(" ")}
                    >
                        <span className="block text-2xl mb-1">🛗</span>
                        {t("calculator.step3.hasElevator")}
                    </button>
                    <button
                        type="button"
                        onClick={() => onChange({ hasElevator: false })}
                        className={[
                            "flex-1 px-5 py-4 rounded-xl border-2 font-medium transition-all text-center",
                            data.hasElevator === false
                                ? "border-orange-500 bg-orange-50 text-orange-700 shadow-sm"
                                : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50",
                        ].join(" ")}
                    >
                        <span className="block text-2xl mb-1">🪜</span>
                        {t("calculator.step3.noElevator")}
                    </button>
                </div>
            </div>

            {/* Conditional: Stair Climbing Help — only if item floor >= 3 AND no elevator */}
            {data.hasElevator === false && isUpperFloor && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                            <svg
                                className="w-4 h-4 text-orange-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-800">
                                {t("calculator.step3.stairSupport")}
                            </h4>
                            <p className="text-xs text-gray-500 mt-0.5">
                                {t("calculator.step3.stairSupportDescription")}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={() => onChange({ wantsStairHelp: true })}
                            className={[
                                "flex-1 px-4 py-3 rounded-lg border-2 font-medium text-sm transition-all text-center",
                                data.wantsStairHelp === true
                                    ? "border-orange-500 bg-orange-500 text-white shadow-sm"
                                    : "border-gray-300 bg-white text-gray-700 hover:border-orange-300 hover:bg-orange-50",
                            ].join(" ")}
                        >
                            {t("calculator.step3.yesHelp")}
                            <span className="block text-xs mt-0.5 opacity-80">
                                +¥{feeFormatted} {t("calculator.step3.taxIncluded")}
                            </span>
                        </button>
                        <button
                            type="button"
                            onClick={() => onChange({ wantsStairHelp: false })}
                            className={[
                                "flex-1 px-4 py-3 rounded-lg border-2 font-medium text-sm transition-all text-center",
                                data.wantsStairHelp === false
                                    ? "border-gray-500 bg-gray-100 text-gray-700 shadow-sm"
                                    : "border-gray-300 bg-white text-gray-500 hover:border-gray-400 hover:bg-gray-50",
                            ].join(" ")}
                        >
                            {t("calculator.step3.noHelp")}
                        </button>
                    </div>

                    {/* Fee note */}
                    {data.wantsStairHelp && (
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 flex items-center justify-between">
                            <span className="text-xs text-orange-700 font-medium">
                                {t("calculator.step3.stairClimbingService")}
                            </span>
                            <span className="text-sm font-bold text-orange-700">
                                +¥{feeFormatted}
                            </span>
                        </div>
                    )}
                </div>
            )}

            {/* Elevator confirmed message */}
            {data.hasElevator === true && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                    <span className="text-lg">✅</span>
                    <div>
                        <p className="text-sm font-medium text-green-800">
                            {t("calculator.step3.elevatorAvailable")}
                        </p>
                        <p className="text-xs text-green-600">
                            {t("calculator.step3.noAdditionalFees")}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
});

export default Step3;