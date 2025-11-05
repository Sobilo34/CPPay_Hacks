import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlockchainBackground from "./components/BlockchainBackground";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import InstallationGuide from "./components/InstallationGuide";

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Blockchain Background - Full Screen */}
      <BlockchainBackground />

      {/* Content Overlay - Completely Transparent */}
      <div className="relative z-20">
        <Navbar />
        <main className="relative z-20">
          <section id="home" className="relative z-20 bg-transparent">
            <HeroSection />
          </section>
          <section id="features" className="relative z-20 bg-transparent">
            <FeaturesSection />
          </section>
          <section id="about" className="relative z-20 bg-transparent">
            <AboutSection />
          </section>
          <section id="installation" className="relative z-20 bg-transparent">
            <InstallationGuide />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
