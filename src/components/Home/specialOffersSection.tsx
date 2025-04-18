import styles from "./specialOffersSection.module.css";
import SpecialOfferCard from "./specialOfferCard";
import { products } from "../../data/dataset";
import { Link } from "react-router";

function SpecialOffersSection() {
  const offers = products
    .filter((p) => p.stock < 50 || p.price < 10)
    .slice(0, 6);

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Special offers for you</h2>
        <div className={styles.timer}>
          <span>12d</span>
          <span>10h</span>
          <span>12m</span>
        </div>
        <a href="#" className={styles.viewAll}>
          View all →
        </a>
      </div>
      <div className={styles.carousel}>
        {offers.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            className={styles.cardLink}
          >
            <SpecialOfferCard {...item} image={item.image} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default SpecialOffersSection;
