import { FC, useEffect, useRef, useState } from "react";
import cx from "clsx";

// import { TextImageHolder } from "../../shared/ImageWithTextHolder";
import styles from "./styles.module.scss";

const sliderContent = [
  {
    src: "/wwwdance/assets/Ballet.png",
    alt: "danceStyle",
    title: "Ballet",
    text: "Classical ballet is the most traditional and structured form of ballet, characterized by its graceful movements, precise techniques and it requires immense dedication, strength, and flexibility.",
    href: "",
  },
  {
    src: "/wwwdance/assets/HipHop.png",
    alt: "danceStyle",
    title: "Hip-Hop",
    href: "",
  },
  {
    src: "/wwwdance/assets/JazzDance.png",
    alt: "danceStyle",
    title: "Jazz Dance",
    href: "",
  },
];

const Slider: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const slidesPerView = 3; // Number of images visible at once (for desktop)

  // Adjust slide width when the window is resized
  const updateSlideWidth = () => {
    if (slidesRef.current) {
      const slideWidth =
        slidesRef.current?.children[0]?.getBoundingClientRect().width || 0;
      setSlideWidth(slideWidth);
    }
  };

  // Hook to update slide width on mount and when the window resizes
  useEffect(() => {
    updateSlideWidth(); // Initial slide width calculation
    window.addEventListener("resize", updateSlideWidth); // Recalculate on resize
    return () => window.removeEventListener("resize", updateSlideWidth); // Clean up the event listener
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + slidesPerView) % sliderContent.length; // Move by `slidesPerView` (3 images on desktop)
      if (slidesRef.current) {
        slidesRef.current.scrollTo({
          left: nextIndex * slideWidth,
          behavior: "smooth",
        });
      }
      return nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexLoop =
        prevIndex < slidesPerView
          ? sliderContent.length - slidesPerView
          : prevIndex - slidesPerView; // Go backward by `slidesPerView`
      if (slidesRef.current) {
        slidesRef.current.scrollTo({
          left: prevIndexLoop * slideWidth,
          behavior: "smooth",
        });
      }
      return prevIndexLoop;
    });
  };

  // Effect to scroll to the current index
  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.scrollTo({
        left: currentIndex * slideWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex, slideWidth]);

  return (
    <div className={styles.slideHolder}>
      <button
        onClick={prevSlide}
        className={cx(styles.arrowButton, styles.left)}
      >
        <img src="/wwwdance/assets/ArrowLeftWhite.png" alt="arrow left" />
      </button>

      <div className={styles.categoryHolder}>
        <h1> {sliderContent[0].title}</h1>
        <p> {sliderContent[0].text} </p>
      </div>
      <div className={styles.categoryHolder}>
        <h1> {sliderContent[0].title}</h1>
        <p> {sliderContent[0].text} </p>
      </div>
      <div className={styles.categoryHolder}>
        <h1> {sliderContent[0].title}</h1>
        <p> {sliderContent[0].text} </p>
      </div>

      <button
        onClick={nextSlide}
        className={cx(styles.arrowButton, styles.right)}
      >
        <img src="/wwwdance/assets/ArrowRightWhite.png" alt="arrow right" />
      </button>
    </div>
  );
};

export default Slider;
