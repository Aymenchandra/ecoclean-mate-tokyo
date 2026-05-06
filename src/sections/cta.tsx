import { Link } from "react-router-dom";

export default function CTA() {
    return (
        <section className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
            {/* 背景の装飾 */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* メインCTAカード */}
                <div className="relative rounded-3xl bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-orange-500/25 overflow-hidden">
                    {/* 装飾円 */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl"></div>

                    {/* 浮遊ドットパターン */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full"></div>
                        <div className="absolute top-20 right-20 w-2 h-2 bg-white rounded-full"></div>
                        <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-white rounded-full"></div>
                        <div className="absolute bottom-10 right-1/4 w-2 h-2 bg-white rounded-full"></div>
                    </div>

                    <div className="relative flex flex-col items-center text-center max-w-2xl mx-auto">
                        {/* 見出し */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                            空間を生まれ変わらせる準備はできましたか？
                        </h2>

                        {/* サブタイトル */}
                        <p className="text-lg sm:text-xl text-orange-100 mb-8 max-w-lg">
                            清掃や整理整頓のニーズに信頼を寄せる多くのお客様のコミュニティにご参加ください
                        </p>

                        {/* 予約カウンター */}
                        <div className="flex items-center gap-3 mb-8 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-orange-200" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                <span className="text-white font-semibold text-lg">890</span>
                            </div>
                            <span className="text-orange-100 text-sm">名のユーザーが既に予約済み</span>
                        </div>

                        {/* CTAボタン */}
                        <Link
                            to="/contact"
                            className="group relative inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full text-base font-bold hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mb-6"
                        >
                            <span>お問い合わせ</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}