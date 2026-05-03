// src/features/calculator/steps/Step8.tsx

import React from "react";
import type { Step8Data } from "../../../hooks/useCalculator";

interface Props {
    data: Step8Data;
    onChange: (data: Partial<Step8Data>) => void;
}

const Step8: React.FC<Props> = ({ data, onChange }) => {
    const isComplete =
        data.lastName.trim() !== "" &&
        data.firstName.trim() !== "" &&
        data.phoneNumber.trim() !== "" &&
        data.email.trim() !== "";

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-xl font-bold text-gray-900">
                    Customer Information
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Please provide your contact details to receive the estimate PDF.
                </p>
            </div>

            {/* Form */}
            <div className="space-y-4">
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Last Name */}
                    <div className="space-y-1.5">
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="lastName"
                            type="text"
                            value={data.lastName}
                            onChange={(e) => onChange({ lastName: e.target.value })}
                            placeholder="Yamada"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm
                                focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500
                                transition-all"
                        />
                    </div>

                    {/* First Name */}
                    <div className="space-y-1.5">
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="firstName"
                            type="text"
                            value={data.firstName}
                            onChange={(e) => onChange({ firstName: e.target.value })}
                            placeholder="Taro"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm
                                focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500
                                transition-all"
                        />
                    </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                    <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="phoneNumber"
                        type="tel"
                        value={data.phoneNumber}
                        onChange={(e) => onChange({ phoneNumber: e.target.value })}
                        placeholder="090-1234-5678"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm
                            focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500
                            transition-all"
                    />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => onChange({ email: e.target.value })}
                        placeholder="yamada@example.com"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm
                            focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500
                            transition-all"
                    />
                </div>

                {/* City / Town / Village */}
                <div className="space-y-1.5">
                    <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                    >
                        City / Town / Village / Address
                    </label>
                    <input
                        id="city"
                        type="text"
                        value={data.city}
                        onChange={(e) => onChange({ city: e.target.value })}
                        placeholder="Shibuya-ku, Tokyo"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm
                            focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500
                            transition-all"
                    />
                </div>

                {/* Building Name / Room Number */}
                <div className="space-y-1.5">
                    <label
                        htmlFor="building"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Building Name / Room Number
                    </label>
                    <input
                        id="building"
                        type="text"
                        value={data.building}
                        onChange={(e) => onChange({ building: e.target.value })}
                        placeholder="Shibuya Heights 505"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm
                            focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500
                            transition-all"
                    />
                </div>
            </div>

            {/* Completion indicator */}
            {isComplete && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-xs text-green-700">
                        All required fields complete. You can now download your estimate.
                    </p>
                </div>
            )}

            {!isComplete && (
                <p className="text-xs text-gray-400 text-center">
                    * Required fields must be filled before submitting
                </p>
            )}
        </div>
    );
};

export default Step8;