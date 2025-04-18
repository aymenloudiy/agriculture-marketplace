import React, { useState } from "react";
import styles from "./productPage.module.css";
import { Product } from "../../utils/types";
import {
  FaCheckCircle,
  FaHeart,
  FaShoppingCart,
  FaSyncAlt,
} from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { useCart } from "../../context/CartContext";

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImage] = useState<string>(product.images[0]);
  const { addToCart } = useCart();
  return (
    <div className={styles.wrapper}>
      <div className={styles.breadcrumb}>Home &gt; Shop &gt; Product page</div>
      <h1>{product.name}</h1>

      <div className={styles.content}>
        {/* Image gallery */}
        <div className={styles.images}>
          {/* <button className={styles.arrow}>&lt;</button> */}
          <img
            src={activeImage}
            alt={product.name}
            className={styles.mainImage}
          />
          {/* <button className={styles.arrow}>&gt;</button> */}

          {/* <div className={styles.thumbnailRow}>
            {product.images.map((img, idx) => (
              <button
                key={idx}
                className={`${styles.thumbnail} ${
                  img === activeImage ? styles.active : ""
                }`}
                onClick={() => setActiveImage(img)}
              >
                <img src={img} alt={`thumbnail-${idx}`} />
              </button>
            ))}
          </div> */}
        </div>

        {/* Info section */}
        <div className={styles.info}>
          <div className={styles.price_avail}>
            <p className={styles.price}>${product.price.toFixed(2)}</p>
            <div className={styles.availability}>
              <FaCheckCircle className={styles.checkIcon} /> Available to order
            </div>
          </div>
          <div className={styles.quantity_add}>
            <div className={styles.quantity}>
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                <FiMinus />
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>
                <FiPlus />
              </button>
            </div>

            <div className={styles.actions}>
              <button
                className={styles.cart}
                onClick={() => {
                  for (let i = 0; i < quantity; i++) addToCart(product);
                }}
              >
                <FaShoppingCart /> Add to cart
              </button>
              <button className={styles.secondary}>
                <FaHeart />
              </button>
              <button className={styles.secondary}>
                <FaSyncAlt />
              </button>
            </div>
          </div>
          <div className={styles.shipping}>
            <div className={styles.shippingHeader}>
              <span>Shipping options</span>
              <button>
                <MdLocationOn /> Find local store
              </button>
            </div>
            <ul>
              <li>
                <strong>Pickup from the store:</strong>
                Today
                <span>Free</span>
              </li>
              <li>
                <strong>Postal pickup:</strong> Tomorrow<span>$25.00</span>
              </li>
              <li>
                <strong>Courier delivery:</strong> 2–3 days
                <span>$35.00</span>
              </li>
            </ul>
          </div>

          <details className={styles.accordion}>
            <summary>Warranty information</summary>
            <p>12-month satisfaction guarantee included.</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
