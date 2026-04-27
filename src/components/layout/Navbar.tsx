import { useState, useEffect } from "react";
import navLinks from "../../constants/navLinks";
import logo from '../../assets/logo/eco-clean.png';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    // Handle scroll for navbar background and active section
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Track active section
            const sections = navLinks.map(link => link.path.replace("#", ""));
            const current = sections.find(section => {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setMobileOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50 w-full transition-all duration-300">
            <nav
                className={`relative flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300 ${scrolled
                        ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-orange-500/5"
                        : "bg-transparent"
                    }`}
                aria-label="Global"
            >
                {/* Logo */}
                <a
                    href="/"
                    className="flex items-center gap-2.5 group"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                        <img
                            src={logo}
                            alt="Ecoclean Mate Logo"
                            className="relative w-10 h-10 rounded-xl transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                        Ecoclean Mate
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex lg:items-center lg:gap-x-1">
                    {navLinks?.map((link) => {
                        const sectionId = link.path.replace("#", "");
                        const isActive = activeSection === sectionId;

                        return (
                            <a
                                key={link.path}
                                href={link.path}
                                className={`relative px-4 py-2 text-sm font-medium capitalize transition-all duration-300 rounded-lg ${isActive
                                        ? "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/10"
                                        : "text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-orange-500/5"
                                    }`}
                            >
                                {link.label}
                                {isActive && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></span>
                                )}
                            </a>
                        );
                    })}

                    {/* CTA Button */}
                    <a
                        href="#contact"
                        className="ml-4 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transform hover:-translate-y-0.5"
                    >
                        Get a Quote
                    </a>

                    {/* Separator */}
                    <div className="mx-2 w-px h-6 bg-gray-200 dark:bg-gray-700"></div>

                    <ThemeToggle />
                </div>

                {/* Mobile: theme toggle + CTA + hamburger */}
                <div className="flex items-center gap-3 lg:hidden">
                    <ThemeToggle />
                    <button
                        type="button"
                        onClick={() => setMobileOpen((o) => !o)}
                        className={`inline-flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${mobileOpen
                                ? "bg-orange-50 dark:bg-orange-500/10 text-orange-600"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            }`}
                        aria-expanded={mobileOpen}
                    >
                        <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
                        <div className="relative w-5 h-5">
                            <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${mobileOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                                }`}>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </span>
                            <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${mobileOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                                }`}>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </span>
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMobileOpen(false)}
            ></div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-full left-0 right-0 mx-4 overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 p-2 mt-2">
                    <div className="flex flex-col p-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.path}
                                href={link.path}
                                className="flex items-center gap-3 px-4 py-3 text-sm font-medium capitalize text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-500/5 rounded-xl transition-all duration-300"
                                onClick={() => setMobileOpen(false)}
                            >
                                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                                {link.label}
                            </a>
                        ))}
                        <div className="border-t border-gray-100 dark:border-gray-800 my-2"></div>
                        <a
                            href="#contact"
                            className="flex items-center justify-center gap-2 mx-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                            onClick={() => setMobileOpen(false)}
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Get a Quote
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const isDark = document.documentElement.classList.contains("dark");
        setDark(isDark);
    }, []);

    const toggleTheme = () => {
        const newDark = !dark;
        setDark(newDark);
        document.documentElement.classList.toggle("dark", newDark);
        localStorage.setItem("theme", newDark ? "dark" : "light");
    };

    return (
        <button
            aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
            type="button"
            onClick={toggleTheme}
            className="relative flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-800/50 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-300 group"
        >
            {/* Sun */}
            <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`absolute w-4 h-4 text-orange-500 transition-all duration-500 ${dark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                    } group-hover:rotate-180`}
            >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
            {/* Moon */}
            <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`absolute w-4 h-4 text-orange-400 transition-all duration-500 ${dark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                    } group-hover:rotate-[360deg]`}
            >
                <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clipRule="evenodd"
                />
            </svg>
        </button>
    );
}