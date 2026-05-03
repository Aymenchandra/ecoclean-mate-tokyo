// src/features/calculator/steps/Step7.tsx

import React from "react";
import type { CalculatorFormData } from "../../../hooks/useCalculator";
import type { CostBreakdown } from "../../../hooks/useCalculator";
import { STAIR_CLIMBING_FEE, TAX_RATE, EXTRA_SERVICES } from "../calculatorConfig";

interface Props {
    formData: CalculatorFormData;
    totals: CostBreakdown;
}

const Step7: React.FC<Props> = ({ formData, totals }) => {
    const formatYen = (amount: number): string => {
        return "¥" + Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-xl font-bold text-gray-900">
                    Cost Breakdown
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Review your estimate before submitting. Go back to any step to make changes.
                </p>
            </div>

            {/* Items Summary */}
            <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Items
                </h3>

                {formData.step4.items.length === 0 ? (
                    <p className="text-sm text-gray-400 text-center py-4">No items added.</p>
                ) : (
                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                        {/* Table Header - hidden on mobile */}
                        <div className="hidden sm:grid sm:grid-cols-12 gap-3 px-4 py-2.5 bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            <div className="col-span-5">Item</div>
                            <div className="col-span-2 text-center">Qty</div>
                            <div className="col-span-2 text-center">Unit Price</div>
                            <div className="col-span-3 text-right">Total</div>
                        </div>

                        {/* Items */}
                        <div className="divide-y divide-gray-100">
                            {formData.step4.items.map((item) => {
                                const unitPrice = parseInt(item.unitPrice.replace(/\./g, ""), 10) || 0;
                                const qty = item.quantity || 1;
                                const itemTotal = unitPrice * qty;

                                return (
                                    <div
                                        key={item.id}
                                        className="px-4 py-3 sm:grid sm:grid-cols-12 sm:gap-3 sm:items-center"
                                    >
                                        {/* Item name + image */}
                                        <div className="sm:col-span-5 flex items-center gap-3 mb-2 sm:mb-0">
                                            <img
                                                src={item.imagePreview || "https://via.placeholder.com/40x40?text=?"}
                                                alt={item.productName}
                                                className="w-10 h-10 rounded-md object-cover flex-shrink-0 bg-gray-100"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src =
                                                        "https://via.placeholder.com/40x40?text=?";
                                                }}
                                            />
                                            <div className="min-w-0">
                                                <p className="text-sm font-medium text-gray-800 truncate">
                                                    {item.productName}
                                                </p>
                                                {(item.hasSize || item.hasWeight) && (
                                                    <p className="text-xs text-gray-400">
                                                        {item.hasSize &&
                                                            `${item.width || "-"}×${item.depth || "-"}×${item.height || "-"} cm`}
                                                        {item.hasSize && item.hasWeight && " · "}
                                                        {item.hasWeight && `${item.weight || "-"} kg`}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Qty */}
                                        <div className="sm:col-span-2 sm:text-center">
                                            <span className="sm:hidden text-xs text-gray-500">Qty: </span>
                                            <span className="text-sm text-gray-700">{qty}</span>
                                        </div>

                                        {/* Unit Price */}
                                        <div className="sm:col-span-2 sm:text-center">
                                            <span className="sm:hidden text-xs text-gray-500">Unit: </span>
                                            <span className="text-sm text-gray-700">{formatYen(unitPrice)}</span>
                                        </div>

                                        {/* Item Total */}
                                        <div className="sm:col-span-3 sm:text-right">
                                            <span className="sm:hidden text-xs text-gray-500">Total: </span>
                                            <span className="text-sm font-semibold text-gray-800">
                                                {formatYen(itemTotal)}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Items Subtotal */}
                        <div className="px-4 py-3 bg-gray-50 flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-600">Items Subtotal</span>
                            <span className="text-sm font-bold text-gray-800">
                                {formatYen(totals.itemsSubtotal)}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Additional Charges */}
            <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Additional Charges
                </h3>

                <div className="border border-gray-200 rounded-xl divide-y divide-gray-100">
                    {/* Basic Fee */}
                    <div className="px-4 py-3 flex items-center justify-between">
                        <div>
                            <span className="text-sm text-gray-700">Basic Service Fee</span>
                            <span className="ml-2 text-xs text-orange-600 font-medium">Applied</span>
                        </div>
                        <span className="text-sm text-gray-700">
                            {formatYen(totals.basicFee)}
                        </span>
                    </div>
                    {/* Stair Climbing Fee */}
                    <div className="px-4 py-3 flex items-center justify-between">
                        <div>
                            <span className="text-sm text-gray-700">Stair Climbing Service</span>
                            {totals.stairFee > 0 ? (
                                <span className="ml-2 text-xs text-orange-600 font-medium">Applied</span>
                            ) : (
                                <span className="ml-2 text-xs text-gray-400">Not applicable</span>
                            )}
                        </div>
                        <span className="text-sm text-gray-700">
                            {totals.stairFee > 0 ? formatYen(totals.stairFee) : "¥0"}
                        </span>
                    </div>

                    {/* Extra Services */}
                    {formData.step6.selectedServices.length > 0 ? (
                        formData.step6.selectedServices.map((serviceId) => {
                            const service = EXTRA_SERVICES.find((s) => s.id === serviceId);
                            if (!service) return null;
                            return (
                                <div key={serviceId} className="px-4 py-3 flex items-center justify-between">
                                    <span className="text-sm text-gray-700">{service.label}</span>
                                    <span className="text-sm text-gray-700">
                                        {formatYen(service.price)}
                                    </span>
                                </div>
                            );
                        })
                    ) : (
                        <div className="px-4 py-3 flex items-center justify-between">
                            <span className="text-sm text-gray-400">No extra services selected</span>
                            <span className="text-sm text-gray-400">¥0</span>
                        </div>
                    )}

                    {/* Services Total */}
                    {totals.servicesTotal > 0 && (
                        <div className="px-4 py-3 bg-gray-50 flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-600">Extra Services Total</span>
                            <span className="text-sm font-bold text-gray-800">
                                {formatYen(totals.servicesTotal)}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Totals */}
            <div className="border-2 border-orange-200 rounded-xl overflow-hidden">
                <div className="px-4 py-3 flex items-center justify-between">
                    <span className="text-sm text-gray-600">Subtotal</span>
                    <span className="text-sm font-semibold text-gray-800">
                        {formatYen(totals.subtotal)}
                    </span>
                </div>
                <div className="px-4 py-3 flex items-center justify-between border-t border-orange-100">
                    <span className="text-sm text-gray-600">
                        Tax (10%)
                    </span>
                    <span className="text-sm font-semibold text-gray-800">
                        {formatYen(totals.tax)}
                    </span>
                </div>
                <div className="px-4 py-4 flex items-center justify-between bg-orange-50 border-t border-orange-200">
                    <span className="text-base font-bold text-orange-800">Grand Total</span>
                    <span className="text-xl font-bold text-orange-800">
                        {formatYen(totals.grandTotal)}
                    </span>
                </div>
            </div>

            {/* Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-700">
                    💡 This is an estimate. To adjust any details, use the Back button to return
                    to previous steps. Your data will be preserved.
                </p>
            </div>
        </div>
    );
};

export default Step7;