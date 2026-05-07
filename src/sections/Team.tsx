import { memo } from "react";
import { useTranslation } from "react-i18next";
import TeamMember from "/assets/team/kv_01.jpg";
import Owner from "/assets/team/img_staff01.jpg";

const Team = memo(function Team() {
    const { t } = useTranslation();

    const teamMembers = [
        {
            key: "owner",
            name: "Manabu Umeda",
            image: Owner,
            gradient: "from-orange-400 to-orange-500",
            bgGradient: "from-orange-50 to-orange-100",
        },
        {
            key: "staff",
            name: "Kei Inagawa",
            image: TeamMember,
            gradient: "from-orange-500 to-orange-600",
            bgGradient: "from-orange-50 to-amber-50",
        },
    ];

    return (
        <section className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
                <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl xl:text-5xl capitalize text-center font-bold mt-3 mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                            {t("team.title")}
                        </span>
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-orange-300"></div>
                        <div className="size-3 bg-orange-500 rounded-full"></div>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-orange-300"></div>
                    </div>
                    <p className="text-center text-lg text-gray-600 font-medium max-w-2xl mx-auto">
                        {t("team.description")}
                    </p>
                </div>

                {/* Team grid */}
                <div className="grid gap-8 lg:gap-10">
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.key}
                            className={`group flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                } gap-6 lg:gap-10`}
                        >
                            {/* Image */}
                            <div className="w-full lg:w-1/4 flex-shrink-0">
                                <div className="relative rounded-3xl overflow-hidden shadow-lg group-hover:shadow-xl group-hover:shadow-orange-500/20 transition-all duration-300">
                                    <img
                                        src={member.image}
                                        alt={t(`team.members.${member.key}.name`)}
                                        className="w-full h-64 lg:h-full object-cover aspect-video lg:aspect-square group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    {/* Gradient overlay */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                                    ></div>
                                    {/* Mobile name badge */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 lg:hidden bg-gradient-to-t from-black/60 to-transparent">
                                        <h3 className="text-white text-lg font-bold">
                                            {t(`team.members.${member.key}.name`)}
                                        </h3>
                                        <p className="text-white/80 text-sm">
                                            {t(`team.members.${member.key}.role`)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div
                                className={`w-full lg:w-3/4 rounded-3xl flex flex-col justify-center p-8 lg:p-12 xl:p-14 bg-gradient-to-br ${member.bgGradient} border border-orange-100/50 shadow-md group-hover:shadow-lg group-hover:shadow-orange-500/10 transition-all duration-300 relative overflow-hidden`}
                            >
                                {/* Decorative circles */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/30 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                                {/* Name and role - hidden on mobile (shown in image overlay) */}
                                <div className="relative hidden lg:block">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                                        {t(`team.members.${member.key}.name`)}
                                    </h3>
                                    <div className="flex items-center gap-3 mt-2 mb-5">
                                        <span
                                            className={`inline-block h-1 w-8 rounded-full bg-gradient-to-r ${member.gradient}`}
                                        ></span>
                                        <span className="text-lg text-orange-600 font-medium">
                                            {t(`team.members.${member.key}.role`)}
                                        </span>
                                    </div>
                                </div>

                                {/* Mobile role display */}
                                <p className="text-orange-600 font-medium lg:hidden mb-4">
                                    {t(`team.members.${member.key}.role`)}
                                </p>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed text-base lg:text-lg relative">
                                    {t(`team.members.${member.key}.description`)}
                                </p>

                                {/* Ratings & achievements */}
                                <div className="flex gap-6 mt-6 relative">
                                    <div className="flex items-center gap-2">
                                        <svg
                                            className="w-5 h-5 text-orange-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="text-sm text-gray-500">
                                            {t("team.rating")}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg
                                            className="w-5 h-5 text-orange-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                            />
                                        </svg>
                                        <span className="text-sm text-gray-500">
                                            {t("team.certified")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Team;