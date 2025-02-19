import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./css/Hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const buttonRef = useRef(null);
  const buttonRefBottom = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ ease: "power2.out" });

    tl.fromTo(
      heroRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1 }
    )
    .fromTo(
      textRef.current,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.8 },
      "-=0.3"
    )
    .fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.3"
    )
    .fromTo(
      buttonRefBottom.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 120, duration: 0.8 },
      "-=0.3"
    )
  }, []);
  return (
    <div className="container hero" ref={heroRef}>
      <div className="card_wrapper">
        <div className="card-image-with-svg-mask">
          <p className="text" ref={textRef}>
            En Prana, nos sumergimos en la
            esencia misma de la existencia, fusionando la música, la
            espiritualidad y la vitalidad en una fiesta que prioriza
            un servicio de alta calidad para un público exigente.
            Creamos Prana para una audiencia que quiere
            experimentar cosas nuevas y creativas conectando con lo
            más profundo de su espíritu.
          </p>
        </div>
      </div>
      <div className="button-hero top-center" ref={buttonRef}>
        <span className="text">
          <svg id="Capa_1" className="logo-hero" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464.53 155.93" fill="#fff" width={100}>
            <path className="cls-1" d="M103.53,249.5c0,40.11-6.38,49.78-41.39,49.78a224,224,0,0,1-25-1.09v33.55A2.07,2.07,0,0,1,35,334.1H26.4A2.12,2.12,0,0,1,24,331.73V203.91c0-1.82.73-2.37,2.55-2.73a235.85,235.85,0,0,1,36.84-2.37c33.73,0,40.11,10,40.11,50.69h0Zm-66.38-39v75.85c8,0.73,17.14,1.28,25,1.28,25.17,0,28.08-7.48,28.08-38.29s-2.73-38.84-26.81-38.84H37.15Z" transform="translate(-24.03 -178.18)" />
            <path className="cls-1" d="M161.58,200.44c1.46,0.54,2.19,1.1,2.19,2.55v5.29c0,1.64-.91,2.37-2.37,2.19H145.53c-10.75,0-16,1.64-16,10.39v79.58a2,2,0,0,1-2.37,2.37h-8.57a2.12,2.12,0,0,1-2.37-2.37V218.13c0-19.15,18.41-19.33,26.44-19.33,4.37,0,15.86.54,19,1.64h0Z" transform="translate(-24.03 -178.18)" />
            <path className="cls-1" d="M244,227.06v63.82c0,1.46.18,3.47-3.28,4.74-5.65,2.19-22.61,3.65-38.84,3.65-23.89,0-33.37-6-33.37-28.81,0-20.06,10.21-27,30.45-27h31.91v-14.4c0-13.68-9.12-18.6-27-18.6H179.22c-1.82,0-2.37-.54-2.37-2.37V203c0-1.82.54-2.19,2.19-2.55a165.89,165.89,0,0,1,24.8-1.64c25.17,0,40.11,7.11,40.11,28.26h0Zm-45,27.9c-11.85,0-17.32,4-17.32,15.5,0,13.49,6,17.32,23.16,17.32,5.65,0,18.41-.36,26.07-2.37V255H198.92Z" transform="translate(-24.03 -178.18)" />
            <path className="cls-1" d="M338.16,240.37l-0.08,62.43c0,1.64-1.09,2.37-2.73,2.37h-8.2a2,2,0,0,1-2.37-2.37l0.08-62.43c0-28.26-6.93-29.9-25-29.9H271.61v91.15c0,1.64-.73,2.37-2.19,2.37h-8.57a2,2,0,0,1-2.37-2.37v-97.9c0-1.82.73-2.19,2.37-2.37,14.22-2.55,28.26-2.55,36.84-2.55,30.08,0,40.48,3.83,40.48,41.57h0Z" transform="translate(-24.03 -178.18)" />
            <path className="cls-1" d="M425.51,227.06v63.82c0,1.46.18,3.47-3.28,4.74-5.65,2.19-22.61,3.65-38.84,3.65-23.89,0-33.37-6-33.37-28.81,0-20.06,10.21-27,30.45-27h31.91v-14.4c0-13.68-9.12-18.6-27-18.6H360.77c-1.82,0-2.37-.54-2.37-2.37V203c0-1.82.54-2.19,2.19-2.55a165.89,165.89,0,0,1,24.8-1.64c25.17,0,40.11,7.11,40.11,28.26h0Zm-45,27.9c-11.85,0-17.32,4-17.32,15.5,0,13.49,6,17.32,23.16,17.32,5.65,0,18.41-.36,26.07-2.37V255H380.47Z" transform="translate(-24.03 -178.18)" />
            <path className="cls-1" d="M440.38,202.43c0-16.66,7.53-24.25,24.12-24.25s24.06,7.59,24.06,24.25S481,226.74,464.5,226.74,440.38,219.08,440.38,202.43Zm45,0c0-14.49-6.57-21.12-20.93-21.12s-21,6.57-21,21.12,6.57,21.18,21,21.18S485.43,216.91,485.43,202.43Zm-11.61-4.15c0,4.85-1.28,6.77-5,7.4l5.56,8.81c0.19,0.26.06,0.45-.26,0.45h-3.76a0.86,0.86,0,0,1-.89-0.51l-5.36-8.48h-3.57v8.61c0,0.32-.06.39-0.32,0.39h-3.7c-0.26,0-.32-0.06-0.32-0.39V190.88c0-.26.06-0.32,0.32-0.32,2.62-.26,5.56-0.32,8-0.32,7,0,9.38,1.6,9.38,8h0Zm-13.34-4.21v8.61H464c4.09,0,5.43-.58,5.43-4.28s-1.34-4.34-5.43-4.34h-3.51Z" transform="translate(-24.03 -178.18)" />
          </svg>
        </span>
      </div>
      <div className="button-hero bottom-right" ref={buttonRefBottom}>
        <span className="text">Prana no es solo una fiesta, es un viaje trascendental hacia lo más
          profundo de nuestro ser.</span>
      </div>
    </div>
  );
};

export default Hero;