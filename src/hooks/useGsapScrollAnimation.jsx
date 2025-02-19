import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapScrollAnimation = (selector) => {
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                selector,
                { x: "-100px", opacity: 0 }, // Estado inicial
                {
                    x: "0", // Se mueve a su posición original
                    opacity: 1,
                    duration: 2.5, // Animación más lenta
                    stagger: 1, // Escalonamiento más pronunciado (cada 0.5s una imagen)
                    ease: "power4.inOut", // Entrada suave
                    scrollTrigger: {
                        trigger: selector,
                        start: "top 80%", // Inicia cuando están en 80% de la pantalla
                        end: "top 20%",
                        scrub: 0.5, // Se mueve suavemente con el scroll
                    },
                }
            );
        });

        return () => ctx.revert(); // Limpia la animación al desmontar
    }, [selector]);
};

export default useGsapScrollAnimation;
