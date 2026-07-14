import { useEffect, useMemo, useState } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { AboutMe } from "./components/AboutMe/AboutMe";
import { Experiences } from "./components/Experiences/Experiences";
import { Projects } from "./components/Projects/Projects";
import { Feedback } from "./components/Feedback/Feedback";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { ReturnToTop } from "./components/ReturnToTop/ReturnToTop";
import { useTheme } from "./contexts/useTheme";
import { getParticlesOptions } from "./utils/particlesConfig";

import "./App.css";

export const App = () => {
  const { isDark } = useTheme();
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(() => getParticlesOptions(isDark), [isDark]);

  return (
    <div className="app">
      {init && <Particles id="tsparticles" className="app__particles" options={particlesOptions} />}
      <Header />
      <Hero />
      <AboutMe />
      <Experiences />
      <Projects />
      <Feedback />
      <ContactForm />
      <Footer />
      <ReturnToTop />
    </div>
  );
}

