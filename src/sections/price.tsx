import { memo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Pricing = memo(function Pricing() {
    const { t } = useTranslation();

    const steps = [
        {
            key: "homeInfo",
            icon: "🏠",
        },
        {
            key: "chooseItems",
            icon: "📦",
        },
        {
            key: "getEstimate",
            icon: "📄",
        },
    ];

    const priceComponents = [
        {
            key: "basicFee",
            color: "bg-blue-50 border-blue-200 text-blue-700",
        },
        {
            key: "itemPrice",
            color: "bg-orange-50 border-orange-200 text-orange-700",
        },
        {
            key: "specialWork",
            color: "bg-purple-50 border-purple-200 text-purple-700",
        },
        {
            key: "tax",
            color: "bg-gray-50 border-gray-200 text-gray-700",
        },
    ];

    const serviceAreas = [
        { key: "tokyo" },
        { key: "saitama" },
        { key: "kanagawa" },
        { key: "chiba" },
        { key: "osaka" },
        { key: "kyoto" },
        { key: "hyogo" },
        { key: "shiga" },
        { key: "nara" },
        { key: "expanding" },
    ];

    const notes = [
        { key: "noHoistingUpper", icon: "⚠" },
        { key: "noHoistingAppliances", icon: "⚠" },
        { key: "appraisalAfter", icon: "💡" },
        { key: "estimateOnly", icon: "💡" },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 py-16 sm:py-20 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        {t("pricing.hero.title.part1")}{" "}
                        <span className="text-orange-500">{t("pricing.hero.title.part2")}</span>
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        {t("pricing.hero.description")}
                    </p>
                    <Link
                        to="/calculator"
                        className="inline-block mt-8 px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
                    >
                        {t("pricing.hero.cta")} →
                    </Link>
                </div>
            </section>

            {/* How It Works */}
            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
                    {t("pricing.howItWorks.title")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={step.key} className="text-center">
                            <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">{step.icon}</span>
                            </div>
                            <div className="text-xs font-bold text-orange-500 mb-2">
                                {t("pricing.howItWorks.step", { number: String(index + 1).padStart(2, "0") })}
                            </div>
                            <h3 className="text-sm font-bold text-gray-900 mb-2">
                                {t(`pricing.howItWorks.steps.${step.key}.title`)}
                            </h3>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                {t(`pricing.howItWorks.steps.${step.key}.description`)}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pricing Structure */}
            <section className="bg-white border-y border-gray-100 py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                        {t("pricing.structure.title")}
                    </h2>
                    <p className="text-gray-500 text-center text-sm mb-12">
                        {t("pricing.structure.description")}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {priceComponents.map((item) => (
                            <div
                                key={item.key}
                                className={`rounded-xl border p-5 text-center ${item.color}`}
                            >
                                <h3 className="text-sm font-bold mb-1">
                                    {t(`pricing.structure.components.${item.key}.label`)}
                                </h3>
                                <p className="text-2xl font-bold mb-2">
                                    {t(`pricing.structure.components.${item.key}.price`)}
                                </p>
                                <p className="text-xs opacity-75">
                                    {t(`pricing.structure.components.${item.key}.description`)}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600 font-medium">
                            {t("pricing.structure.formula")}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            {t("pricing.structure.note")}
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                    {t("pricing.areas.title")}
                </h2>
                <p className="text-gray-500 text-center text-sm mb-10">
                    {t("pricing.areas.description")}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    {serviceAreas.map((area) => (
                        <div
                            key={area.key}
                            className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-orange-200 hover:shadow-sm transition-all"
                        >
                            <h4 className="text-sm font-bold text-gray-900">
                                {t(`pricing.areas.list.${area.key}.name`)}
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">
                                {t(`pricing.areas.list.${area.key}.areas`)}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Important Notes */}
            <section className="bg-orange-50 border-y border-orange-100 py-12">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <h3 className="text-lg font-bold text-orange-800 mb-3">
                        {t("pricing.notes.title")}
                    </h3>
                    <ul className="text-sm text-orange-700 space-y-2">
                        {notes.map((note) => (
                            <li key={note.key}>
                                {note.icon} {t(`pricing.notes.items.${note.key}`)}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {t("pricing.cta.title")}
                </h2>
                <p className="text-gray-500 mb-8">
                    {t("pricing.cta.description")}
                </p>
                <Link
                    to="/calculator"
                    className="inline-block px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
                >
                    {t("pricing.cta.button")} →
                </Link>
            </section>
        </div>
    );
});

export default Pricing;