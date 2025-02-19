import React, { useEffect } from 'react'
import Hero from '../components/Hero.jsx'
import Cards from '../components/Cards.jsx'
import Marquee from '../components/Marquee.jsx'
import AboutUs from '../components/AboutUs.jsx'
import Videos from '../components/Videos.jsx'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Slider from '../components/Slider.jsx'
import Cta from '../components/Cta.jsx'
import MarqueeTwo from '../components/MarqueeTwo.jsx'
import SeccionContacto from '../components/SeccionContacto.jsx'

const HomeScreen = () => {
  useEffect(() => {
    const lenis = new Lenis();

    // Sincronizar Lenis con ScrollTrigger de GSAP
    lenis.on('scroll', ScrollTrigger.update);

    // Agregar el raf de Lenis al ticker de GSAP
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Asegura que Lenis se ejecute con GSAP
    });

    gsap.ticker.lagSmoothing(0); // Desactivar la suavización del lag

    // Limpiar al desmontar el componente
    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy(); // Destruir la instancia de Lenis
    };
  }, []);
  return (
    <div className='container'>
      <Hero />
      <Marquee />
      <AboutUs />
      <Cards />
      <Videos />
      <Slider />
      <MarqueeTwo />
      <Cta />
      <SeccionContacto />
    </div>
  )
}

export default HomeScreen