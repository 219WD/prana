import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapScrollCards = (selector) => {
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                selector,
                { y: "20px", opacity: 0.5 }, // Estado inicial
                {
                    y: "0", // Se mueve a su posición original
                    opacity: 1,
                    duration: 2.5, // Animación más lenta
                    stagger: 1, // Escalonamiento más pronunciado (cada 0.5s una imagen)
                    ease: "power4.inOut", // Entrada suave
                    scrollTrigger: {
                        trigger: selector,
                        start: "top 95%", // Inicia cuando están en 80% de la pantalla
                        end: "top 5%",
                        scrub: 0.5, // Se mueve suavemente con el scroll
                    },
                }
            );
        });

        return () => ctx.revert(); // Limpia la animación al desmontar
    }, [selector]);
};

export default useGsapScrollCards;