import styles from "./newArrivalsSection.module.css";
import ProductCard from "./productCard";
import { products } from "../../data/dataset";
import grapefruitImg from "../../assets/grapefruit.png";
import { Link } from "react-router";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function NewArrivalsSection() {
  const featuredProductId = "fruit1"; // ID of Organic Grapefruits

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>New arrivals</h2>
      <div className={styles.container}>
        <Link to={`/product/${featuredProductId}`} className={styles.cardLink}>
          <div className={styles.featureCard}>
            <img
              src={grapefruitImg}
              alt="Grapefruit"
              className={styles.featureImage}
            />
            <h3>Grape Fruit</h3>
            <p>Vit C Anywhere</p>
            <button className={styles.cta}>
              From 5 MAD <FaArrowUpRightFromSquare />
            </button>
          </div>
        </Link>
        <div className={styles.productList}>
          {products.slice(0, 6).map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className={styles.cardLink}
            >
              <ProductCard {...product} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewArrivalsSection;
