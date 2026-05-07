interface NavLink {
    label: string;
    path: string;
}

const navLinks: NavLink[] = [
    { label: "home", path: "/" },
    { label: "pricing", path: "/pricing" },
    { label: "contact", path: "/contact" },
];

export default navLinks;