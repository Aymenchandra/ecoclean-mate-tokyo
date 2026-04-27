{/* Contact Section  */ }
export default function ContactSection() {
    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ),
            title: "Phone",
            details: [
                { label: "Main Office", value: "03-6885-9300" },
                { label: "Direct Line", value: "090-1432-7757" },
            ],
        },
        // {
        //     icon: (
        //         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        //         </svg>
        //     ),
        //     title: "Email",
        //     details: [
        //         { label: "Inquiries", value: "info@ecocleanmate.jp" },
        //     ],
        // },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ),
            title: "Address",
            details: [
                { label: "Location", value: "2-19-15 Nakamuraminami, Nerima-ku, Tokyo 176-0025" },
            ],
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Business Hours",
            details: [
                { label: "Weekdays", value: "9:00 AM - 9:00 PM" },
                { label: "Weekends & Holidays", value: "9:00 AM - 8:00 PM" },
                { label: "Closed", value: "Open all year round" },
            ],
        },
    ];

    const certifications = [
        {
            label: "Antique Dealer License",
            value: "Tokyo Metropolitan Public Safety Commission No. 305572015633",
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
            ),
        },
        {
            label: "Estate Cleanup Specialist",
            value: "Certification No. IS24460",
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
            ),
        },
    ];

    const serviceAreas = [
        "All of Tokyo (excluding remote islands)",
        "Saitama: Kawaguchi, Tokorozawa, Warabi, Toda, Asaka, Wako, Niiza, Fujimino",
        "Kanagawa: Yokohama (Tsurumi, Kohoku, Aoba, Tsuzuki), Kawasaki (Kawasaki, Saiwai, Nakahara, Takatsu, Tama, Miyamae, Aso)",
        "Chiba: Nagareyama, Matsudo, Funabashi, Ichikawa, Kashiwa, Narashino, Chiba City",
    ];

    return (
        <section id="contact" className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <span className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 text-xs rounded-full px-4 py-1.5 mb-6 font-semibold">
                        <span className="relative flex size-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full size-2 bg-orange-500"></span>
                        </span>
                        Get in Touch
                    </span>
                    <h2 className="text-4xl xl:text-5xl capitalize text-center font-bold mt-3 mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                            Contact Us
                        </span>
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-orange-300"></div>
                        <div className="size-3 bg-orange-500 rounded-full"></div>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-orange-300"></div>
                    </div>
                    <p className="text-center text-lg text-gray-600 font-medium max-w-2xl mx-auto">
                        Feel free to contact us for any inquiries or service requests
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        {contactInfo.map((item, index) => (
                            <div
                                key={index}
                                className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg group-hover:shadow-orange-500/25 group-hover:scale-110 transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                                </div>
                                <div className="space-y-2 pl-16">
                                    {item.details.map((detail, idx) => (
                                        <div key={idx}>
                                            <span className="text-xs font-medium text-orange-500 uppercase tracking-wider">
                                                {detail.label}
                                            </span>
                                            <p className="text-gray-700 font-medium">{detail.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Certifications */}
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 shadow-md">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                Certifications
                            </h3>
                            <div className="space-y-4">
                                {certifications.map((cert, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 mt-0.5">
                                            {cert.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800">{cert.label}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">{cert.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Map and Form */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Google Map */}
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[350px] relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.594857403365!2d139.65654231525976!3d35.73518498018116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f2e5e4e1b5c9%3A0x91b6b2d4c2e8e286!2s2-ch%C5%8Dme-19-15%20Nakamuraminami%2C%20Nerima%20City%2C%20Tokyo%20176-0025!5e0!3m2!1sen!2sjp!4v1700000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ecoclean Mate Office Location"
                            ></iframe>
                            {/* Map overlay with address */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">Our Office</p>
                                        <p className="text-xs text-gray-600 mt-0.5">2-19-15 Nakamuraminami, Nerima-ku, Tokyo 176-0025</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service Areas */}
                        <div className="rounded-2xl bg-white border border-gray-100 shadow-md p-6 lg:p-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Service Areas
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {serviceAreas.map((area, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-3 p-4 rounded-xl bg-orange-50/50 border border-orange-100 hover:bg-orange-50 hover:border-orange-200 transition-all duration-300"
                                    >
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold mt-0.5">
                                            {idx + 1}
                                        </span>
                                        <p className="text-sm text-gray-700 leading-relaxed">{area}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}