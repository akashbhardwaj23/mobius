import AboutPage from "./pages/about";
import CTA from "./pages/cta";
import { Footer } from "./pages/footer";
import HeroPage from "./pages/heropage";
import WorkPage from "./pages/work";



export default function HomePage(){
    return (
       <main>
        <HeroPage />
        <WorkPage />
        <AboutPage />
        <CTA />
        <Footer />
       </main>
    )
}