{/* Contact Section  */ }
export default function ContactSection() {
    return (
        <section className="mb-32">
            <div className="mb-10 md:mb-16">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Contact Us</h2>
                <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Feel Free To Contact Us</p>
            </div>
            <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                    width="100%" height="480" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
            </div>
            <div className="container px-6 md:px-12">
                <div
                    className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
                    <div className="bg-slate-100 py-6 sm:py-8 lg:py-12">
                        <div className="mx-auto max-w-screen-xl px-4 md:px-8">

                            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
                                <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 p-4 lg:p-8">
                                    <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">50+</div>
                                    <div className="text-sm font-semibold sm:text-base">Webinar</div>
                                </div>

                                <div className="flex flex-col items-center justify-center rounded-lg bg-green-500 p-4 md:p-8">
                                    <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">5000+</div>
                                    <div className="text-sm font-semibold text-white sm:text-base">Attended</div>
                                </div>

                                <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 p-4 md:p-8">
                                    <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">400+</div>
                                    <div className="text-sm font-semibold sm:text-base">Hours</div>
                                </div>

                                <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 p-4 md:p-8">
                                    <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">6000+</div>
                                    <div className="text-sm font-semibold sm:text-base">Subscriber</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}