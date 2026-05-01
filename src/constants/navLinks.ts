// interface NavLink {
//     label: string;
//     path: string;
// }

// const navLinks: NavLink[] = [
//     { label: "Home", path: "/" },
//     { label: "Pricing", path: "/pricing" },
//     { label: "Contact", path: "/contact" },
// ];

// export default navLinks;

interface NavLink {
    label: string;
    path: string;
}

const navLinks: NavLink[] = [
    { label: "ホーム", path: "/" },
    { label: "料金", path: "/pricing" },
    { label: "お問い合わせ", path: "/contact" },
];

export default navLinks;