import styles from "./itemCard.module.css";

export default function ItemCard() {
  return (
    <div className={styles.itemCard}>
      <div>
        <p>discount tag</p>
        <img src="" alt="Product-name" />
      </div>
      <div>
        <div>Rating</div>
        <div>Number of reviews</div>
      </div>
      <div>
        <p>Product Name</p>
      </div>
      <div>
        <div>
          <p>New price</p>
          <p>Old price</p>
        </div>
        <div>Cart icon</div>
      </div>
    </div>
  );
}
