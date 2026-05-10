import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy load pages
const Layout = lazy(() => import("../components/layout/Layout"));
const Home = lazy(() => import("../pages/Home"));
const Pricing = lazy(() => import("../pages/Pricing"));
const ContactPage = lazy(() => import("../pages/Contact"));
const Calculator = lazy(() => import("../pages/Calculator"));

// Loading fallback
const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
    </div>
);

const AppRoutes = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
                {/* Calculator — standalone focused layout, no Navbar/Footer */}
                <Route path="/calculator" element={<Calculator />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;