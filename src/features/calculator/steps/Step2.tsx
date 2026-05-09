import { memo } from "react";
import { useTranslation } from "react-i18next";
import type { Step2Data } from "../../../hooks/useCalculator";

interface Props {
    data: Step2Data;
    onChange: (data: Partial<Step2Data>) => void;
}

const HOME_TYPES = [
    { value: "apartment", label: "calculator.step2.homeTypes.apartment" },
    { value: "detached", label: "calculator.step2.homeTypes.detached" },
    { value: "office", label: "calculator.step2.homeTypes.office" },
    { value: "other", label: "calculator.step2.homeTypes.other" },
] as const;

const Step2 = memo(function Step2({ data, onChange }: Props) {
    const { t } = useTranslation();

    const getFloorMessage = () => {
        if (!data.itemFloor || !data.totalFloors) return null;

        const itemFloor = parseInt(data.itemFloor);
        const totalFloors = parseInt(data.totalFloors);

        if (itemFloor > totalFloors) {
            return t("calculator.step2.floorMessages.invalid");
        }
        if (itemFloor >= 3) {
            return t("calculator.step2.floorMessages.noHoisting");
        }
        if (itemFloor === 1) {
            return t("calculator.step2.floorMessages.groundFloor");
        }
        return t("calculator.step2.floorMessages.standard");
    };

    const floorMessage = getFloorMessage();

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-xl font-bold text-gray-900">
                    {t("calculator.step2.title")}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    {t("calculator.step2.description")}
                </p>
            </div>

            {/* Home Type */}
            <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">
                    {t("calculator.step2.homeType")}
                </label>
                <div className="grid grid-cols-2 gap-3">
                    {HOME_TYPES.map((type) => (
                        <button
                            key={type.value}
                            type="button"
                            onClick={() => onChange({ propertyType: type.value })}
                            className={[
                                "p-4 rounded-xl border-2 text-sm font-medium transition-all text-left",
                                data.propertyType === type.value
                                    ? "border-orange-500 bg-orange-50 text-orange-700 shadow-sm"
                                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50",
                            ].join(" ")}
                        >
                            <span className="block text-base mb-1">
                                {type.value === "apartment" && "🏢"}
                                {type.value === "detached" && "🏠"}
                                {type.value === "office" && "🏬"}
                                {type.value === "other" && "📋"}
                            </span>
                            {t(type.label)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Floors */}
            <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-700">
                    {t("calculator.step2.floorInfo")}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Total Floors */}
                    <div className="space-y-1.5">
                        <label
                            htmlFor="totalFloors"
                            className="block text-sm font-medium text-gray-600"
                        >
                            {t("calculator.step2.totalFloors")}
                        </label>
                        <div className="relative">
                            <input
                                id="totalFloors"
                                type="number"
                                min="1"
                                max="200"
                                value={data.totalFloors}
                                onChange={(e) =>
                                    onChange({ totalFloors: e.target.value })
                                }
                                placeholder={t("calculator.step2.totalFloorsPlaceholder")}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                text-gray-900 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500
                transition-all"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">
                                {t("calculator.step2.floors")}
                            </span>
                        </div>
                        <p className="text-xs text-gray-400">
                            {t("calculator.step2.totalFloorsHelp")}
                        </p>
                    </div>

                    {/* Item Floor */}
                    <div className="space-y-1.5">
                        <label
                            htmlFor="itemFloor"
                            className="block text-sm font-medium text-gray-600"
                        >
                            {t("calculator.step2.itemFloor")}
                        </label>
                        <div className="relative">
                            <input
                                id="itemFloor"
                                type="number"
                                min="1"
                                max="200"
                                value={data.itemFloor}
                                onChange={(e) =>
                                    onChange({ itemFloor: e.target.value })
                                }
                                placeholder={t("calculator.step2.itemFloorPlaceholder")}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                text-gray-900 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500
                transition-all"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">
                                {t("calculator.step2.floor")}
                            </span>
                        </div>
                        <p className="text-xs text-gray-400">
                            {t("calculator.step2.itemFloorHelp")}
                        </p>
                    </div>
                </div>
            </div>

            {/* Quick Tip */}
            {floorMessage && (
                <div className={`rounded-lg p-3 ${data.itemFloor && data.totalFloors && parseInt(data.itemFloor) > parseInt(data.totalFloors)
                        ? "bg-red-50 border border-red-200"
                        : parseInt(data.itemFloor) >= 3
                            ? "bg-yellow-50 border border-yellow-200"
                            : "bg-blue-50 border border-blue-200"
                    }`}>
                    <p className={`text-xs flex items-center gap-1.5 ${data.itemFloor && data.totalFloors && parseInt(data.itemFloor) > parseInt(data.totalFloors)
                            ? "text-red-700"
                            : parseInt(data.itemFloor) >= 3
                                ? "text-yellow-700"
                                : "text-blue-700"
                        }`}>
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {floorMessage}
                    </p>
                </div>
            )}

            {/* Summary indicator */}
            {data.propertyType && data.totalFloors && data.itemFloor && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-xs text-green-700">
                        ✓ {t(HOME_TYPES.find(t => t.value === data.propertyType)?.label || "")},
                        {t("calculator.step2.summary", {
                            itemFloor: data.itemFloor,
                            totalFloors: data.totalFloors
                        })}
                    </p>
                </div>
            )}
        </div>
    );
});

export default Step2;