import styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <div>Logo</div>
        <ul>
          <li>Shop</li>
          <li>About</li>
          <li>Cart</li>
          <li>Sign in</li>
        </ul>
      </div>
    </nav>
  );
}
