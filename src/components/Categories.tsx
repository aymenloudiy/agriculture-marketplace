import styles from "./categories.module.css";

export default function categories() {
  return (
    <div className={styles.categories}>
      <ul>
        <li>Olive Oil</li>
        <li>Medical Honey</li>
        <li>Fresh Produce</li>
        <li>Pottery</li>
        <li>Artisinal Goods</li>
      </ul>
    </div>
  );
}
