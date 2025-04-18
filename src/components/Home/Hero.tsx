import styles from "./hero.module.css";
import { useState, useEffect } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import honeyImg from "/src/assets/honey1.png";
import oliveOilImg from "/src/assets/olive2.png";
import potteryImg from "/src/assets/pottery4.png";

const slides = [
  {
    title: "Deghmous Honey",
    subtitle: "Taste the real quality honey",
    button: "Shop now",
    gradient: "linear-gradient(135deg, #efd3c3 0%, #f6d9a4 100%)",
    image: honeyImg,
  },
  {
    title: "Organic Olive Oil",
    subtitle: "Cold-pressed and full of flavor",
    button: "Explore oils",
    gradient: "linear-gradient(135deg, #efd3c3 0%, #f6d9a4 100%)",
    image: oliveOilImg,
  },
  {
    title: "Pottery Art",
    subtitle: "Handmade traditional pottery",
    button: "Browse collection",
    gradient: "linear-gradient(135deg, #efd3c3 0%, #f6d9a4 100%)",
    image: potteryImg,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={styles.hero}
      style={{ background: slides[current].gradient }}
    >
      <div className={styles.content}>
        <p className={styles.subtitle}>{slides[current].subtitle}</p>
        <h1 className={styles.title}>
          {slides[current].title.split(" ")[0]}
          <br />
          {slides[current].title.split(" ")[1]}
        </h1>
        <button className={styles.cta}>
          {slides[current].button}{" "}
          <span className={styles.arrow}>
            <FaArrowUpRightFromSquare />
          </span>
        </button>
      </div>
      <div className={styles.imageContainer}>
        <img src={slides[current].image} alt={slides[current].title} />
      </div>
    </div>
  );
}
