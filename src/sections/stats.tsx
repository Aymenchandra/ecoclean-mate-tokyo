{/* Stats Section  */ }
export default function Stats() {
    return (
        <section className="bg-white py-12">
            <div className="bg-slate-100 py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
                        <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 p-4 lg:p-8">
                            <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">50+</div>
                            <div className="text-sm font-semibold sm:text-base">Webinar</div>
                        </div>

                        <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 p-4 md:p-8">
                            <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">5000+</div>
                            <div className="text-sm font-semibold sm:text-base">Attended</div>
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
        </section>
    );
}