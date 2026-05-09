import { memo } from "react";
import { useTranslation } from "react-i18next";
import type { CalculatorFormData } from "../../../hooks/useCalculator";
import type { CostBreakdown } from "../../../hooks/useCalculator";
import { EXTRA_SERVICES } from "../calculatorConfig";

interface Props {
    formData: CalculatorFormData;
    totals: CostBreakdown;
}

const Step7 = memo(function Step7({ formData, totals }: Props) {
    const { t } = useTranslation();

    const formatYen = (amount: number): string => {
        return "¥" + Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const regularItems = formData.step4.items.filter(
        (item) => !(item.forSelling && item.canSell)
    );
    const appraisalItems = formData.step4.items.filter(
        (item) => item.forSelling && item.canSell
    );

    // Helper function to get translated product name
    const getTranslatedName = (productName: string): string => {
        const translated = t(`products.names.${productName}`, {
            defaultValue: productName,
            fallbackLng: 'ja'
        });
        return translated;
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-bold text-gray-900">
                    {t("calculator.step7.title")}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    {t("calculator.step7.description")}
                </p>
            </div>

            <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    {t("calculator.step7.items")}
                </h3>

                {formData.step4.items.length === 0 ? (
                    <p className="text-sm text-gray-400 text-center py-4">
                        {t("calculator.step7.noItems")}
                    </p>
                ) : (
                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                        <div className="hidden sm:grid sm:grid-cols-12 gap-3 px-4 py-2.5 bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            <div className="col-span-5">{t("calculator.step7.table.item")}</div>
                            <div className="col-span-2 text-center">{t("calculator.step7.table.qty")}</div>
                            <div className="col-span-2 text-center">{t("calculator.step7.table.unitPrice")}</div>
                            <div className="col-span-3 text-right">{t("calculator.step7.table.total")}</div>
                        </div>

                        <div className="divide-y divide-gray-100">
                            {regularItems.map((item) => {
                                const unitPrice = parseInt(item.unitPrice.replace(/\./g, ""), 10) || 0;
                                const qty = item.quantity || 1;
                                const itemTotal = unitPrice * qty;
                                const translatedName = getTranslatedName(item.productName);

                                return (
                                    <div key={item.id} className="px-4 py-3 sm:grid sm:grid-cols-12 sm:gap-3 sm:items-center">
                                        <div className="sm:col-span-5 flex items-center gap-3 mb-2 sm:mb-0">
                                            <img
                                                src={item.imagePreview || "https://via.placeholder.com/40x40?text=?"}
                                                alt={translatedName}
                                                className="w-10 h-10 rounded-md object-cover flex-shrink-0 bg-gray-100"
                                                loading="lazy"
                                                decoding="async"
                                                width="40"
                                                height="40"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/40x40?text=?";
                                                }}
                                            />
                                            <div className="min-w-0">
                                                <p className="text-sm font-medium text-gray-800 truncate">
                                                    {translatedName}
                                                </p>
                                                {(item.hasSize || item.hasWeight) && (
                                                    <p className="text-xs text-gray-400">
                                                        {item.hasSize && `${item.width || "-"}×${item.depth || "-"}×${item.height || "-"} cm`}
                                                        {item.hasSize && item.hasWeight && " · "}
                                                        {item.hasWeight && `${item.weight || "-"} kg`}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2 sm:text-center">
                                            <span className="sm:hidden text-xs text-gray-500">{t("calculator.step7.table.qty")}: </span>
                                            <span className="text-sm text-gray-700">{qty}</span>
                                        </div>
                                        <div className="sm:col-span-2 sm:text-center">
                                            <span className="sm:hidden text-xs text-gray-500">{t("calculator.step7.table.unitPrice")}: </span>
                                            <span className="text-sm text-gray-700">{formatYen(unitPrice)}</span>
                                        </div>
                                        <div className="sm:col-span-3 sm:text-right">
                                            <span className="sm:hidden text-xs text-gray-500">{t("calculator.step7.table.total")}: </span>
                                            <span className="text-sm font-semibold text-gray-800">{formatYen(itemTotal)}</span>
                                        </div>
                                    </div>
                                );
                            })}

                            {appraisalItems.map((item) => {
                                const translatedName = getTranslatedName(item.productName);

                                return (
                                    <div key={item.id} className="px-4 py-3 bg-orange-50/40 sm:grid sm:grid-cols-12 sm:gap-3 sm:items-center">
                                        <div className="sm:col-span-5 flex items-center gap-3 mb-2 sm:mb-0">
                                            <div className="relative flex-shrink-0">
                                                <img
                                                    src={item.sellingImage || item.imagePreview || "https://via.placeholder.com/40x40?text=?"}
                                                    alt={translatedName}
                                                    className="w-10 h-10 rounded-md object-cover bg-gray-100"
                                                    loading="lazy"
                                                    decoding="async"
                                                    width="40"
                                                    height="40"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/40x40?text=?";
                                                    }}
                                                />
                                                {item.sellingImage && (
                                                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white" />
                                                )}
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-sm font-medium text-gray-800 truncate">
                                                    {translatedName}
                                                </p>
                                                <p className="text-xs text-orange-600 font-medium">
                                                    {t("calculator.step7.toBeAppraised")}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2 sm:text-center">
                                            <span className="sm:hidden text-xs text-gray-500">{t("calculator.step7.table.qty")}: </span>
                                            <span className="text-sm text-gray-700">{item.quantity || 1}</span>
                                        </div>
                                        <div className="sm:col-span-2 sm:text-center">
                                            <span className="text-xs text-orange-600 font-medium">{t("calculator.step7.tba")}</span>
                                        </div>
                                        <div className="sm:col-span-3 sm:text-right">
                                            <span className="text-xs text-gray-400">—</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="px-4 py-3 bg-gray-50 space-y-1">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-600">
                                    {t("calculator.step7.itemsSubtotal")}
                                </span>
                                <span className="text-sm font-bold text-gray-800">
                                    {formatYen(totals.itemsSubtotal)}
                                </span>
                            </div>
                            {appraisalItems.length > 0 && (
                                <p className="text-xs text-orange-600">
                                    {t("calculator.step7.excludesAppraisal", { count: appraisalItems.length })}
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t("calculator.step7.additionalCharges")}
                </h3>

                <div className="border border-gray-200 rounded-xl divide-y divide-gray-100">
                    <div className="px-4 py-3 flex items-center justify-between">
                        <div>
                            <span className="text-sm text-gray-700">{t("calculator.step7.basicFee")}</span>
                            <span className="ml-2 text-xs text-orange-600 font-medium">{t("calculator.step7.applied")}</span>
                        </div>
                        <span className="text-sm text-gray-700">{formatYen(totals.basicFee)}</span>
                    </div>

                    <div className="px-4 py-3 flex items-center justify-between">
                        <div>
                            <span className="text-sm text-gray-700">{t("calculator.step7.stairClimbing")}</span>
                            {totals.stairFee > 0 ? (
                                <span className="ml-2 text-xs text-orange-600 font-medium">{t("calculator.step7.applied")}</span>
                            ) : (
                                <span className="ml-2 text-xs text-gray-400">{t("calculator.step7.notApplicable")}</span>
                            )}
                        </div>
                        <span className="text-sm text-gray-700">
                            {totals.stairFee > 0 ? formatYen(totals.stairFee) : "¥0"}
                        </span>
                    </div>

                    {formData.step6.selectedServices.length > 0 ? (
                        formData.step6.selectedServices.map((serviceId) => {
                            const service = EXTRA_SERVICES.find((s) => s.id === serviceId);
                            if (!service) return null;
                            return (
                                <div key={serviceId} className="px-4 py-3 flex items-center justify-between">
                                    <span className="text-sm text-gray-700">{t(service.label)}</span>
                                    <span className="text-sm text-gray-700">{formatYen(service.price)}</span>
                                </div>
                            );
                        })
                    ) : (
                        <div className="px-4 py-3 flex items-center justify-between">
                            <span className="text-sm text-gray-400">{t("calculator.step7.noExtraServices")}</span>
                            <span className="text-sm text-gray-400">¥0</span>
                        </div>
                    )}

                    {totals.servicesTotal > 0 && (
                        <div className="px-4 py-3 bg-gray-50 flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-600">
                                {t("calculator.step7.extraServicesTotal")}
                            </span>
                            <span className="text-sm font-bold text-gray-800">
                                {formatYen(totals.servicesTotal)}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            <div className="border-2 border-orange-200 rounded-xl overflow-hidden">
                <div className="px-4 py-3 flex items-center justify-between">
                    <span className="text-sm text-gray-600">{t("calculator.step7.subtotal")}</span>
                    <span className="text-sm font-semibold text-gray-800">{formatYen(totals.subtotal)}</span>
                </div>
                <div className="px-4 py-3 flex items-center justify-between border-t border-orange-100">
                    <span className="text-sm text-gray-600">{t("calculator.step7.tax")}</span>
                    <span className="text-sm font-semibold text-gray-800">{formatYen(totals.tax)}</span>
                </div>
                <div className="px-4 py-4 flex items-center justify-between bg-orange-50 border-t border-orange-200">
                    <span className="text-base font-bold text-orange-800">{t("calculator.step7.grandTotal")}</span>
                    <span className="text-xl font-bold text-orange-800">{formatYen(totals.grandTotal)}</span>
                </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-700">
                    {t("calculator.step7.note")}
                </p>
            </div>
        </div>
    );
});

export default Step7;