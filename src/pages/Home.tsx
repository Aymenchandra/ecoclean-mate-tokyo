import Carousel from "../sections/carousel";
import CTA from "../sections/cta";
import HeroSection from "../sections/hero";
import HowItWorks from "../sections/howItWorks";
import LogoGrid from "../sections/logoGrid";
import Stats from "../sections/stats";
import Team from "../sections/Team";
import WhyUs from "../sections/whyUs";

export default function Home() {
    return (
        <>
            <HeroSection />
            <LogoGrid />
            <HowItWorks />
            <Stats />
            <WhyUs />
            <Team />
            <Carousel />
            <CTA />
        </>
    );
}