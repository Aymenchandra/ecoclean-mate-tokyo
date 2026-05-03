// src/features/calculator/steps/Step5.tsx

import React, { useCallback, useRef } from "react";
import type { Step4Data, Step5Data, ItemEntry } from "../../../hooks/useCalculator";
import { calculateUnitPrice, formatYen, getTotalSize } from "../../../utils/calculatePrice";

interface Props {
    data: Step4Data;
    step5Data: Step5Data;
    onUpdateItem: (itemId: string, updates: Partial<ItemEntry>) => void;
    onStep5Change: (data: Partial<Step5Data>) => void;
}

const Step5: React.FC<Props> = ({ data, onUpdateItem }) => {
    const fileInputRefs = useRef<Map<string, HTMLInputElement>>(new Map());

    // Recalculate price for an item based on current field values
    const recalcPrice = useCallback(
        (item: ItemEntry, overrides: Partial<ItemEntry> = {}) => {
            const w = overrides.width ?? item.width;
            const d = overrides.depth ?? item.depth;
            const h = overrides.height ?? item.height;
            const wt = overrides.weight ?? item.weight;
            return calculateUnitPrice(
                w,
                d,
                h,
                wt,
                item.hasSize,
                item.hasWeight,
                parseFloat(item.unitPrice)
            ).toString();
        },
        []
    );

    // Handle size/weight changes
    const handleFieldChange = useCallback(
        (item: ItemEntry, field: string, value: string) => {
            const updates: Partial<ItemEntry> = { [field]: value };
            updates.unitPrice = recalcPrice(item, { [field]: value });
            onUpdateItem(item.id, updates);
        },
        [onUpdateItem, recalcPrice]
    );

    // Handle quantity change
    const handleQuantityChange = useCallback(
        (item: ItemEntry, quantity: number) => {
            if (quantity < 1) quantity = 1;
            onUpdateItem(item.id, { quantity });
        },
        [onUpdateItem]
    );

    // Handle selling toggle
    const handleSellingToggle = useCallback(
        (item: ItemEntry, checked: boolean) => {
            onUpdateItem(item.id, {
                forSelling: checked,
                sellingImage: checked ? item.sellingImage : null,
            });
        },
        [onUpdateItem]
    );

    // Handle image preview
    const handleImageSelect = useCallback(
        (item: ItemEntry, e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    onUpdateItem(item.id, {
                        sellingImage: event.target?.result as string,
                    });
                };
                reader.readAsDataURL(file);
            }
        },
        [onUpdateItem]
    );

    if (data.items.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-400">No items selected.</p>
                <p className="text-sm text-gray-400 mt-1">
                    Please go back and add some items first.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-xl font-bold text-gray-900">
                    Item Specifications
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Enter dimensions and quantity. Price is calculated automatically.
                </p>
            </div>

            {/* 3 Cards Per Row Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.items.map((item) => {
                    const unitPrice = parseFloat(item.unitPrice) || 0;
                    const itemTotal = unitPrice * (item.quantity || 1);

                    return (
                        <div
                            key={item.id}
                            className="border border-gray-200 rounded-xl overflow-hidden bg-white flex flex-col"
                        >
                            {/* Image */}
                            <div className="aspect-video bg-gray-100 relative overflow-hidden">
                                <img
                                    src={item.imagePreview || "https://via.placeholder.com/400x225?text=No+Image"}
                                    alt={item.productName}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src =
                                            "https://via.placeholder.com/400x225?text=No+Image";
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-3 flex-1 flex flex-col space-y-3">
                                {/* Name */}
                                <h3 className="text-sm font-semibold text-gray-800 leading-tight line-clamp-2">
                                    {item.productName}
                                </h3>

                                {/* Size inputs - only if hasSize is true */}
                                {item.hasSize && (
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1.5">
                                            Size (cm)
                                        </label>
                                        <div className="grid grid-cols-3 gap-1.5">
                                            <input
                                                type="text"
                                                inputMode="numeric"
                                                value={item.width}
                                                onChange={(e) =>
                                                    handleFieldChange(item, "width", e.target.value)
                                                }
                                                placeholder="W"
                                                className="w-full px-2 py-1.5 border border-gray-300 rounded text-xs text-center
                                                    focus:outline-none focus:ring-1 focus:ring-orange-500/30 focus:border-orange-500"
                                            />
                                            <input
                                                type="text"
                                                inputMode="numeric"
                                                value={item.depth}
                                                onChange={(e) =>
                                                    handleFieldChange(item, "depth", e.target.value)
                                                }
                                                placeholder="D"
                                                className="w-full px-2 py-1.5 border border-gray-300 rounded text-xs text-center
                                                    focus:outline-none focus:ring-1 focus:ring-orange-500/30 focus:border-orange-500"
                                            />
                                            <input
                                                type="text"
                                                inputMode="numeric"
                                                value={item.height}
                                                onChange={(e) =>
                                                    handleFieldChange(item, "height", e.target.value)
                                                }
                                                placeholder="H"
                                                className="w-full px-2 py-1.5 border border-gray-300 rounded text-xs text-center
                                                    focus:outline-none focus:ring-1 focus:ring-orange-500/30 focus:border-orange-500"
                                            />
                                        </div>
                                        {item.width && item.depth && item.height && (
                                            <p className="text-xs text-gray-400 mt-1 text-center">
                                                Total: {getTotalSize(item.width, item.depth, item.height)} cm
                                            </p>
                                        )}
                                    </div>
                                )}

                                {/* Weight input - only if hasWeight is true */}
                                {item.hasWeight && (
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">
                                            Weight (kg)
                                        </label>
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            value={item.weight}
                                            onChange={(e) =>
                                                handleFieldChange(item, "weight", e.target.value)
                                            }
                                            placeholder="0"
                                            className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm
                                                focus:outline-none focus:ring-1 focus:ring-orange-500/30 focus:border-orange-500"
                                        />
                                    </div>
                                )}

                                {/* Quantity */}
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-1">
                                        Quantity
                                    </label>
                                    <div className="flex items-center gap-1.5">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleQuantityChange(item, (item.quantity || 1) - 1)
                                            }
                                            className="w-7 h-7 rounded border border-gray-300 flex items-center justify-center
                                                text-gray-500 hover:bg-gray-50 text-sm transition-colors flex-shrink-0"
                                        >
                                            −
                                        </button>
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity || 1}
                                            onChange={(e) =>
                                                handleQuantityChange(item, parseInt(e.target.value) || 1)
                                            }
                                            className="flex-1 min-w-0 text-center px-2 py-1.5 border border-gray-300 rounded text-sm
                                                focus:outline-none focus:ring-1 focus:ring-orange-500/30 focus:border-orange-500"
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleQuantityChange(item, (item.quantity || 1) + 1)
                                            }
                                            className="w-7 h-7 rounded border border-gray-300 flex items-center justify-center
                                                text-gray-500 hover:bg-gray-50 text-sm transition-colors flex-shrink-0"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Selling Option */}
                                <div className="pt-2 border-t border-gray-100">
                                    {item.canSell ? (
                                        <div className="space-y-2">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={item.forSelling}
                                                    onChange={(e) =>
                                                        handleSellingToggle(item, e.target.checked)
                                                    }
                                                    className="h-3.5 w-3.5 text-orange-500 border-gray-300 rounded
                                                        focus:ring-orange-500"
                                                />
                                                <span className="text-xs text-gray-600">
                                                    Sell this item
                                                </span>
                                            </label>

                                            {item.forSelling && (
                                                <div className="space-y-2">
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            fileInputRefs.current.get(item.id)?.click()
                                                        }
                                                        className="w-full px-3 py-1.5 text-xs font-medium text-orange-600 bg-orange-50
                                                            border border-orange-200 rounded-lg hover:bg-orange-100 transition-colors"
                                                    >
                                                        📷 Add Photo
                                                    </button>
                                                    <input
                                                        ref={(el) => {
                                                            if (el)
                                                                fileInputRefs.current.set(item.id, el);
                                                        }}
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) => handleImageSelect(item, e)}
                                                        className="hidden"
                                                    />
                                                    {item.sellingImage && (
                                                        <div className="relative">
                                                            <img
                                                                src={item.sellingImage}
                                                                alt="Preview"
                                                                className="w-full h-24 object-cover rounded-lg border border-gray-200"
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    onUpdateItem(item.id, {
                                                                        sellingImage: null,
                                                                    })
                                                                }
                                                                className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-500 text-white
                                                                    text-xs flex items-center justify-center hover:bg-red-600"
                                                            >
                                                                ×
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <p className="text-xs font-medium text-red-500 flex items-center gap-1">
                                            <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            Cannot purchase this item
                                        </p>
                                    )}
                                </div>

                                {/* Price */}
                                <div className="pt-2 border-t border-gray-100 mt-auto">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500">Unit price</span>
                                        <span className="text-sm font-bold text-orange-600">
                                            {formatYen(unitPrice)}
                                        </span>
                                    </div>
                                    {(item.quantity || 1) > 1 && (
                                        <div className="flex items-center justify-between mt-1">
                                            <span className="text-xs text-gray-500">
                                                × {item.quantity}
                                            </span>
                                            <span className="text-sm font-bold text-gray-900">
                                                {formatYen(itemTotal)}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Grand Total */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-orange-800">
                    Items Subtotal
                </span>
                <span className="text-lg font-bold text-orange-800">
                    {formatYen(
                        data.items.reduce(
                            (sum, item) =>
                                sum +
                                (parseFloat(item.unitPrice) || 0) * (item.quantity || 1),
                            0
                        )
                    )}
                </span>
            </div>
        </div>
    );
};

export default Step5;