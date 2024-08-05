import About from "@/components/about-section";
import Categories from "@/components/categories-section";
import Featured from "@/components/featured";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
    return (
        <>
            <Hero />
            <Categories />
            <Featured />
            <About />
            <Footer />
        </>
    );
}
