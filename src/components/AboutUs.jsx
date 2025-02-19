import React, { useEffect, useRef } from 'react'
import Shape from '../assets/Shape.svg';
import './css/AboutUs.css';
import aboutfoto1 from '../assets/one.jpg';
import aboutfoto2 from '../assets/two.jpg';
import aboutfoto3 from '../assets/three.jpg';
import aboutfoto4 from '../assets/four.jpg';
import useGsapScrollAnimation from '../hooks/useGsapScrollAnimation';
import gsap from "gsap";

const AboutUs = () => {
    const images = [aboutfoto1, aboutfoto2, aboutfoto4, aboutfoto3];
    const fotosRef = useRef(null);
    const textRef = useRef(null);

    // Aplicar animación con GSAP
    useGsapScrollAnimation(".foto");

    useEffect(() => {
        gsap.fromTo(
            textRef.current.querySelectorAll("strong"),
            { fontWeight: 400 },
            {
                fontWeight: 700,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div className='container about'>
            <img src={Shape} alt="" className="shape" />
            <div className='about-limitter'>
                <div className="fotos" ref={fotosRef}>
                    {images.map((image, index) => (
                        <div className="foto" key={index}>
                            <img src={image} alt={`foto${index + 1}`} />
                        </div>
                    ))}
                </div>
                <p className='about-text' ref={textRef}>
                    En el fluir de la vida, en la <strong>danza de la existencia</strong>,
                    Se encuentra un hálito, un susurro de esencia.
                    <strong>Prana</strong>, <strong>la fuerza vital</strong> que en el cosmos respira,
                    Es el aliento del universo, la melodía que inspira.
                    <br /><br />
                    Es el soplo que anima <strong>cada átomo y célula</strong>,
                    El vínculo sutil que enlaza lo finito con lo etéreo.
                    Como un río invisible <strong>que fluye en cada ser viviente</strong>,
                    Prana es <strong>el eco del universo</strong> en movimiento persistente.
                    <br /><br />
                    En cada <strong>respiración</strong>, <strong>en cada palpitar</strong> del corazón,
                    Se manifiesta su presencia, su incansable canción.
                    Es la energía que nutre, <strong>que revitaliza y conecta</strong>,
                    Un lazo invisible <strong>entre el cosmos y el alma</strong> inquieta.
                    <br /><br />
                    <strong>Prana</strong>, la esencia misma de la vida en su fluir,
                    Una danza eterna, un misterio por descubrir.
                    En cada inhalación, en cada exhalación sentida,
                    Se revela su magia, su presencia compartida.
                </p>
            </div>
        </div >
    )
}

export default AboutUs