import { useCallback, useRef, memo } from "react";
import { useTranslation } from "react-i18next";
import type { Step4Data, Step5Data, ItemEntry } from "../../../hooks/useCalculator";
import { calculateUnitPrice, formatYen, getTotalSize } from "../../../utils/calculatePrice";

interface Props {
    data: Step4Data;
    step5Data: Step5Data;
    onUpdateItem: (itemId: string, updates: Partial<ItemEntry>) => void;
    onStep5Change: (data: Partial<Step5Data>) => void;
}

const Step5 = memo(function Step5({ data, onUpdateItem }: Props) {
    const { t } = useTranslation(["translation", "products"]);
    const fileInputRefs = useRef<Map<string, HTMLInputElement>>(new Map());

    const recalcPrice = useCallback(
        (item: ItemEntry, overrides: Partial<ItemEntry> = {}) => {
            const w = overrides.width ?? item.width;
            const d = overrides.depth ?? item.depth;
            const h = overrides.height ?? item.height;
            const wt = overrides.weight ?? item.weight;
            return calculateUnitPrice(
                w, d, h, wt,
                item.hasSize,
                item.hasWeight,
                parseFloat(item.unitPrice)
            ).toString();
        },
        []
    );

    const handleFieldChange = useCallback(
        (item: ItemEntry, field: string, value: string) => {
            const updates: Partial<ItemEntry> = { [field]: value };
            updates.unitPrice = recalcPrice(item, { [field]: value });
            onUpdateItem(item.id, updates);
        },
        [onUpdateItem, recalcPrice]
    );

    const handleQuantityChange = useCallback(
        (item: ItemEntry, quantity: number) => {
            if (quantity < 1) quantity = 1;
            onUpdateItem(item.id, { quantity });
        },
        [onUpdateItem]
    );

    const handleSellingToggle = useCallback(
        (item: ItemEntry, checked: boolean) => {
            onUpdateItem(item.id, {
                forSelling: checked,
                sellingImage: checked ? item.sellingImage : null,
            });
        },
        [onUpdateItem]
    );

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
                <p className="text-gray-400">{t("calculator.step5.noItems")}</p>
                <p className="text-sm text-gray-400 mt-1">
                    {t("calculator.step5.goBackHint")}
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-bold text-gray-900">
                    {t("calculator.step5.title")}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    {t("calculator.step5.description")}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.items.map((item) => {
                    const unitPrice = parseFloat(item.unitPrice) || 0;
                    const itemTotal = unitPrice * (item.quantity || 1);
                    const translatedName = t(`names.${item.productName}`, { ns: "products", defaultValue: item.productName });

                    return (
                        <div
                            key={item.id}
                            className="border border-gray-200 rounded-xl overflow-hidden bg-white flex flex-col"
                        >
                            <div className="aspect-video bg-gray-100 relative overflow-hidden">
                                <img
                                    src={item.imagePreview || "https://via.placeholder.com/400x225?text=No+Image"}
                                    alt={translatedName}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                    width="400"
                                    height="225"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src =
                                            "https://via.placeholder.com/400x225?text=No+Image";
                                    }}
                                />
                            </div>

                            <div className="p-3 flex-1 flex flex-col space-y-3">
                                <h3 className="text-sm font-semibold text-gray-800 leading-tight line-clamp-2">
                                    {translatedName}
                                </h3>

                                {item.hasSize && (
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1.5">
                                            {t("calculator.step5.size")}
                                        </label>
                                        <div className="grid grid-cols-3 gap-1.5">
                                            <input
                                                type="text"
                                                inputMode="numeric"
                                                value={item.width}
                                                onChange={(e) => handleFieldChange(item, "width", e.target.value)}
                                                placeholder={t("calculator.step5.width")}
                                                className="w-full px-2 py-1.5 border border-gray-300 rounded text-xs text-center
                          focus:outline-none focus:ring-1 focus:ring-orange-500/30 focus:border-orange-500"
                                            />
                                            <input
                                                type="text"
                                                inputMode="numeric"
                                                value={item.depth}
                                                onChange={(e) => handleFieldChange(item, "depth", e.target.value)}
                                                placeholder={t("calculator.step5.depth")}
                                                className="w-full px-2 py-1.5 border border-gray-300 rounded text-xs text-center
                          focus:outline-none focus:ring-1 focus:ring-orange-500/30 focus:border-orange-500"
                                            />
                                            <input
                                                type="text"
                                                inputMode="numeric"
                                                value={item.height}
                                                onChange={(e) => handleFieldChange(item, "height", e.target.value)}
                                                placeholder={t("calculator.step5.height")}
                                                className="w-full px-2 py-1.5 border border-gray-300 rounded text-xs text-center
                          focus:outline-none focus:ring-1 focus:ring-orange-500/30 focus:border-orange-500"
                                            />
                                        </div>
                                        {item.width && item.depth && item.height && (
                                            <p className="text-xs text-gray-400 mt-1 text-center">
                                                {t("calculator.step5.total")}: {getTotalSize(item.width, item.depth, item.height)} cm
                                            </p>
                                        )}
                                    </div>
                                )}

                                {item.hasWeight && (
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">
                                            {t("calculator.step5.weight")}
                                        </label>
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            value={item.weight}
                                            onChange={(e) => handleFieldChange(item, "weight", e.target.value)}
                                            placeholder="0"
                                            className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm
                        focus:outline-none focus:ring-1 focus:ring-orange-500/30 focus:border-orange-500"
                                        />
                                    </div>
                                )}

                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-1">
                                        {t("calculator.step5.quantity")}
                                    </label>
                                    <div className="flex items-center gap-1.5">
                                        <button
                                            type="button"
                                            onClick={() => handleQuantityChange(item, (item.quantity || 1) - 1)}
                                            className="w-7 h-7 rounded border border-gray-300 flex items-center justify-center
                        text-gray-500 hover:bg-gray-50 text-sm transition-colors flex-shrink-0"
                                        >
                                            −
                                        </button>
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity || 1}
                                            onChange={(e) => handleQuantityChange(item, parseInt(e.target.value) || 1)}
                                            className="flex-1 min-w-0 text-center px-2 py-1.5 border border-gray-300 rounded text-sm
                        focus:outline-none focus:ring-1 focus:ring-orange-500/30 focus:border-orange-500"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleQuantityChange(item, (item.quantity || 1) + 1)}
                                            className="w-7 h-7 rounded border border-gray-300 flex items-center justify-center
                        text-gray-500 hover:bg-gray-50 text-sm transition-colors flex-shrink-0"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="pt-2 border-t border-gray-100">
                                    {item.canSell ? (
                                        <div className="space-y-2">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={item.forSelling}
                                                    onChange={(e) => handleSellingToggle(item, e.target.checked)}
                                                    className="h-3.5 w-3.5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                                                />
                                                <span className="text-xs text-gray-600">
                                                    {t("calculator.step5.sellThisItem")}
                                                </span>
                                            </label>

                                            {item.forSelling && (
                                                <div className="space-y-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => fileInputRefs.current.get(item.id)?.click()}
                                                        className="w-full px-3 py-1.5 text-xs font-medium text-orange-600 bg-orange-50
                              border border-orange-200 rounded-lg hover:bg-orange-100 transition-colors"
                                                    >
                                                        📷 {t("calculator.step5.addPhoto")}
                                                    </button>
                                                    <input
                                                        ref={(el) => { if (el) fileInputRefs.current.set(item.id, el); }}
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
                                                                loading="lazy"
                                                                decoding="async"
                                                                width="300"
                                                                height="96"
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={() => onUpdateItem(item.id, { sellingImage: null })}
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
                                            {t("calculator.step5.cannotPurchase")}
                                        </p>
                                    )}
                                </div>

                                <div className="pt-2 border-t border-gray-100 mt-auto">
                                    {item.forSelling && item.canSell ? (
                                        <div className="space-y-1">
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-gray-500">{t("calculator.step5.unitPrice")}</span>
                                                <span className="text-sm font-bold text-orange-500">
                                                    {t("calculator.step5.toBeAppraised")}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-400">
                                                {t("calculator.step5.appraisalNote")}
                                            </p>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-gray-500">{t("calculator.step5.unitPrice")}</span>
                                                <span className="text-sm font-bold text-orange-600">
                                                    {formatYen(unitPrice)}
                                                </span>
                                            </div>
                                            {(item.quantity || 1) > 1 && (
                                                <div className="flex items-center justify-between mt-1">
                                                    <span className="text-xs text-gray-500">× {item.quantity}</span>
                                                    <span className="text-sm font-bold text-gray-900">
                                                        {formatYen(itemTotal)}
                                                    </span>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-orange-800">
                        {t("calculator.step5.itemsSubtotal")}
                    </span>
                    <span className="text-lg font-bold text-orange-800">
                        {formatYen(
                            data.items.reduce((sum, item) => {
                                if (item.forSelling && item.canSell) return sum;
                                return sum + (parseFloat(item.unitPrice) || 0) * (item.quantity || 1);
                            }, 0)
                        )}
                    </span>
                </div>
                {data.items.filter(item => item.forSelling && item.canSell).length > 0 && (
                    <p className="text-xs text-orange-600">
                        {t("calculator.step5.appraisalCount", {
                            count: data.items.filter(item => item.forSelling && item.canSell).length
                        })}
                    </p>
                )}
            </div>
        </div>
    );
});

export default Step5;