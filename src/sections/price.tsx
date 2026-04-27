import { useState } from "react";

export default function PriceSection() {
    const [activeTab, setActiveTab] = useState("junk");

    const tabs = [
        { id: "junk", label: "Junk Removal" },
        { id: "disinfection", label: "Disinfection" },
        { id: "organize", label: "Organization" },
        { id: "cleaning", label: "Cleaning" },
    ];

    const services = {
        junk: {
            title: "Junk Removal",
            subtitle: "Unnecessary Items Collection",
            description: "Professional removal of unwanted items from your property. Our team handles everything from single items to full property clearances.",
            plans: [
                {
                    name: "Mini Truck Pack",
                    price: "8,800",
                    unit: "yen",
                    originalPrice: null,
                    badge: "Basic Plan",
                    duration: "10–60 minutes",
                    capacity: {
                        bed: "190cm × 140cm × 100cm",
                        weight: "350kg",
                        volume: "Approx. 2.5㎥ (≈1.7 tatami mats)",
                    },
                    sampleItems: "Small fridge, washing machine, TV, bed (single), futon, ~10 cardboard boxes",
                    features: [
                        "Basic fee: 8,800 yen",
                        "Regional fee area: +4,400 yen (Total: 13,200 yen)",
                        "Excess volume: 6,000 yen/m³",
                        "Additional staff: 3,000–5,000 yen/person",
                        "No elevator (2F+): 1,000 yen/floor",
                    ],
                    nonRecoverable: "General/recyclable waste, old appliances, liquids, hazardous materials, glass, ceramics, soil, plants, medical waste, foul-smelling items",
                    color: "from-orange-400 to-orange-500",
                },
                {
                    name: "2t Truck Pack",
                    price: "25,000",
                    unit: "yen",
                    originalPrice: null,
                    badge: "Popular",
                    duration: "Flexible (based on volume)",
                    capacity: {
                        bed: "300cm × 166cm × 100cm",
                        weight: "2,000kg",
                        volume: "Approx. 5.0㎥ (≈3 tatami mats)",
                    },
                    sampleItems: "Large refrigerator (>200cm total), sofa, chest of drawers, massage chair, bicycle, air conditioner",
                    features: [
                        "Basic fee: 25,000 yen",
                        "Regional fee area: +4,400 yen (Total: 29,400 yen)",
                        "Additional staff: Free",
                        "No elevator (2F+): 1,000 yen/floor",
                        "Item-specific & special work fees apply",
                    ],
                    nonRecoverable: "Same as Mini Truck Pack restrictions",
                    color: "from-orange-500 to-orange-600",
                    featured: true,
                },
            ],
            notes: [
                "Prices are total = basic fee + item-specific fee + special work fee + time-slot fee – purchase price",
                "Workers may refuse certain items at their discretion",
                "Regional fee area surcharge: +4,400 yen",
            ],
        },
        disinfection: {
            title: "Disinfection",
            subtitle: "Virus Elimination & Disinfection Work",
            description: "Professional-grade disinfection services for residential and commercial properties. Target areas include Tokyo, Kanagawa, Chiba, and Saitama.",
            plans: [
                {
                    name: "Per Square Meter",
                    price: "550",
                    unit: "yen/m²",
                    originalPrice: null,
                    badge: "Starting From",
                    duration: "About 2 hours",
                    capacity: null,
                    sampleItems: null,
                    features: [
                        "1R/1K: from 25,000 yen",
                        "1DK: from 30,000 yen",
                        "2DK: from 40,000 yen",
                        "Detached house (2LDK/3DK): from 70,000 yen",
                        "Small/medium facilities available",
                    ],
                    nonRecoverable: null,
                    color: "from-orange-400 to-orange-500",
                },
            ],
            facilityTypes: [
                "Apartments & Condominiums",
                "Houses & Detached homes",
                "Offices & Factories",
                "Small/medium shops",
            ],
            options: [
                {
                    name: "Antiviral Coating (Preventive)",
                    price: "Price negotiable",
                    description: "Long-lasting protective coating to prevent future contamination",
                },
            ],
        },
        organize: {
            title: "Organization",
            subtitle: "Estate Cleanup & Pre-Death Planning",
            description: "Comprehensive organization and estate cleanup services. We provide detailed estimates beforehand to prevent any disputes.",
            plans: [
                {
                    name: "Estate Cleanup Service",
                    price: "Negotiable",
                    unit: "",
                    originalPrice: null,
                    badge: "Custom Quote",
                    duration: "About 3 hours",
                    capacity: {
                        bed: "2-ton truck",
                        weight: null,
                        volume: "5.0 m³ capacity",
                    },
                    sampleItems: null,
                    features: [
                        "Sorting necessary vs. unnecessary items",
                        "Collection of all unnecessary items",
                        "Protective covering of areas",
                        "Basic cleaning of work area",
                        "Cardboard boxes for packing provided",
                        "Loading onto 2-ton truck included",
                    ],
                    nonRecoverable: "Industrial waste, hazardous materials, medical equipment (excluded)",
                    color: "from-orange-500 to-orange-600",
                    featured: true,
                },
            ],
            notes: [
                "Estimate provided beforehand to prevent disputes",
                "No additional charges unless work differs from declared scope",
                "Cleaning supplies provided for basic work area cleaning",
                "Excludes general waste, industrial waste, hazardous materials, medical equipment",
            ],
        },
        cleaning: {
            title: "Cleaning Services",
            subtitle: "House Cleaning & Mattress/Sofa Cleaning",
            description: "Specialized cleaning services for hoarder houses and deep cleaning of mattresses and sofas with stain removal options.",
            plans: [
                {
                    name: "House Cleaning",
                    price: "Negotiable",
                    unit: "",
                    originalPrice: null,
                    badge: "Custom Quote",
                    duration: "Varies by condition",
                    capacity: {
                        bed: "2-ton truck",
                        weight: null,
                        volume: "5.0 m³ capacity",
                    },
                    sampleItems: null,
                    features: [
                        "Sorting necessary vs. unnecessary items",
                        "Collection of unnecessary items",
                        "Protective covering of areas",
                        "Basic cleaning of work area",
                        "Loading onto 2-ton truck included",
                    ],
                    nonRecoverable: "Industrial waste, hazardous materials, medical equipment (excluded)",
                    color: "from-orange-500 to-orange-600",
                },
            ],
            mattressPlans: [
                { name: "Single", price: "8,300", unit: "yen" },
                { name: "Semi-double / Double", price: "11,300", unit: "yen" },
                { name: "Queen / King", price: "14,300", unit: "yen" },
                { name: "Baby / Kids", price: "4,800", unit: "yen" },
            ],
            mattressOptions: [
                { name: "Stain Removal (10cm×10cm)", price: "500", unit: "yen/stain" },
                { name: "Double-sided Finish (Single)", price: "4,300", unit: "yen" },
            ],
            notes: [
                "Estimate provided beforehand for house cleaning",
                "No additional charges unless work differs from scope",
            ],
        },
    };

    const currentService = services[activeTab];

    return (
        <section id="pricing" className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <span className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 text-xs rounded-full px-4 py-1.5 mb-6 font-semibold">
                        <span className="relative flex size-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full size-2 bg-orange-500"></span>
                        </span>
                        Transparent Pricing
                    </span>
                    <h2 className="text-4xl xl:text-5xl capitalize text-center font-bold mt-3 mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                            Our Services & Pricing
                        </span>
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-orange-300"></div>
                        <div className="size-3 bg-orange-500 rounded-full"></div>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-orange-300"></div>
                    </div>
                    <p className="text-center text-lg text-gray-600 font-medium max-w-2xl mx-auto">
                        Clear, upfront pricing for all our professional services
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab.id
                                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25"
                                    : "bg-white text-gray-600 border border-gray-200 hover:border-orange-300 hover:text-orange-600"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Service Header */}
                <div className="text-center mb-10">
                    <h3 className="text-3xl font-bold text-gray-900">{currentService.title}</h3>
                    {currentService.subtitle && (
                        <p className="text-orange-600 font-medium mt-2">{currentService.subtitle}</p>
                    )}
                    {currentService.description && (
                        <p className="text-gray-500 mt-3 max-w-3xl mx-auto">{currentService.description}</p>
                    )}
                </div>

                {/* Pricing Cards */}
                <div className={`grid gap-8 ${currentService.plans.length === 1
                        ? "max-w-2xl mx-auto"
                        : currentService.plans.length === 2
                            ? "lg:grid-cols-2 max-w-4xl mx-auto"
                            : "lg:grid-cols-3 max-w-6xl mx-auto"
                    }`}>
                    {currentService.plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-8 xl:p-10 transition-all duration-300 ${plan.featured
                                    ? "ring-2 ring-orange-500 bg-white shadow-xl shadow-orange-500/10 scale-[1.02]"
                                    : "ring-1 ring-gray-200 bg-white shadow-md hover:shadow-lg hover:shadow-orange-500/5"
                                }`}
                        >
                            {plan.badge && (
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${plan.featured
                                        ? "bg-orange-500 text-white"
                                        : "bg-orange-50 text-orange-600 border border-orange-200"
                                    }`}>
                                    {plan.badge}
                                </span>
                            )}

                            <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>

                            {plan.duration && (
                                <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Duration: {plan.duration}
                                </p>
                            )}

                            {/* Price */}
                            <div className="mt-6 flex items-baseline gap-x-1">
                                {plan.price === "Negotiable" ? (
                                    <span className="text-4xl font-bold tracking-tight text-orange-600">{plan.price}</span>
                                ) : (
                                    <>
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                                        <span className="text-lg text-gray-500">{plan.unit}</span>
                                    </>
                                )}
                            </div>

                            {/* Capacity Info */}
                            {plan.capacity && (
                                <div className={`mt-6 p-4 rounded-xl ${plan.featured ? "bg-orange-50" : "bg-gray-50"
                                    }`}>
                                    {plan.capacity.bed && (
                                        <p className="text-sm text-gray-600"><span className="font-semibold">Bed:</span> {plan.capacity.bed}</p>
                                    )}
                                    {plan.capacity.weight && (
                                        <p className="text-sm text-gray-600 mt-1"><span className="font-semibold">Capacity:</span> {plan.capacity.weight}</p>
                                    )}
                                    {plan.capacity.volume && (
                                        <p className="text-sm text-gray-600 mt-1"><span className="font-semibold">Volume:</span> {plan.capacity.volume}</p>
                                    )}
                                </div>
                            )}

                            {/* Sample Items */}
                            {plan.sampleItems && (
                                <div className="mt-4">
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Sample Items</p>
                                    <p className="text-sm text-gray-600">{plan.sampleItems}</p>
                                </div>
                            )}

                            {/* Features */}
                            <ul className="mt-6 space-y-3">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex gap-x-3 text-sm text-gray-600">
                                        <svg className="h-5 w-5 flex-none text-orange-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Non-recoverable items */}
                            {plan.nonRecoverable && (
                                <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-100">
                                    <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">⚠ Non-recoverable Items</p>
                                    <p className="text-xs text-red-700">{plan.nonRecoverable}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mattress Pricing (for cleaning tab) */}
                {activeTab === "cleaning" && currentService.mattressPlans && (
                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Mattress & Sofa Cleaning</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {currentService.mattressPlans.map((plan, idx) => (
                                <div key={idx} className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
                                    <p className="text-sm font-semibold text-gray-800 mb-2">{plan.name}</p>
                                    <span className="text-3xl font-bold text-orange-600">{plan.price}</span>
                                    <span className="text-sm text-gray-500 ml-1">{plan.unit}</span>
                                </div>
                            ))}
                        </div>
                        {currentService.mattressOptions && (
                            <div className="mt-6 max-w-2xl mx-auto">
                                <p className="text-sm font-semibold text-gray-700 text-center mb-4">Optional Extras</p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {currentService.mattressOptions.map((opt, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-orange-50 border border-orange-100">
                                            <span className="text-sm text-gray-700">{opt.name}</span>
                                            <span className="font-semibold text-orange-600">{opt.price} <span className="text-xs text-gray-500">{opt.unit}</span></span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Facility Types (for disinfection) */}
                {activeTab === "disinfection" && currentService.facilityTypes && (
                    <div className="mt-10 max-w-2xl mx-auto">
                        <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
                            <h4 className="text-lg font-bold text-gray-900 mb-4">Available Facilities</h4>
                            <div className="flex flex-wrap gap-3">
                                {currentService.facilityTypes.map((type, idx) => (
                                    <span key={idx} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {currentService.options && (
                            <div className="mt-6">
                                {currentService.options.map((opt, idx) => (
                                    <div key={idx} className="p-4 rounded-xl bg-gradient-to-r from-orange-500/5 to-amber-500/5 border border-orange-200">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-semibold text-gray-800">{opt.name}</p>
                                                <p className="text-sm text-gray-500">{opt.description}</p>
                                            </div>
                                            <span className="text-orange-600 font-bold">{opt.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Notes */}
                {currentService.notes && (
                    <div className="mt-10 max-w-3xl mx-auto">
                        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Important Notes</h4>
                            <ul className="space-y-2">
                                {currentService.notes.map((note, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                        <svg className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {note}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {/* CTA */}
                <div className="mt-12 text-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-base font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transform hover:-translate-y-0.5"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Get a Custom Quote
                    </a>
                </div>
            </div>
        </section>
    );
}