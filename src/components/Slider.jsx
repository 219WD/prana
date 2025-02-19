import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import "./css/Slider.css";

import img1 from "../assets/00001.jpg";
import img2 from "../assets/00002.jpg";
import img3 from "../assets/00003.jpg";
import img4 from "../assets/00004.jpg";
import img5 from "../assets/00005.jpg";

const Slider = () => {
  const sliderImagesRef = useRef(null);
  const counterRef = useRef(null);
  const titlesRef = useRef(null);
  const indicatorsRef = useRef(null);
  const prevSlidesRef = useRef([]);
  const slidePreviewRef = useRef(null);

  const images = [img1, img2, img3, img4, img5];

  const [currentImg, setCurrentImg] = useState(1);
  const totalSlides = images.length;
  let indicatorRotation = 0;

  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "hop",
      "M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1"
    );

    updateCounterAndTitlePosition();
    updateActiveSlidePreview();
  }, [currentImg]);

  const updateCounterAndTitlePosition = () => {
    const counterY = -20 * (currentImg - 1);
    const titleY = -60 * (currentImg - 1);

    gsap.to(counterRef.current, {
      y: counterY,
      duration: 1,
      ease: "hop",
    });

    gsap.to(titlesRef.current, {
      y: titleY,
      duration: 1,
      ease: "hop",
    });
  };

  const updateActiveSlidePreview = () => {
    prevSlidesRef.current.forEach((prev) => prev.classList.remove("active"));
    if (prevSlidesRef.current[currentImg - 1]) {
      prevSlidesRef.current[currentImg - 1].classList.add("active");
    }
  };

  const animateSlide = (direction, newIndex) => {
    const sliderImages = sliderImagesRef.current;
    if (!sliderImages) return;

    const slideImg = document.createElement("div");
    slideImg.classList.add("img");

    const slideImgElem = document.createElement("img");
    slideImgElem.src = images[newIndex - 1]; // Usar la nueva imagen correcta
    gsap.set(slideImgElem, { x: direction === "left" ? -500 : 500 });

    slideImg.appendChild(slideImgElem);
    sliderImages.appendChild(slideImg);

    gsap.to(sliderImages.firstChild.querySelector("img"), {
      x: direction === "left" ? 500 : -500,
      duration: 1.5,
      ease: "hop",
    });

    gsap.fromTo(
      slideImg,
      {
        clipPath:
          direction === "left"
            ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
            : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        ease: "hop",
      }
    );

    gsap.to(slideImgElem, {
      x: 0,
      duration: 1.5,
      ease: "hop",
      onComplete: () => {
        setCurrentImg(newIndex); // Actualizar el índice **después** de la animación
        cleanupSlides();
      },
    });

    indicatorRotation += direction === "left" ? -90 : 90;
    gsap.to(indicatorsRef.current, {
      rotate: indicatorRotation,
      duration: 1,
      ease: "hop",
    });
  };

  const handleClick = (event) => {
    const sliderWidth = event.currentTarget.clientWidth;
    const clickPosition = event.clientX;

    if (slidePreviewRef.current.contains(event.target)) {
      const clickedIndex = prevSlidesRef.current.findIndex(
        (prev) => prev === event.target.closest(".preview")
      );

      if (clickedIndex !== -1 && clickedIndex + 1 !== currentImg) {
        animateSlide(clickedIndex + 1 < currentImg ? "left" : "right", clickedIndex + 1);
      }
      return;
    }

    if (clickPosition < sliderWidth / 2 && currentImg > 1) {
      animateSlide("left", currentImg - 1);
    } else if (clickPosition > sliderWidth / 2 && currentImg < totalSlides) {
      animateSlide("right", currentImg + 1);
    }
  };

  const cleanupSlides = () => {
    const imgElements = sliderImagesRef.current.querySelectorAll(".img");
    if (imgElements.length > 1) {
      imgElements[0].remove();
    }
  };

  return (
    <div className="slider" onClick={handleClick}>
      <div className="slider-images" ref={sliderImagesRef}>
        <div className="img">
          <img src={images[currentImg - 1]} alt="" />
        </div>
      </div>

      <div className="slider-preview" ref={slidePreviewRef}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`preview ${currentImg === index + 1 ? "active" : ""}`}
            ref={(el) => (prevSlidesRef.current[index] = el)}
          >
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
