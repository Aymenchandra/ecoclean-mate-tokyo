import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <main className="flex-1 flex flex-col overflow-hidden bg-white relative">
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    );
}