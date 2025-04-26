import AboutPage from "./pages/about";
import CTA from "./pages/cta";
import HeroPage from "./pages/heropage";
import WorkPage from "./pages/work";



export default function HomePage(){
    return (
       <main className=" ">
        <HeroPage />
        <WorkPage />
        <AboutPage />
        <CTA />
       </main>
    )
}