import { NavLink } from "react-router";
import styles from "./navbar.module.css";
import { FaHeart, FaMoon, FaShoppingCart, FaUser } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_items}>
        <form action="">
          {/* TODO: Hide the label */}

          <input
            className={styles.search_input}
            type="text"
            name="search"
            id="search"
            placeholder="search"
          />
        </form>
        <div className={styles.nav_controls}>
          <div className={styles.nav_settings}>
            <ul>
              {/* TODO: These should be NavLinks */}
              <li>
                <a href="">
                  {" "}
                  <FaMoon />
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <FaHeart />
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <FaUser />
                </a>
              </li>
            </ul>
          </div>
          {/* TODO: This should be a NavLink, add the badge as well */}
          <NavLink to="/cart" className={styles.cartIcon}>
            <FaShoppingCart />
            {cart.length > 0 && (
              <span className={styles.badge}>{cart.length}</span>
            )}
          </NavLink>
        </div>
      </div>
      <div className={styles.nav_items}>
        <div className={styles.nav_links}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={"/"}
          >
            Best Sellers
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={"/"}
          >
            Today's Deals
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={"/"}
          >
            New Arrivals
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={"/"}
          >
            Gift Cards{" "}
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={"/"}
          >
            Help Center
          </NavLink>
        </div>
        <div className={styles.nav_selects}>
          <form action="">
            <select name="language" id="language" defaultValue="English">
              <option value="english">English</option>
              <option value="french">Francais</option>
              <option value="arabic">Arabe</option>
              <option value="amazigh">Amazigh</option>
            </select>
          </form>
          <form action="">
            <select name="currency" id="currency" defaultValue="MAD">
              <option value="MAD">MAD (د.م.)</option>
              <option value="EUR">Euros</option>
              <option value="USD">Dollars</option>
            </select>
          </form>
        </div>
      </div>
    </nav>
  );
}
