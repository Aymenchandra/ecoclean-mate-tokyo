import logo from '../../assets/logo/eco-clean.png';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        services: [
            { label: "Deep Cleaning", href: "#" },
            { label: "Disinfection", href: "#" },
            { label: "Junk Removal", href: "#" },
            { label: "Organization", href: "#" },
            { label: "Estate Cleanup", href: "#" },
        ],
        company: [
            { label: "About Us", href: "#" },
            { label: "Our Team", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Blog", href: "#" },
        ],
        support: [
            { label: "Contact Us", href: "#" },
            { label: "FAQs", href: "#" },
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
        ],
    };

    return (
        <footer className="relative bg-gray-900 pt-16 sm:pt-20 lg:pt-24 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/5 rounded-full filter blur-3xl"></div>
            </div>

            {/* Top wave divider */}
            <div className="absolute top-0 left-0 right-0">
                <svg className="w-full h-12 text-white fill-current" viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48h1440V0c-196 28-392 20-588 18-196-2-392-8-588 2C68 28 0 48 0 48z" />
                </svg>
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        {/* Logo */}
                        <a href="/" className="inline-flex items-center gap-2 mb-6">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
                                <img src={logo} alt="logo" className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">Ecoclean Mate</span>
                        </a>

                        <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                            Professional cleaning and organization services trusted by thousands.
                            We make your spaces clean, healthy, and clutter-free.
                        </p>

                        {/* Newsletter */}
                        <div className="mb-8">
                            <h3 className="text-white font-semibold mb-4">Subscribe to our newsletter</h3>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all duration-300"
                                />
                                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {[
                                { icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", label: "Facebook" },
                                { icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", label: "Twitter" },
                                { icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z", label: "LinkedIn" },
                                { icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", label: "GitHub" },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    aria-label={social.label}
                                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-orange-500 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Services</h3>
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

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Company</h3>
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

                    {/* Support Links */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Support</h3>
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

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            © {currentYear} Ecoclean Mate. All rights reserved. Made with ❤️ for clean spaces.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors duration-300 text-sm">Privacy Policy</a>
                            <span className="text-gray-600">•</span>
                            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors duration-300 text-sm">Terms of Service</a>
                            <span className="text-gray-600">•</span>
                            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors duration-300 text-sm">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}