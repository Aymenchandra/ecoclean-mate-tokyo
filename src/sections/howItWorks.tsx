import { Link } from "react-router-dom";

export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "お問い合わせ・ご相談",
            description: "不用品回収、清掃、消毒、整理整頓など、お客様のご要望をお聞かせください。丁寧にヒアリングし、お客様の状況に合わせた迅速かつリーズナブルなお見積りをご提案いたします。",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ),
        },
        {
            number: "02",
            title: "日程調整・準備",
            description: "ご都合の良い日時をお選びください。女性スタッフのご要望や特殊な品目の取り扱いなど、事前にしっかりと準備を整えてお伺いいたします。",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
            ),
        },
        {
            number: "03",
            title: "プロによるサービス実施・完了",
            description: "トレーニングを受けたスタッフが時間通りにお伺いし、効率的かつ丁寧に作業を完了いたします。お客様の空間を清潔に整え、すぐにご利用いただける状態にいたします。",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="works" className="relative bg-gradient-to-b from-gray-900 to-gray-950 py-16 sm:py-20 lg:py-28 overflow-hidden">
            {/* アニメーション背景オーブ */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
            </div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                {/* セクションヘッダー */}
                <div className="max-w-2xl mx-auto text-center">
                    <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs rounded-full px-4 py-1.5 mb-6">
                        <span className="relative flex size-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full size-2 bg-orange-500"></span>
                        </span>
                        簡単3ステップ
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mx-auto">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                            ご利用の流れ
                        </span>
                    </h2>
                    <p className="max-w-2xl mx-auto mt-4 text-base text-gray-400 leading-relaxed md:text-lg lg:text-xl">
                        プロフェッショナルなチームが最初から最後までスムーズな体験をお届けします
                    </p>
                </div>

                {/* ステップ */}
                <div className="relative mt-16 lg:mt-24">
                    {/* デスクトップ用接続線 */}
                    <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5">
                        <div className="h-full bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
                    </div>

                    <div className="relative grid grid-cols-1 text-center gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
                        {steps.map((step, index) => (
                            <div key={index} className="group relative">
                                {/* ステップ番号とアイコン */}
                                <div className="relative flex items-center justify-center mx-auto">
                                    <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 group-hover:scale-110 transition-all duration-300 rotate-3 group-hover:rotate-0">
                                        <div className="text-white">
                                            {step.icon}
                                        </div>
                                    </div>
                                    {/* 番号バッジ */}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-orange-500">
                                        <span className="text-xs font-bold text-orange-600">{step.number}</span>
                                    </div>
                                </div>

                                {/* コンテンツ */}
                                <div className="mt-8">
                                    <h3 className="text-xl lg:text-2xl text-white font-bold leading-tight group-hover:text-orange-400 transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="mt-4 text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                        {step.description}
                                    </p>
                                </div>

                                {/* ステップ間の矢印（デスクトップのみ） */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:flex absolute top-16 -right-6 xl:-right-10 text-orange-500/40 group-hover:text-orange-500/60 transition-colors duration-300">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 下部CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                        <span className="text-gray-400 text-sm">ご依頼をお考えですか？</span>
                        <Link to="/contact" className="text-orange-500 font-semibold text-sm hover:text-orange-400 transition-colors duration-300 flex items-center gap-1">
                            今すぐお問い合わせ
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}