import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import { ThemeProvider } from "./contexts/ThemeContext";
import Stars from "./components/Stars";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Analytics />
      <SpeedInsights />
      {loading ? (
        <Loader />
      ) : (
        <>
          <CustomCursor />
          <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300 relative overflow-hidden">
            <Stars />
            <div className="max-w-3xl mx-auto px-6 py-12 pb-24 relative z-20">
              <Hero />
              <About />
              <WorkExperience />
              <Skills />
              <Projects />
              <Contact />
            </div>
            <Navigation />
          </div>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
