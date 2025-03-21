import styles from "./categories.module.css";

export default function categories() {
  return (
    <div className={styles.categories}>
      <ul>
        <li>Honey</li>
        <li>Oil</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
      </ul>
    </div>
  );
}
