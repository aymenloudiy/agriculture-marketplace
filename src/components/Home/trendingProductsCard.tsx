import { FaRegStar, FaShoppingCart, FaStar } from "react-icons/fa";
import styles from "./trendingProductsCard.module.css";

interface TrendingProductCardInterface {
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  image: string;
}
function TrendingProductCard({
  name,
  price,
  originalPrice,
  rating,
  reviews,
  badge,
  image,
}: TrendingProductCardInterface) {
  return (
    <div className={styles.card}>
      {badge && (
        <div className={badge === "New" ? styles.badgeNew : styles.badgeSale}>
          {badge}
        </div>
      )}
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.details}>
        <div className={styles.rating}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{i < rating ? <FaStar /> : <FaRegStar />}</span>
          ))}
          <span className={styles.reviews}>({reviews})</span>
        </div>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>
          <div>
            ${price.toFixed(2)}{" "}
            {originalPrice && (
              <span className={styles.oldPrice}>
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button className={styles.cart}>
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrendingProductCard;
