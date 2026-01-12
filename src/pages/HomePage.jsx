import { useState } from "react";

import { LoadingScreen } from "../components/home/LoadingScreen";
import { Navbar } from "../components/home/Navbar";
import { MobileMenu } from "../components/home/MobileMenu";
import { Home } from "../components/home/sections/Home";
import { Background } from "../components/home/Background";
import { About } from "../components/home/sections/About";
import { Projects } from "../components/home/sections/Projects";
import { Footer } from "../components/home/sections/Footer.JSX";

export const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
  <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

    <Background style=""/>
      
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Home />
    <About />
    <Projects />
    <Footer />

  </>
  )
}
