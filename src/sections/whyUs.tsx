export default function WhyUs() {
    const benefits = [
        {
            title: "Cost-Effective",
            description: "We focus on delivering high-quality service at competitive prices. By optimizing our workflow and reducing unnecessary costs, we offer services that are 10–30% more affordable than many competitors. Whether it's a small room cleanup or a full property clearance, our pricing remains transparent and cost-effective for both individuals and corporate clients.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            gradient: "from-orange-400 to-orange-500",
        },
        {
            title: "Fast & Efficient",
            description: "Speed is one of our core strengths. Most requests are handled within 24–72 hours, depending on the size of the job. With a well-coordinated team and streamlined processes, we complete tasks quickly without sacrificing quality. Our experience allows us to handle over 150 service requests per month, ensuring fast turnaround even during busy periods.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
            ),
            gradient: "from-orange-500 to-orange-600",
        },
        {
            title: "Experienced Team",
            description: "With extensive experience in junk removal, disinfection, estate organization, and hoarder house cleaning, our team brings specialized knowledge to every project. We follow professional standards and use proven methods to ensure safe and thorough results. Our reputation is backed by numerous positive customer reviews and repeat clients, including corporate partnerships.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
            ),
            gradient: "from-orange-600 to-orange-700",
        },
        {
            title: "Eco-Friendly",
            description: "We prioritize environmentally responsible practices in all our services. From using eco-friendly cleaning products to ensuring proper waste segregation and recycling, we minimize our environmental impact. Our commitment to green practices means you get a clean space while helping protect the planet.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
            ),
            gradient: "from-amber-400 to-orange-500",
        },
        {
            title: "24/7 Support",
            description: "We understand that emergencies don't wait for business hours. Our dedicated support team is available around the clock to answer your questions, provide quotes, and schedule services. Whether it's a last-minute cleanup or an urgent disinfection need, we're just a call away.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
            ),
            gradient: "from-orange-500 to-red-500",
        },
        {
            title: "Insured & Certified",
            description: "Your peace of mind is our priority. We are fully licensed, bonded, and insured, protecting you and your property throughout the service. Our team members undergo rigorous training and background checks, ensuring professional, trustworthy service every time.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
            ),
            gradient: "from-orange-400 to-pink-500",
        },
    ];

    return (
        <section className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <span className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 text-xs rounded-full px-4 py-1.5 mb-6 font-semibold">
                        <span className="relative flex size-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full size-2 bg-orange-500"></span>
                        </span>
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl xl:text-5xl capitalize text-center font-bold mt-3 mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                            More reasons to contact us
                        </span>
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-orange-300"></div>
                        <div className="size-3 bg-orange-500 rounded-full"></div>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-orange-300"></div>
                    </div>
                    <p className="text-center text-lg text-gray-600 font-medium max-w-2xl mx-auto">
                        Discover why thousands of customers trust us with their spaces
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative flex gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {/* Hover gradient overlay */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400/0 to-orange-600/0 group-hover:from-orange-400/3 group-hover:to-orange-600/3 transition-all duration-300"></div>

                            {/* Icon */}
                            <div className="relative shrink-0">
                                <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${benefit.gradient} text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                                    {benefit.icon}
                                </div>
                                {/* Decorative dot */}
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-orange-500"></div>
                            </div>

                            {/* Content */}
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

                {/* Bottom Stats Bar */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-orange-50 to-white border border-orange-100">
                        <span className="text-2xl font-bold text-orange-600">150+</span>
                        <p className="text-sm text-gray-600 mt-1">Monthly Services</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-orange-50 to-white border border-orange-100">
                        <span className="text-2xl font-bold text-orange-600">98%</span>
                        <p className="text-sm text-gray-600 mt-1">Satisfaction Rate</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-orange-50 to-white border border-orange-100">
                        <span className="text-2xl font-bold text-orange-600">24/7</span>
                        <p className="text-sm text-gray-600 mt-1">Availability</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-orange-50 to-white border border-orange-100">
                        <span className="text-2xl font-bold text-orange-600">50+</span>
                        <p className="text-sm text-gray-600 mt-1">Corporate Clients</p>
                    </div>
                </div>
            </div>
        </section>
    );
}