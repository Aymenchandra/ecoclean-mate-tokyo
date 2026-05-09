import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import type { Step6Data } from "../../../hooks/useCalculator";
import { EXTRA_SERVICES } from "../calculatorConfig";

interface Props {
    data: Step6Data;
    onChange: (data: Partial<Step6Data>) => void;
}

const Step6 = memo(function Step6({ data, onChange }: Props) {
    const { t } = useTranslation();

    const handleToggle = useCallback((serviceId: string) => {
        const isSelected = data.selectedServices.includes(serviceId);
        const updated = isSelected
            ? data.selectedServices.filter((id) => id !== serviceId)
            : [...data.selectedServices, serviceId];
        onChange({ selectedServices: updated });
    }, [data.selectedServices, onChange]);

    const selectedTotal = data.selectedServices.reduce((sum, serviceId) => {
        const service = EXTRA_SERVICES.find((s) => s.id === serviceId);
        return sum + (service ? service.price : 0);
    }, 0);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-xl font-bold text-gray-900">
                    {t("calculator.step6.title")}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    {t("calculator.step6.description")}
                </p>
            </div>

            {/* Services List */}
            <div className="space-y-3">
                {EXTRA_SERVICES.map((service) => {
                    const isSelected = data.selectedServices.includes(service.id);

                    return (
                        <label
                            key={service.id}
                            className={[
                                "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all",
                                isSelected
                                    ? "border-orange-500 bg-orange-50 shadow-sm"
                                    : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50",
                            ].join(" ")}
                        >
                            {/* Checkbox */}
                            <div
                                className={[
                                    "flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all",
                                    isSelected
                                        ? "bg-orange-500 border-orange-500"
                                        : "border-gray-300 bg-white",
                                ].join(" ")}
                            >
                                {isSelected && (
                                    <svg
                                        className="w-3 h-3 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={3}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                )}
                            </div>
                            <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => handleToggle(service.id)}
                                className="hidden"
                            />

                            {/* Service Info */}
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-800">
                                    {t(service.label)}
                                </p>
                            </div>

                            {/* Price */}
                            <span className="flex-shrink-0 text-sm font-bold text-orange-600">
                                +¥{service.price.toLocaleString("de-DE")}
                            </span>
                        </label>
                    );
                })}
            </div>

            {/* Selected Total */}
            {data.selectedServices.length > 0 && (
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-orange-800">
                        {t("calculator.step6.total")}
                    </span>
                    <span className="text-lg font-bold text-orange-800">
                        ¥{selectedTotal.toLocaleString("de-DE")}
                    </span>
                </div>
            )}

            {/* None selected message */}
            {data.selectedServices.length === 0 && (
                <div className="text-center py-6">
                    <p className="text-sm text-gray-400">
                        {t("calculator.step6.noServices")}
                    </p>
                </div>
            )}
        </div>
    );
});

export default Step6;