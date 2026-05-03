// src/features/calculator/steps/Step4.tsx

import React, { useState, useMemo } from "react";
import type { Step4Data, ItemEntry } from "../../../hooks/useCalculator";
import { productsData, type Category, type Item, type ProductCategory } from "../../../constants/products";

interface Props {
    data: Step4Data;
    onAdd: (item: ItemEntry) => void;
    onRemove: (itemId: string) => void;
}

type MainType = "furniture" | "electric appliances" | "daily necessities";

const MAIN_TYPES: { value: MainType; label: string; icon: string }[] = [
    { value: "furniture", label: "Furniture", icon: "🪑" },
    { value: "electric appliances", label: "Electric Appliances", icon: "🔌" },
    { value: "daily necessities", label: "Daily Necessities", icon: "📦" },
];

const Step4: React.FC<Props> = ({ data, onAdd, onRemove }) => {
    const [activeMainType, setActiveMainType] = useState<MainType>("furniture");
    const [activeCategory, setActiveCategory] = useState<string>("");

    // Get the current product category data
    const currentProductCategory: ProductCategory | undefined = useMemo(
        () => productsData.find((pc) => pc.type === activeMainType),
        [activeMainType]
    );

    // Auto-select first category when main type changes
    React.useEffect(() => {
        if (currentProductCategory && currentProductCategory.categories.length > 0) {
            setActiveCategory(currentProductCategory.categories[0].categoryName);
        }
    }, [currentProductCategory]);

    // Get items for active category
    const activeItems: Item[] = useMemo(() => {
        if (!currentProductCategory) return [];
        const cat = currentProductCategory.categories.find(
            (c) => c.categoryName === activeCategory
        );
        return cat ? cat.items : [];
    }, [currentProductCategory, activeCategory]);

    // Check if item is already added
    const isItemAdded = (itemName: string): boolean => {
        return data.items.some((i) => i.productName === itemName);
    };

    const handleAddItem = (item: Item) => {
        // "6.500" → remove dots → "6500" → 6500
        const cleanPrice = parseInt(item.price.toString().replace(/\./g, ""), 10);

        const newItem: ItemEntry = {
            id: crypto.randomUUID(),
            category: `${activeMainType} > ${activeCategory}`,
            productName: item.name,
            quantity: 1,
            imagePreview: item.imagePreview,
            width: "",
            depth: "",
            height: "",
            weight: "",
            forSelling: false,
            sellingImage: null,
            unitPrice: cleanPrice.toString(), // "6500"
            hasSize: item.size,
            hasWeight: item.weight,
            canSell: item.optionForSelling,
        };
        onAdd(newItem);
    };
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-xl font-bold text-gray-900">
                    Select Items for Collection
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Choose items you'd like us to collect. Quantities and details can be adjusted in the next step.
                </p>
            </div>

            {/* Main Type Tabs */}
            <div className="flex gap-2 border-b border-gray-200">
                {MAIN_TYPES.map((type) => (
                    <button
                        key={type.value}
                        type="button"
                        onClick={() => setActiveMainType(type.value)}
                        className={[
                            "px-4 py-2.5 text-sm font-medium rounded-t-lg transition-all flex items-center gap-1.5",
                            activeMainType === type.value
                                ? "bg-white border border-gray-200 border-b-white text-orange-600 -mb-px relative z-10"
                                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50",
                        ].join(" ")}
                    >
                        <span>{type.icon}</span>
                        {type.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                {/* Category Sidebar */}
                <div className="md:col-span-3">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Categories
                    </h4>
                    <div className="space-y-0.5 max-h-[400px] overflow-y-auto pr-1">
                        {currentProductCategory?.categories.map((cat: Category) => (
                            <button
                                key={cat.categoryName}
                                type="button"
                                onClick={() => setActiveCategory(cat.categoryName)}
                                className={[
                                    "w-full text-left px-3 py-2 rounded-lg text-sm transition-all",
                                    activeCategory === cat.categoryName
                                        ? "bg-orange-50 text-orange-700 font-medium border border-orange-200"
                                        : "text-gray-600 hover:bg-gray-50 border border-transparent",
                                ].join(" ")}
                            >
                                {cat.categoryName}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Items Grid */}
                <div className="md:col-span-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Items
                    </h4>
                    <div className="grid grid-cols-2 gap-2 max-h-[400px] overflow-y-auto pr-1">
                        {activeItems.map((item) => {
                            const added = isItemAdded(item.name);
                            return (
                                <button
                                    key={item.name}
                                    type="button"
                                    onClick={() => !added && handleAddItem(item)}
                                    disabled={added}
                                    className={[
                                        "p-3 rounded-lg border text-left transition-all group",
                                        added
                                            ? "border-green-300 bg-green-50 cursor-not-allowed"
                                            : "border-gray-200 bg-white hover:border-orange-300 hover:shadow-sm cursor-pointer",
                                    ].join(" ")}
                                >
                                    <div className="aspect-square bg-gray-100 rounded-md overflow-hidden mb-2">
                                        <img
                                            src={item.imagePreview}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src =
                                                    "https://via.placeholder.com/300x300?text=No+Image";
                                            }}
                                        />
                                    </div>
                                    <p className="text-xs font-medium text-gray-800 leading-tight line-clamp-2">
                                        {item.name}
                                    </p>
                                    {added && (
                                        <span className="inline-block mt-1.5 text-xs text-green-600 font-medium">
                                            ✓ Added
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                    {activeItems.length === 0 && (
                        <p className="text-sm text-gray-400 text-center py-8">
                            No items in this category.
                        </p>
                    )}
                </div>

                {/* Selected Items Cart */}
                <div className="md:col-span-3">
                    <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Selected Items
                        </h4>
                        {data.items.length > 0 && (
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">
                                {data.items.length}
                            </span>
                        )}
                    </div>

                    {data.items.length === 0 ? (
                        <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-4 text-center">
                            <p className="text-xs text-gray-400">
                                No items selected yet.
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                                Click items to add them here.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
                            {data.items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 bg-white group hover:border-gray-300 transition-all"
                                >
                                    <img
                                        src={item.imagePreview || "https://via.placeholder.com/40x40?text=?"}
                                        alt={item.productName}
                                        className="w-10 h-10 rounded-md object-cover flex-shrink-0 bg-gray-100"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src =
                                                "https://via.placeholder.com/40x40?text=?";
                                        }}
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-medium text-gray-800 truncate">
                                            {item.productName}
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => onRemove(item.id)}
                                        className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 text-red-400 
                                            hover:bg-red-100 hover:text-red-600 flex items-center justify-center
                                            transition-colors opacity-0 group-hover:opacity-100"
                                        title="Remove item"
                                    >
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {data.items.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                            <p className="text-xs text-gray-500 text-center">
                                {data.items.length} item{data.items.length !== 1 ? "s" : ""} selected
                            </p>
                            <p className="text-xs text-gray-400 text-center mt-1">
                                Details & quantity → next step
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-700">
                    💡 If you wish to order multiple items from the same category, you can adjust the quantity on the next screen.
                </p>
            </div>
        </div>
    );
};

export default Step4;