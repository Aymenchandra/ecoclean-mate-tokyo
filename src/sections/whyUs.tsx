export default function WhyUs() {
    const benefits = [
        {
            title: "コストパフォーマンス",
            description: "他社様と比較しても高品質を保ちながら低価格なサービスを提供しています。炊飯器1つから物件全体の片付けまで、個人のお客様にも法人のお客様にも透明でリーズナブルな料金設定を心がけております。「くらしのマーケット」でも多くのお客様から高い評価をいただいています。",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            gradient: "from-orange-400 to-orange-500",
        },
        {
            title: "迅速・効率的",
            description: "スピードは私たちの強みの一つです。「サービスファースト」をモットーに、品質を落とすことなく可能な限り迅速に作業を完了します。月間100件以上（現在は150件以上）のご依頼を処理してきた経験を活かし、東京・神奈川・埼玉・千葉エリアで繁忙期でもスピーディーな対応を実現しています。",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
            ),
            gradient: "from-orange-500 to-orange-600",
        },
        {
            title: "経験豊富なスタッフ",
            description: "不用品回収、ウイルス消毒、遺品整理・生前整理、ゴミ屋敷清掃において豊富な経験を持つスタッフが、あらゆるプロジェクトに専門知識を提供します。また、男性スタッフのみではご不安なお客様のために、女性スタッフのご要望にも対応可能です（1週間前までのご予約が必要です）。",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
            ),
            gradient: "from-orange-600 to-orange-700",
        },
    ];

    return (
        <section className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
            {/* 背景の装飾 */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* セクションヘッダー */}
                <div className="mb-16 text-center">
                    <span className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 text-xs rounded-full px-4 py-1.5 mb-6 font-semibold">
                        <span className="relative flex size-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full size-2 bg-orange-500"></span>
                        </span>
                        選ばれる理由
                    </span>
                    <h2 className="text-4xl xl:text-5xl capitalize text-center font-bold mt-3 mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                            お問い合わせいただく理由
                        </span>
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-orange-300"></div>
                        <div className="size-3 bg-orange-500 rounded-full"></div>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-orange-300"></div>
                    </div>
                    <p className="text-center text-lg text-gray-600 font-medium max-w-2xl mx-auto">
                        多くのお客様に信頼されている理由をご覧ください
                    </p>
                </div>

                {/* メリットグリッド */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative flex gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {/* ホバーグラデーションオーバーレイ */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400/0 to-orange-600/0 group-hover:from-orange-400/3 group-hover:to-orange-600/3 transition-all duration-300"></div>

                            {/* アイコン */}
                            <div className="relative shrink-0">
                                <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${benefit.gradient} text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                                    {benefit.icon}
                                </div>
                                {/* 装飾ドット */}
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-orange-500"></div>
                            </div>

                            {/* コンテンツ */}
                            <div className="relative">
                                <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}