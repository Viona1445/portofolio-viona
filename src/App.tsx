import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BrandIdentity from './components/BrandIdentity';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-navy-950 min-h-screen text-slate-100 selection:bg-premium-pink/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <BrandIdentity />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
