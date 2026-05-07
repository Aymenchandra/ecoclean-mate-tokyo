import { useState, useEffect, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import navLinks from "../../constants/navLinks";
import logo from "/assets/logo/eco-clean.png";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../ui/LanguageSwitcher";

const Navbar = memo(function Navbar() {
    const { t } = useTranslation();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navLinks.map((link) => link.path.replace("#", ""));
            const current = sections.find((section) => {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll, { passive: true }); // Add passive for better performance
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on desktop resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setMobileOpen(false);
        };
        window.addEventListener("resize", handleResize, { passive: true });
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Memoize scroll handler for performance
    const handleMobileToggle = useCallback(() => {
        setMobileOpen((o) => !o);
    }, []);

    const handleMobileClose = useCallback(() => {
        setMobileOpen(false);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50 w-full transition-all duration-300">
            <nav
                className={`relative flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300 ${scrolled
                    ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-orange-500/5"
                    : "bg-transparent"
                    }`}
                aria-label="Global navigation"
            >
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2.5 group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                        <img
                            src={logo}
                            alt="Ecoclean Mate ロゴ"
                            className="relative w-10 h-10 rounded-xl transition-transform duration-300 group-hover:scale-110"
                            loading="eager" // Logo should load eagerly
                            width="40"
                            height="40"
                        />
                    </div>
                    <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                        {t("brand.name")}
                    </span>
                </Link>

                {/* Desktop navigation */}
                <div className="hidden lg:flex lg:items-center lg:gap-x-1">
                    {navLinks?.map((link) => {
                        const sectionId = link.path.replace("#", "");
                        const isActive = activeSection === sectionId;

                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative px-4 py-2 text-sm font-medium capitalize transition-all duration-300 rounded-lg ${isActive
                                    ? "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/10"
                                    : "text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-orange-500/5"
                                    }`}
                            >
                                {t(`nav.${link.label}`, { defaultValue: link.label })}
                                {isActive && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
                                )}
                            </Link>
                        );
                    })}

                    {/* Estimate button */}
                    <Link
                        to="/calculator"
                        className="ml-4 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transform hover:-translate-y-0.5"
                    >
                        {t("nav.estimate")}
                    </Link>

                    {/* Divider */}
                    <div className="mx-2 w-px h-6 bg-gray-200 dark:bg-gray-700" />

                    <LanguageSwitcher />
                </div>

                {/* Mobile: theme + language + hamburger */}
                <div className="flex items-center gap-2 lg:hidden">
                    <LanguageSwitcher />
                    <button
                        type="button"
                        onClick={handleMobileToggle}
                        className={`inline-flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${mobileOpen
                            ? "bg-orange-50 dark:bg-orange-500/10 text-orange-600"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            }`}
                        aria-expanded={mobileOpen}
                    >
                        <span className="sr-only">
                            {mobileOpen ? t("aria.closeMenu") : t("aria.openMenu")}
                        </span>
                        <div className="relative w-5 h-5">
                            <span
                                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${mobileOpen
                                    ? "opacity-0 rotate-90 scale-0"
                                    : "opacity-100 rotate-0 scale-100"
                                    }`}
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </span>
                            <span
                                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${mobileOpen
                                    ? "opacity-100 rotate-0 scale-100"
                                    : "opacity-0 -rotate-90 scale-0"
                                    }`}
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </span>
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile overlay */}
            <div
                className={`fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={handleMobileClose}
            />

            {/* Mobile menu */}
            <div
                className={`lg:hidden absolute top-full left-0 right-0 mx-4 overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 p-2 mt-2">
                    <div className="flex flex-col p-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="flex items-center gap-3 px-4 py-3 text-sm font-medium capitalize text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-500/5 rounded-xl transition-all duration-300"
                                onClick={handleMobileClose}
                            >
                                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                                {t(`nav.${link.label}`, { defaultValue: link.label })}
                            </Link>
                        ))}

                        <div className="border-t border-gray-100 dark:border-gray-800 my-2" />

                        <Link
                            to="/calculator"
                            className="flex items-center justify-center gap-2 mx-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                            onClick={handleMobileClose}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            {t("nav.estimate")}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
});

export default Navbar;