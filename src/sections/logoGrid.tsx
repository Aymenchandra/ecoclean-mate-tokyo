{/* ロゴカルーセルセクション */ }
import LogoGridLists from '../constants/logoGridLists';

export default function LogoGrid() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* 背景の装飾 */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent pointer-events-none"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                {/* セクションヘッダー */}
                <div className="mb-16 text-center">
                    <span className="text-orange-500 font-semibold text-sm tracking-widest uppercase">業界から信頼される</span>
                    <h2 className="text-4xl xl:text-5xl capitalize text-center font-bold mt-3 mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                            認定資格
                        </span>
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-orange-300"></div>
                        <div className="size-3 bg-orange-500 rounded-full"></div>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-orange-300"></div>
                    </div>
                </div>

                {/* ロゴグリッド */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                    {LogoGridLists.map((logo, index) => (
                        <div
                            key={index}
                            className="group relative flex items-center justify-center w-full"
                        >
                            <div className="relative p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100 hover:border-orange-200">
                                {/* ホバー時の光彩効果 */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400/0 to-orange-600/0 group-hover:from-orange-400/5 group-hover:to-orange-600/5 transition-all duration-300"></div>

                                <img
                                    src={logo.src}
                                    alt={logo.label}
                                    className="h-12 w-auto object-contain relative z-10 filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* 下部アクセント */}
                <div className="mt-16 text-center">
                    <p className="text-gray-500 text-sm inline-flex items-center gap-2">
                        <span className="h-px w-12 bg-gradient-to-r from-transparent to-orange-300"></span>
                        <span>100社以上の企業様から信頼をいただいています</span>
                        <span className="h-px w-12 bg-gradient-to-l from-transparent to-orange-300"></span>
                    </p>
                </div>
            </div>
        </section>
    );
}