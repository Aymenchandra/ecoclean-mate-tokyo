import { memo } from "react";
import { useTranslation } from "react-i18next";
import type { Step1Data } from "../../../hooks/useCalculator";

interface Props {
    data: Step1Data;
    onChange: (data: Partial<Step1Data>) => void;
}

const SERVICE_AREAS = {
    Tokyo: ["Whole Area"],
    Saitama: [
        "Asaka City", "Iruma City", "Miyoshi Town (Iruma District)", "Kawaguchi City",
        "Sayama City", "Shiki City", "Soka City", "Tokorozawa City", "Toda City",
        "Niiza City", "Hatogaya City", "Fujimi City", "Fujimino City", "Wako City",
        "Warabi City", "Saitama City", "Yoshikawa City", "Koshigaya City", "Misato City",
        "Yashio City", "Ageo City", "Kawagoe City", "Hidaka City", "Hannō City",
    ],
    Kanagawa: [
        "Kawasaki City", "Yokohama City", "Kamakura City", "Zushi City", "Yokosuka City",
        "Miura City", "Hayama Town", "Yamato City", "Sagamihara City", "Fujisawa City",
    ],
    Chiba: [
        "Ichikawa City", "Urayasu City", "Chiba City", "Narashino City", "Yachiyo City",
        "Funabashi City", "Kamagaya City", "Matsudo City", "Kashiwa City", "Nagareyama City",
    ],
    Osaka: [
        "Kita Ward", "Miyakojima Ward", "Fukushima Ward", "Konohana Ward", "Chuo Ward",
        "Nishi Ward", "Minato Ward", "Taisho Ward", "Tennoji Ward", "Naniwa Ward",
        "Nishiyodogawa Ward", "Yodogawa Ward", "Higashiyodogawa Ward", "Higashinari Ward",
        "Ikuno Ward", "Asahi Ward", "Joto Ward", "Tsurumi Ward", "Abeno Ward",
        "Suminoe Ward", "Sumiyoshi Ward", "Higashisumiyoshi Ward", "Hirano Ward", "Nishinari Ward",
        "Toyonaka City", "Suita City", "Ikeda City", "Minoo City", "Ibaraki City",
        "Takatsuki City", "Hirakata City", "Settsu City", "Neyagawa City", "Katano City",
        "Moriguchi City", "Kadoma City", "Shijonawate City", "Daito City", "Higashiosaka City",
        "Yao City", "All of Sakai City", "Kashiwara City", "Fujiidera City", "Matsubara City",
        "Habikino City", "Tondabayashi City", "Osakasayama City", "Takaishi City", "Izumiotsu City",
        "Izumi City", "Kishiwada City", "Tadaoka Town", "Shimamoto Town", "Toyono Town",
        "Nose Town", "Kaizuka City", "Kawachinagano City", "Izumisano City", "Sennan City",
        "Hannan City", "Kumatori Town",
    ],
    Kyoto: [
        "Kita Ward", "Sakyo Ward", "Ukyo Ward", "Kamigyo Ward", "Nakagyo Ward",
        "Higashiyama Ward", "Shimogyo Ward", "Yamashina Ward", "Nishikyo Ward", "Fushimi Ward",
        "Minami Ward (Kyoto City)", "Uji City", "Yawata City", "Joyo City", "Kyotanabe City",
        "Kameoka City", "Nagaokakyo City", "Mukō City", "Ōyamazaki Town", "Kumiyama Town",
        "Fukuchiyama City", "Kizugawa City", "Ujitawara Town", "Seika Town", "Ide Town",
    ],
    Hyogo: [
        "Kobe City", "Ashiya City", "Nishinomiya City", "Amagasaki City", "Itami City",
        "Kawanishi City", "Takarazuka City", "Akashi City", "Kakogawa City", "Takasago City",
        "Himeji City", "Sanda City", "Miki City", "Inagawa Town", "Inami Town",
        "Harima Town", "Ono City", "Kasai City", "Kato City", "Nishiwaki City",
    ],
    Shiga: [
        "Otsu City", "Kusatsu City", "Ritto City", "Moriyama City", "Yasu City",
        "Omihachiman City", "Konan City", "Ryuo Town",
    ],
    Nara: [
        "Nara City", "Ikoma City", "Yamato-Koriyama City", "Ikoma District",
        "Kashiba City", "Tenri City", "Kashihara City", "Shiki District", "Kita-Katsuragi District",
    ],
} as const;

const Step1 = memo(function Step1({ data, onChange }: Props) {
    const { t } = useTranslation();

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-xl font-bold text-gray-900">
                    {t("calculator.step1.title")}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    {t("calculator.step1.description")}
                </p>
            </div>

            {/* Service Areas */}
            <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {t("calculator.step1.serviceArea")}
                </h3>

                <div className="bg-gray-50 border border-gray-200 rounded-lg max-h-64 overflow-y-auto">
                    {Object.entries(SERVICE_AREAS).map(([prefecture, cities]) => (
                        <div key={prefecture} className="px-4 py-3 border-b border-gray-100 last:border-b-0">
                            <span className="text-sm font-semibold text-gray-800">
                                {`${prefecture}`}:
                            </span>
                            <span className="text-sm text-gray-600 ml-2">
                                {cities.map(city => t(`cities.${city}`, { defaultValue: city })).join(", ")}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pricing Structure */}
            <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t("calculator.step1.pricingStructure")}
                </h3>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 space-y-3">
                    <p className="text-sm text-gray-700">
                        {t("calculator.step1.pricingDescription")}
                    </p>

                    <div className="bg-white rounded-lg p-3 border border-orange-100">
                        <p className="text-sm font-medium text-gray-800 text-center">
                            {t("calculator.step1.pricingFormula")}
                        </p>
                        <p className="text-xs text-gray-500 text-center mt-1">
                            {t("calculator.step1.pricingOptional")}
                        </p>
                        <div className="mt-2 pt-2 border-t border-orange-100">
                            <p className="text-sm font-bold text-orange-600 text-center">
                                = {t("calculator.step1.totalAmount")}
                            </p>
                        </div>
                    </div>

                    <p className="text-xs text-gray-500">
                        {t("calculator.step1.estimateNote")}
                    </p>

                    {/* Selling Note */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                        <p className="text-xs text-gray-700">
                            <span className="font-semibold">{t("calculator.step1.sellingNote.title")}:</span>{" "}
                            {t("calculator.step1.sellingNote.description")}
                        </p>
                    </div>

                    {/* Important Notice */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-xs text-red-700">
                            <span className="font-semibold">{t("calculator.step1.importantNotice.title")}</span>{" "}
                            {t("calculator.step1.importantNotice.description")}
                        </p>
                    </div>
                </div>
            </div>

            {/* Confirmation Button */}
            <button
                type="button"
                onClick={() => onChange({ confirmed: true })}
                disabled={data.confirmed}
                className={[
                    "w-full py-3 px-4 rounded-lg text-sm font-semibold transition-all",
                    data.confirmed
                        ? "bg-green-500 text-white cursor-not-allowed"
                        : "bg-orange-500 hover:bg-orange-600 text-white",
                ].join(" ")}
            >
                {data.confirmed ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {t("calculator.step1.confirmed")}
                    </span>
                ) : (
                    t("calculator.step1.confirmButton")
                )}
            </button>

            {data.confirmed && (
                <p className="text-center text-xs text-green-600">
                    {t("calculator.step1.confirmedMessage")}
                </p>
            )}
        </div>
    );
});

export default Step1;