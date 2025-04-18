import { useParams, useNavigate } from "react-router"; // note: 'react-router-dom' here
import { products } from "../data/dataset";
import styles from "./categoryPage.module.css";
import { useCart } from "../context/CartContext";

export default function CategoryPage() {
  const { name } = useParams<{ name: string }>();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const filtered = products.filter((product) => product.category === name);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>
        {name ? name.replace("-", " ").toUpperCase() : "CATEGORY"}
      </h2>

      <div className={styles.grid}>
        {filtered.length === 0 ? (
          <p>No products found in this category.</p>
        ) : (
          filtered.map((product) => (
            <div
              className={styles.card}
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={product.image}
                alt={product.name}
                className={styles.cardImage}
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <strong>${product.price.toFixed(2)}</strong>
              <button
                className={styles.addBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
