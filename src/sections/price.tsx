import { useState } from "react";

export default function PriceSection() {
    const [activeTab, setActiveTab] = useState("junk");

    const tabs = [
        { id: "junk", label: "不用品回収" },
        { id: "disinfection", label: "消毒" },
        { id: "organize", label: "整理整頓" },
        { id: "cleaning", label: "清掃" },
    ];

    const services = {
        junk: {
            title: "不用品回収",
            subtitle: "不要品の収集",
            description: "物件からの不要品のプロフェッショナルな回収。一点ものから物件全体の片付けまで対応いたします。",
            plans: [
                {
                    name: "軽トラックパック",
                    price: "8,800",
                    unit: "円",
                    originalPrice: null,
                    badge: "基本プラン",
                    duration: "10分～60分",
                    capacity: {
                        bed: "190cm × 140cm × 100cm",
                        weight: "350kg",
                        volume: "約2.5㎥（約1.7畳分）",
                    },
                    sampleItems: "小型冷蔵庫、洗濯機、テレビ、ベッド（シングル）、布団、段ボール約10箱",
                    features: [
                        "基本料金：8,800円",
                        "地域料金エリア：+4,400円（合計：13,200円）",
                        "容量超過：6,000円/㎥",
                        "作業員追加：3,000～5,000円/人",
                        "エレベーターなし（2F以上）：1,000円/階",
                    ],
                    nonRecoverable: "一般・リサイクル可能な廃棄物、古い家電、液体、危険物、ガラス、陶器、土、植物、医療廃棄物、悪臭のある物",
                    color: "from-orange-400 to-orange-500",
                },
                {
                    name: "2tトラックパック",
                    price: "25,000",
                    unit: "円",
                    originalPrice: null,
                    badge: "人気",
                    duration: "応相談（量に応じて）",
                    capacity: {
                        bed: "300cm × 166cm × 100cm",
                        weight: "2,000kg",
                        volume: "約5.0㎥（約3畳分）",
                    },
                    sampleItems: "大型冷蔵庫（合計200cm以上）、ソファ、整理ダンス、マッサージチェア、自転車、エアコン",
                    features: [
                        "基本料金：25,000円",
                        "地域料金エリア：+4,400円（合計：29,400円）",
                        "作業員追加：無料",
                        "エレベーターなし（2F以上）：1,000円/階",
                        "品目別料金・特殊作業料金が別途発生する場合あり",
                    ],
                    nonRecoverable: "軽トラックパックと同様の制限あり",
                    color: "from-orange-500 to-orange-600",
                    featured: true,
                },
            ],
            notes: [
                "料金は合計 = 基本料金 + 品目別料金 + 特殊作業料金 + 時間帯料金 - 買取価格",
                "作業員の判断により、一部の品目をお受けできない場合がございます",
                "地域料金エリア割増：+4,400円",
            ],
        },
        disinfection: {
            title: "消毒",
            subtitle: "ウイルス除去・消毒作業",
            description: "住宅および商業施設向けのプロ仕様の消毒サービス。東京、神奈川、千葉、埼玉エリアに対応。",
            plans: [
                {
                    name: "平米単価",
                    price: "550",
                    unit: "円/㎡",
                    originalPrice: null,
                    badge: "最低料金",
                    duration: "約2時間",
                    capacity: null,
                    sampleItems: null,
                    features: [
                        "1R/1K：25,000円～",
                        "1DK：30,000円～",
                        "2DK：40,000円～",
                        "一戸建て（2LDK/3DK）：70,000円～",
                        "小・中規模施設も対応可能",
                    ],
                    nonRecoverable: null,
                    color: "from-orange-400 to-orange-500",
                },
            ],
            facilityTypes: [
                "アパート・マンション",
                "一戸建て住宅",
                "オフィス・工場",
                "小・中規模店舗",
            ],
            options: [
                {
                    name: "抗ウイルスコーティング（予防）",
                    price: "要見積",
                    description: "将来の汚染を防ぐための長期保護コーティング",
                },
            ],
        },
        organize: {
            title: "整理整頓",
            subtitle: "遺品整理・生前整理",
            description: "包括的な整理整頓および遺品整理サービス。トラブル防止のため、事前に詳細なお見積りを作成いたします。",
            plans: [
                {
                    name: "遺品整理サービス",
                    price: "要見積",
                    unit: "",
                    originalPrice: null,
                    badge: "お見積り",
                    duration: "約3時間",
                    capacity: {
                        bed: "2tトラック",
                        weight: null,
                        volume: "5.0 m³ 積載可能",
                    },
                    sampleItems: null,
                    features: [
                        "必要な物と不要な物の仕分け",
                        "不要品の全回収",
                        "エリアの保護養生",
                        "作業エリアの簡易清掃",
                        "梱包用段ボール提供",
                        "2tトラックへの積み込み込み",
                    ],
                    nonRecoverable: "産業廃棄物、危険物、医療機器（対象外）",
                    color: "from-orange-500 to-orange-600",
                    featured: true,
                },
            ],
            notes: [
                "トラブル防止のため、事前にお見積りを作成いたします",
                "申告された作業範囲と異なる場合を除き、追加料金は発生しません",
                "作業エリアの簡易清掃用の清掃用品をご用意しております",
                "一般廃棄物、産業廃棄物、危険物、医療機器は対象外です",
            ],
        },
        cleaning: {
            title: "清掃サービス",
            subtitle: "家屋清掃・マットレス/ソファークリーニング",
            description: "ゴミ屋敷清掃や、マットレス・ソファの徹底クリーニング。シミ抜きオプションもご用意。",
            plans: [
                {
                    name: "家屋清掃",
                    price: "要見積",
                    unit: "",
                    originalPrice: null,
                    badge: "お見積り",
                    duration: "状態により変動",
                    capacity: {
                        bed: "2tトラック",
                        weight: null,
                        volume: "5.0 m³ 積載可能",
                    },
                    sampleItems: null,
                    features: [
                        "必要な物と不要な物の仕分け",
                        "不要品の回収",
                        "エリアの保護養生",
                        "作業エリアの簡易清掃",
                        "2tトラックへの積み込み込み",
                    ],
                    nonRecoverable: "産業廃棄物、危険物、医療機器（対象外）",
                    color: "from-orange-500 to-orange-600",
                },
            ],
            mattressPlans: [
                { name: "シングル", price: "8,300", unit: "円" },
                { name: "セミダブル / ダブル", price: "11,300", unit: "円" },
                { name: "クイーン / キング", price: "14,300", unit: "円" },
                { name: "ベビー / キッズ", price: "4,800", unit: "円" },
            ],
            mattressOptions: [
                { name: "シミ抜き（10cm×10cm）", price: "500", unit: "円/箇所" },
                { name: "両面仕上げ（シングル）", price: "4,300", unit: "円" },
            ],
            notes: [
                "家屋清掃は事前にお見積りを作成いたします",
                "作業範囲と異なる場合を除き、追加料金は発生しません",
            ],
        },
    };

    const currentService = services[activeTab];

    return (
        <section id="pricing" className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
            {/* 背景の装飾 */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* セクションヘッダー */}
                <div className="mb-12 text-center">
                    <span className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 text-xs rounded-full px-4 py-1.5 mb-6 font-semibold">
                        <span className="relative flex size-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full size-2 bg-orange-500"></span>
                        </span>
                        明確な料金設定
                    </span>
                    <h2 className="text-4xl xl:text-5xl capitalize text-center font-bold mt-3 mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                            サービスと料金
                        </span>
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-orange-300"></div>
                        <div className="size-3 bg-orange-500 rounded-full"></div>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-orange-300"></div>
                    </div>
                    <p className="text-center text-lg text-gray-600 font-medium max-w-2xl mx-auto">
                        すべてのプロフェッショナルサービスを明確で正直な料金でご提供します
                    </p>
                </div>

                {/* タブ */}
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

                {/* サービスヘッダー */}
                <div className="text-center mb-10">
                    <h3 className="text-3xl font-bold text-gray-900">{currentService.title}</h3>
                    {currentService.subtitle && (
                        <p className="text-orange-600 font-medium mt-2">{currentService.subtitle}</p>
                    )}
                    {currentService.description && (
                        <p className="text-gray-500 mt-3 max-w-3xl mx-auto">{currentService.description}</p>
                    )}
                </div>

                {/* 料金カード */}
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
                                    作業時間: {plan.duration}
                                </p>
                            )}

                            {/* 料金 */}
                            <div className="mt-6 flex items-baseline gap-x-1">
                                {plan.price === "要見積" ? (
                                    <span className="text-4xl font-bold tracking-tight text-orange-600">{plan.price}</span>
                                ) : (
                                    <>
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                                        <span className="text-lg text-gray-500">{plan.unit}</span>
                                    </>
                                )}
                            </div>

                            {/* 積載情報 */}
                            {plan.capacity && (
                                <div className={`mt-6 p-4 rounded-xl ${plan.featured ? "bg-orange-50" : "bg-gray-50"
                                    }`}>
                                    {plan.capacity.bed && (
                                        <p className="text-sm text-gray-600"><span className="font-semibold">荷台:</span> {plan.capacity.bed}</p>
                                    )}
                                    {plan.capacity.weight && (
                                        <p className="text-sm text-gray-600 mt-1"><span className="font-semibold">積載量:</span> {plan.capacity.weight}</p>
                                    )}
                                    {plan.capacity.volume && (
                                        <p className="text-sm text-gray-600 mt-1"><span className="font-semibold">容量:</span> {plan.capacity.volume}</p>
                                    )}
                                </div>
                            )}

                            {/* 回収例 */}
                            {plan.sampleItems && (
                                <div className="mt-4">
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">回収例</p>
                                    <p className="text-sm text-gray-600">{plan.sampleItems}</p>
                                </div>
                            )}

                            {/* 特徴 */}
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

                            {/* 回収不可品目 */}
                            {plan.nonRecoverable && (
                                <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-100">
                                    <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">⚠ 回収不可品目</p>
                                    <p className="text-xs text-red-700">{plan.nonRecoverable}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* マットレス料金（清掃タブ用） */}
                {activeTab === "cleaning" && currentService.mattressPlans && (
                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">マットレス・ソファークリーニング</h3>
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
                                <p className="text-sm font-semibold text-gray-700 text-center mb-4">オプション</p>
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

                {/* 対応施設（消毒タブ用） */}
                {activeTab === "disinfection" && currentService.facilityTypes && (
                    <div className="mt-10 max-w-2xl mx-auto">
                        <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
                            <h4 className="text-lg font-bold text-gray-900 mb-4">対応可能施設</h4>
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

                {/* 注意事項 */}
                {currentService.notes && (
                    <div className="mt-10 max-w-3xl mx-auto">
                        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">注意事項</h4>
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
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-base font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transform hover:-translate-y-0.5"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        お見積りを依頼する
                    </a>
                </div>
            </div>
        </section>
    );
}