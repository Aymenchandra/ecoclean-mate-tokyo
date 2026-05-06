// src/pages/Pricing.tsx

import React from "react";
import { Link } from "react-router-dom";

const Pricing: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 py-16 sm:py-20 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Transparent Pricing for
                        <span className="text-orange-500"> Every Item</span>
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Get an instant estimate for collecting and disposing your unwanted items.
                        No hidden fees, no surprises.
                    </p>
                    <Link
                        to="/calculator"
                        className="inline-block mt-8 px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
                    >
                        Get Your Free Estimate →
                    </Link>
                </div>
            </section>

            {/* How It Works */}
            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
                    How It Works
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {[
                        {
                            step: "01",
                            title: "Tell Us About Your Home",
                            description:
                                "Select your property type, floors, and elevator access so we can prepare accordingly.",
                            icon: "🏠",
                        },
                        {
                            step: "02",
                            title: "Choose Your Items",
                            description:
                                "Browse our catalog of furniture, appliances, and daily necessities. Add items you want collected.",
                            icon: "📦",
                        },
                        {
                            step: "03",
                            title: "Get Your Estimate",
                            description:
                                "Review your cost breakdown and download a PDF estimate. No payment required upfront.",
                            icon: "📄",
                        },
                    ].map((item) => (
                        <div key={item.step} className="text-center">
                            <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">{item.icon}</span>
                            </div>
                            <div className="text-xs font-bold text-orange-500 mb-2">
                                STEP {item.step}
                            </div>
                            <h3 className="text-sm font-bold text-gray-900 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pricing Structure */}
            <section className="bg-white border-y border-gray-100 py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                        Pricing Structure
                    </h2>
                    <p className="text-gray-500 text-center text-sm mb-12">
                        Your total is calculated transparently based on these components
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            {
                                label: "Basic Service Fee",
                                price: "¥3,000",
                                description: "Applied to every order",
                                color: "bg-blue-50 border-blue-200 text-blue-700",
                            },
                            {
                                label: "Item Price",
                                price: "Varies",
                                description:
                                    "Based on size & weight of each item",
                                color: "bg-orange-50 border-orange-200 text-orange-700",
                            },
                            {
                                label: "Special Work",
                                price: "Optional",
                                description:
                                    "Stair climbing, AC removal, lowering service",
                                color: "bg-purple-50 border-purple-200 text-purple-700",
                            },
                            {
                                label: "Tax (10%)",
                                price: "Calculated",
                                description: "Applied to subtotal",
                                color: "bg-gray-50 border-gray-200 text-gray-700",
                            },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className={`rounded-xl border p-5 text-center ${item.color}`}
                            >
                                <h3 className="text-sm font-bold mb-1">{item.label}</h3>
                                <p className="text-2xl font-bold mb-2">{item.price}</p>
                                <p className="text-xs opacity-75">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600 font-medium">
                            Total = Basic Fee + Item Prices + Special Work + Tax
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            Items you wish to sell are appraised separately and excluded from
                            the estimate.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                    Service Areas
                </h2>
                <p className="text-gray-500 text-center text-sm mb-10">
                    We currently serve the following regions in Japan
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    {[
                        { name: "Tokyo", areas: "All wards" },
                        { name: "Saitama", areas: "24 cities" },
                        { name: "Kanagawa", areas: "10 cities" },
                        { name: "Chiba", areas: "10 cities" },
                        { name: "Osaka", areas: "All wards & 20+ cities" },
                        { name: "Kyoto", areas: "Kyoto City & 12 areas" },
                        { name: "Hyogo", areas: "Kobe & 14 cities" },
                        { name: "Shiga", areas: "8 cities" },
                        { name: "Nara", areas: "9 areas" },
                        { name: "More coming", areas: "Expanding soon" },
                    ].map((area) => (
                        <div
                            key={area.name}
                            className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-orange-200 hover:shadow-sm transition-all"
                        >
                            <h4 className="text-sm font-bold text-gray-900">{area.name}</h4>
                            <p className="text-xs text-gray-400 mt-1">{area.areas}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Important Notes */}
            <section className="bg-orange-50 border-y border-orange-100 py-12">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <h3 className="text-lg font-bold text-orange-800 mb-3">
                        Please Note
                    </h3>
                    <ul className="text-sm text-orange-700 space-y-2">
                        <li>⚠ We do not perform hoisting operations from floors 3 or higher</li>
                        <li>⚠ We do not perform hoisting operations for home appliances</li>
                        <li>
                            💡 Items marked for selling will be appraised after submission
                        </li>
                        <li>💡 This is an estimate — final pricing confirmed upon assessment</li>
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Get Started?
                </h2>
                <p className="text-gray-500 mb-8">
                    Answer a few questions and get your estimate in minutes.
                </p>
                <Link
                    to="/calculator"
                    className="inline-block px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
                >
                    Start Free Estimate →
                </Link>
            </section>
        </div>
    );
};

export default Pricing;