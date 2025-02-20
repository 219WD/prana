import { useEffect } from 'react';
import { gsap } from 'gsap';

const useGsapPreload = () => {
  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power2.inOut', duration: 1 } });

    // Step 1: Aparece con opacity 0 -> 1
    timeline.fromTo('.step-1', { opacity: 0 }, { opacity: 1, duration: 1.5 });

    // Rotación del SVG 180° -> pausa -> 180° de nuevo
    timeline.to('.step-1 svg', { rotation: 180, duration: 0.8 });
    timeline.to('.step-1 svg', { rotation: 0, duration: 0.8, delay: 0.1 });

    // Escalar SVG para cubrir la pantalla y cambiar fondo a negro
    timeline.to('.step-1 svg', { scale: 500, duration: 1.5 });
    timeline.to('.step-1', { backgroundColor: '#000', duration: 0.5 }, '<');

    // Mostrar step-2 con la misma animación
    timeline.fromTo('.step-2', { opacity: 0 }, { opacity: 1, duration: 1.5 });
    timeline.to('.step-2 svg', { rotation: 180, duration: 0.8 });
    timeline.to('.step-2 svg', { rotation: 0, duration: 0.8, delay: 0.3 });
    timeline.to('.step-2 svg', { scale: 500, duration: 1.5 });
    timeline.to('.step-2', { backgroundColor: '#000', duration: 0.5 }, '<');

    // Redirección al finalizar la animación
    timeline.to({}, {
      duration: 0.1, onComplete: () => {
        window.location.href = '/homeScreen';
      }
    });
  }, []);

  return null;
};

export default useGsapPreload;