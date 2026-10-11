import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useSpring } from 'motion/react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import WhyIcs from './components/WhyIcs.jsx';
import CtaBand from './components/CtaBand.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Icon from './components/Icons.jsx';
import { whatsappLink } from './data.js';

export default function App() {
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  // The floating WhatsApp button waits until the hero (with its own actions) has scrolled away.
  const [showFloat, setShowFloat] = useState(false);
  useMotionValueEvent(scrollY, 'change', (y) => setShowFloat(y > window.innerHeight * 0.9));

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Process />
        <WhyIcs />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <a
        className={`wa-float ${showFloat ? 'is-visible' : ''}`}
        tabIndex={showFloat ? undefined : -1}
        href={whatsappLink('Hello ICS, I would like to discuss back-office work.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ICS on WhatsApp"
      >
        <Icon name="whatsapp" size={28} />
      </a>
    </>
  );
}
