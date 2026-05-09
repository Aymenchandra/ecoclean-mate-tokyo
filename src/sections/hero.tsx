import { memo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import heroImg from "/assets/images/hero-img.webp";

const Hero = memo(function Hero() {
    const { t } = useTranslation();

    return (
        <section className="flex flex-col md:flex-row items-center max-md:text-center justify-between mt-16 pb-16 px-6 sm:px-10 md:px-24 max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-center md:items-start">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 text-xs rounded-full px-4 py-1.5 mb-6 hover:bg-orange-100 transition-all duration-300 shadow-sm hover:shadow-md">
                    <span className="relative flex size-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full size-2 bg-orange-500"></span>
                    </span>
                    <span className="font-medium">{t("hero.badge")}</span>
                    <svg
                        className="w-4 h-4"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 6.5h14M9.5 1 15 6.5 9.5 12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {/* Main heading */}
                <h1 className="text-gray-900 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-xl leading-tight">
                    {t("hero.title.part1")}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                        {" "}{t("hero.title.part2")}
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-6 text-gray-600 max-w-md text-sm sm:text-base leading-relaxed">
                    {t("hero.description")}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center mt-8 gap-4">
                    <button
                        className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transform hover:-translate-y-0.5"
                        type="button"
                    >
                        <span>{t("hero.cta.primary", { phone: "03-6885-9300" })}</span>
                        <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <Link
                        to="/"
                        className="group relative overflow-hidden border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-full text-sm font-semibold hover:text-white transition-all duration-300"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        <span className="relative z-10">
                            {t("hero.cta.secondary", { phone: "090-1432-7757" })}
                        </span>
                    </Link>
                </div>

                {/* Stats */}
                <div className="mt-12 flex items-center gap-8 sm:gap-12">
                    <div className="flex flex-col items-center sm:items-start">
                        <span className="text-2xl sm:text-3xl font-bold text-orange-500">
                            {t("hero.stats.monthly.number")}
                        </span>
                        <span className="text-gray-600 text-sm">
                            {t("hero.stats.monthly.label")}
                        </span>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <span className="text-2xl sm:text-3xl font-bold text-orange-500">
                            {t("hero.stats.available.number")}
                        </span>
                        <span className="text-gray-600 text-sm">
                            {t("hero.stats.available.label")}
                        </span>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <div className="flex items-center gap-1">
                            <span className="text-2xl sm:text-3xl font-bold text-orange-500">
                                {t("hero.stats.rating.number")}
                            </span>
                            <svg
                                className="w-5 h-5 text-orange-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <span className="text-gray-600 text-sm">
                            {t("hero.stats.rating.label")}
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero image */}
            <div aria-label={t("hero.imageAlt")} className="mt-12 md:mt-0 pb-6">
                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl blur-xl opacity-20"></div>
                    <img
                        src={heroImg}
                        alt={t("hero.imageAlt")}
                        className="relative w-80 h-96 sm:w-96 sm:h-[440px] md:w-[420px] md:h-[440px] rounded-2xl hover:scale-105 transition duration-500 object-cover shadow-2xl hover:shadow-orange-500/25"
                        loading="eager"
                        decoding="async"
                        width="420"
                        height="440"
                    />
                </div>
            </div>
        </section>
    );
});

export default Hero;