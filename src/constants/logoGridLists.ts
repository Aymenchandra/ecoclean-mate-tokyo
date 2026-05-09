import logo1 from '/assets/logoGrid/1.webp';
import logo2 from '/assets/logoGrid/2.webp';
import logo3 from '/assets/logoGrid/3.webp';
import logo4 from '/assets/logoGrid/4.webp';
import logo5 from '/assets/logoGrid/5.webp';
import logo6 from '/assets/logoGrid/6.webp';

interface LogoGridItem {
    label: string;
    src: string;
}

const LogoGridLists: LogoGridItem[] = [
    { label: "Logo1", src: logo1 },
    { label: "Logo2", src: logo2 },
    { label: "Logo3", src: logo3 },
    { label: "Logo4", src: logo4 },
    { label: "Logo5", src: logo5 },
    { label: "Logo6", src: logo6 },
];

export default LogoGridLists;