// src/features/calculator/steps/Step2.tsx

import React from "react";
import type { Step2Data } from "../../../hooks/useCalculator";

interface Props {
    data: Step2Data;
    onChange: (data: Partial<Step2Data>) => void;
}

const HOME_TYPES = [
    { value: "apartment", label: "Apartment Complex" },
    { value: "detached", label: "Detached House" },
    { value: "office", label: "Office Building" },
    { value: "other", label: "Other" },
] as const;

const Step2: React.FC<Props> = ({ data, onChange }) => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-xl font-bold text-gray-900">
                    Tell Us About Your Home
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Help us understand your property so we can provide an accurate estimate.
                </p>
            </div>

            {/* Home Type */}
            <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">
                    Home Type
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
                            {type.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Floors */}
            <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-700">
                    Floor Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Total Floors */}
                    <div className="space-y-1.5">
                        <label
                            htmlFor="totalFloors"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Total Floors in Building
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
                                placeholder="e.g., 5"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                text-gray-900 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500
                transition-all"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">
                                floors
                            </span>
                        </div>
                        <p className="text-xs text-gray-400">
                            How many floors does the building have in total?
                        </p>
                    </div>


                    {/* Item Floor */}
                    <div className="space-y-1.5">
                        <label
                            htmlFor="itemFloor"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Floor Where Items Are Located
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
                                placeholder="e.g., 3"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                text-gray-900 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500
                transition-all"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">
                                floor
                            </span>
                        </div>
                        <p className="text-xs text-gray-400">
                            Which floor are the items currently on?
                        </p>
                    </div>
                </div>
            </div>

            {/* Quick Tip */}
            {data.itemFloor && data.totalFloors && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-xs text-blue-700 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {parseInt(data.itemFloor) > parseInt(data.totalFloors)
                            ? "Item floor cannot be higher than total floors."
                            : parseInt(data.itemFloor) >= 3
                                ? "Please note: We do not perform hoisting operations from floors 3 or higher."
                                : parseInt(data.itemFloor) === 1
                                    ? "Ground floor — easy access!"
                                    : "Second floor — standard access."}
                    </p>
                </div>
            )}

            {/* Summary indicator */}
            {data.propertyType && data.totalFloors && data.itemFloor && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-xs text-green-700">
                        ✓ {HOME_TYPES.find(t => t.value === data.propertyType)?.label},
                        Item on floor {data.itemFloor} of {data.totalFloors}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Step2;