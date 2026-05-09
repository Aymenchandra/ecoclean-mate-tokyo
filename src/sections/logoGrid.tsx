import { memo } from "react";
import { useTranslation } from "react-i18next";
import LogoGridLists from "../constants/logoGridLists";

const LogoGrid = memo(function LogoGrid() {
    const { t } = useTranslation();

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent pointer-events-none"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                {/* Section header */}
                <div className="mb-16 text-center">
                    <span className="text-orange-500 font-semibold text-sm tracking-widest uppercase">
                        {t("logoGrid.subtitle")}
                    </span>
                    <h2 className="text-4xl xl:text-5xl capitalize text-center font-bold mt-3 mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                            {t("logoGrid.title")}
                        </span>
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-orange-300"></div>
                        <div className="size-3 bg-orange-500 rounded-full"></div>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-orange-300"></div>
                    </div>
                </div>

                {/* Logo grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                    {LogoGridLists.map((logo, index) => (
                        <div
                            key={index}
                            className="group relative flex items-center justify-center w-full"
                        >
                            <div className="relative p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100 hover:border-orange-200">
                                {/* Hover glow effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400/0 to-orange-600/0 group-hover:from-orange-400/5 group-hover:to-orange-600/5 transition-all duration-300"></div>

                                <img
                                    src={logo.src}
                                    alt={t(`logoGrid.logos.${index}.alt`, { defaultValue: logo.label })}
                                    className="h-12 w-auto object-contain relative z-10 filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                                    loading="lazy"
                                    decoding="async"
                                    width="120"
                                    height="48"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom accent */}
                <div className="mt-16 text-center">
                    <p className="text-gray-500 text-sm inline-flex items-center gap-2">
                        <span className="h-px w-12 bg-gradient-to-r from-transparent to-orange-300"></span>
                        <span>{t("logoGrid.bottomText")}</span>
                        <span className="h-px w-12 bg-gradient-to-l from-transparent to-orange-300"></span>
                    </p>
                </div>
            </div>
        </section>
    );
});

export default LogoGrid;