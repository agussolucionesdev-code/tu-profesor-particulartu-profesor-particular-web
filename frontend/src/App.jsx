import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TrustBar from './components/TrustBar.jsx';
import LetterSection from './components/LetterSection.jsx';
import SituationSelector from './components/SituationSelector.jsx';
import Subjects from './components/Subjects.jsx';
import Levels from './components/Levels.jsx';
import Method from './components/Method.jsx';
import About from './components/About.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import Modalities from './components/Modalities.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import CTASection from './components/CTASection.jsx';
import ContactStrip from './components/ContactStrip.jsx';
import Footer from './components/Footer.jsx';
import FloatingActions from './components/FloatingActions.jsx';
import { useLandingInteractions } from './hooks/useLandingInteractions.js';
import './styles/globals.css';
import './styles/animations.css';

export default function App() {
  useLandingInteractions();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Saltar al contenido principal
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <LetterSection />
        <SituationSelector />
        <Subjects />
        <Levels />
        <Method />
        <About />
        <PhotoGallery />
        <Modalities />
        <Testimonials />
        <FAQ />
        <CTASection />
        <ContactStrip />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

