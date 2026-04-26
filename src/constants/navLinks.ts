interface NavLink {
    label: string;
    path: string;
}

const navLinks: NavLink[] = [
    { label: "Home", path: "/" },
    { label: "Pricing", path: "/pricing" },
    { label: "Contact", path: "/contact" },
];

export default navLinks;