import { FaRegStar, FaShoppingCart, FaStar } from "react-icons/fa";
import styles from "./specialOfferCard.module.css";

interface SpecialOfferCardInterface {
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  stock: number;
  image: string;
}

function SpecialOfferCard({
  name,
  price,
  originalPrice,
  rating,
  reviews,
  stock,
  image,
}: SpecialOfferCardInterface) {
  const stockPercentage = Math.min(100, Math.round((stock / 120) * 100));

  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.rating}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < rating ? <FaStar /> : <FaRegStar />}</span>
        ))}
        <span className={styles.reviews}>({reviews})</span>
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>
        <div>
          {" "}
          ${price.toFixed(2)}{" "}
          {originalPrice && (
            <span className={styles.oldPrice}>${originalPrice.toFixed(2)}</span>
          )}
        </div>
        <button className={styles.cart}>
          <FaShoppingCart />
        </button>
      </div>
      <div className={styles.stockText}>Available: {stock}</div>
      <div className={styles.progressBar}>
        <div
          className={styles.fill}
          style={{ width: `${stockPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SpecialOfferCard;
