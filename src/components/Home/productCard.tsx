import { FaStar, FaRegStar } from "react-icons/fa";
import styles from "./productCard.module.css";

interface ProductCardInterface {
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
}

function ProductCard({
  name,
  price,
  originalPrice,
  rating,
  reviews,
  image,
}: ProductCardInterface) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.details}>
        <div className={styles.stars}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{i < rating ? <FaStar /> : <FaRegStar />}</span>
          ))}
          <span className={styles.reviews}>{reviews}</span>
        </div>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>
          ${price.toFixed(2)}
          {originalPrice && (
            <span className={styles.oldPrice}>${originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
