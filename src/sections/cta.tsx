export default function CTA() {
    return (
        <section>
            <div className="bg-slate-100">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

                    <section className="flex flex-col items-center border-t-2 p-3">

                        <div className="flex max-w-xl flex-col items-center pb-0 pt-8 text-center sm:pb-16 lg:pb-16 lg:pt-32">
                            <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">Revolutionary way to build the web</p>
                            <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">Join The Webinar</h1>
                            <p className="mb-8 leading-relaxed text-gray-700 md:mb-12 text-lg xl:text-2xl"><span className="bg-red-200 font-bold">890</span> users already registered. Hurry before we're filled.</p>
                            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                                <a href="#register" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">CLAIM YOUR SPOT NOW</a>
                            </div>
                            <p className="mb-8 mt-8 leading-relaxed text-gray-500 md:mb-12 xl:text-lg">Can't make it? Join anyway. We will send you the recording.</p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}