import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import ContactPage from "../pages/Contact";
import Calculator from "../pages/Calculator";

const AppRoutes = () => {
    return (
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
    );
};

export default AppRoutes;