import HeroBanner from "@/components/shared/HeroBanner.tsx";
import AboutSection from "@/components/shared/AboutSection.tsx";
import CompanyLogos from "@/components/shared/CompanyLogos.tsx";
import Gallery from "@/components/shared/Gallery.tsx";
import BlogSection from "@/components/shared/BlogSection.tsx";

const App = () => {
  return (
    <div className="min-h-screen">
        <HeroBanner/>
        <AboutSection/>
        <CompanyLogos/>
        <Gallery/>
        <BlogSection/>
    </div>
  );
};

export default App;
