import logo from '../../assets/logo/eco-clean.png';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        services: [
            { label: "徹底清掃", href: "#" },
            { label: "消毒", href: "#" },
            { label: "不用品回収", href: "#" },
            { label: "整理整頓", href: "#" },
            { label: "遺品整理", href: "#" },
        ],
        company: [
            { label: "会社概要", href: "#" },
            { label: "スタッフ紹介", href: "#" },
            { label: "採用情報", href: "#" },
            { label: "ブログ", href: "#" },
        ],
        support: [
            { label: "お問い合わせ", href: "#" },
            { label: "よくある質問", href: "#" },
            { label: "プライバシーポリシー", href: "#" },
            { label: "利用規約", href: "#" },
        ],
    };

    return (
        <footer className="relative bg-gray-900 pt-16 sm:pt-20 lg:pt-24 overflow-hidden">
            {/* 背景の装飾 */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/5 rounded-full filter blur-3xl"></div>
            </div>

            {/* 上部ウェーブ区切り */}
            <div className="absolute top-0 left-0 right-0">
                <svg className="w-full h-12 text-white fill-current" viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48h1440V0c-196 28-392 20-588 18-196-2-392-8-588 2C68 28 0 48 0 48z" />
                </svg>
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* メインフッターコンテンツ */}
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
                    {/* ブランドカラム */}
                    <div className="lg:col-span-2">
                        {/* ロゴ */}
                        <a href="/" className="inline-flex items-center gap-2 mb-6">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
                                <img src={logo} alt="ロゴ" className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">エコクリーン MATE 東京</span>
                        </a>

                        <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                            多くのお客様に信頼されているプロフェッショナルな清掃・整理サービス。
                            お客様の空間を清潔で健康的、そして整頓された状態にいたします。
                        </p>

                        {/* ソーシャルリンク */}
                        <div className="flex items-center gap-4">
                            <a
                                href="https://x.com/eco_clean_mate#CASE"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X（旧Twitter）"
                                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-orange-500 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="https://page.line.me/759mdnmo?openQrModal=true"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LINE"
                                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-orange-500 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.365 9.863a.631.631 0 010 1.261H17.61v1.125h1.755a.63.63 0 110 1.259H16.98a.63.63 0 01-.627-.629V9.863a.63.63 0 01.629-.63h2.384zm-3.229 0a.631.631 0 010 1.261h-.631v1.125h.63a.63.63 0 110 1.259h-1.257a.63.63 0 01-.629-.629V9.863a.63.63 0 01.629-.63h1.258zm-3.618.042c.312 0 .59.185.703.455l1.01 2.412a.63.63 0 11-1.17.488l-.133-.324h-1.1l-.133.324a.63.63 0 11-1.17-.488l1.01-2.412a.737.737 0 01.703-.455zm-.343 1.83h.686l-.343-.847-.343.847zm-3.17-1.83a.63.63 0 01.63.629v2.455a.63.63 0 11-1.259 0v-2.455a.63.63 0 01.629-.629zm-3.144 0h1.257a.63.63 0 01.629.629v2.455a.63.63 0 11-1.259 0v-.629h-.627v.629a.63.63 0 11-1.259 0V9.863a.63.63 0 01.629-.629zm.627 1.26h-.627v.627h.627v-.627zm15.955-1.26a.63.63 0 01.63.629v2.455a.63.63 0 11-1.259 0v-.629H20.98v.629a.63.63 0 11-1.259 0V9.863a.63.63 0 01.629-.629zm.627 1.26h-.627v.627h.627v-.627z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* サービスリンク */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">サービス</h3>
                        <ul className="space-y-4">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-3 h-px bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300"></span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 会社リンク */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">会社情報</h3>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-3 h-px bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300"></span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* サポートリンク */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">サポート</h3>
                        <ul className="space-y-4">
                            {footerLinks.support.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-3 h-px bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300"></span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 下部バー */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            © {currentYear} Ecoclean Mate. All rights reserved. 清潔な空間のために❤️を込めて。
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors duration-300 text-sm">プライバシーポリシー</a>
                            <span className="text-gray-600">•</span>
                            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors duration-300 text-sm">利用規約</a>
                            <span className="text-gray-600">•</span>
                            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors duration-300 text-sm">Cookieポリシー</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}