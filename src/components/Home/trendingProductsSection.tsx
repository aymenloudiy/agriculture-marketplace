import styles from "./trendingProductsSection.module.css";
import TrendingProductCard from "./trendingProductsCard";
import { products } from "../../data/dataset";
import { Link } from "react-router";

function TrendingProductsSection() {
  const trendingProducts = products.filter((p) => p.rating >= 4.5).slice(0, 8);

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Trending products</h2>
        <a href="#">View all →</a>
      </div>
      <div className={styles.grid}>
        {trendingProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className={styles.cardLink}
          >
            <TrendingProductCard
              name={product.name}
              price={product.price}
              originalPrice={product.price < 20 ? product.price + 4 : undefined}
              rating={product.rating}
              reviews={product.reviews}
              badge={product.rating >= 4.8 ? "New" : undefined}
              image={product.image}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default TrendingProductsSection;
