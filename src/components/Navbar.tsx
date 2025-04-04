import { NavLink } from "react-router";
import styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_items}>
        <form action="">
          {/* TODO: Hide the label */}
          <label htmlFor="search">search</label>
          <input type="text" name="search" id="search" placeholder="search" />
        </form>
        <div className={styles.nav_settings}>
          <ul>
            {/* TODO: These should be NavLinks */}
            <li>
              <a href="">Theme icon</a>
            </li>
            <li>
              <a href="">Favourites icon</a>
            </li>
            <li>
              <a href="">Profile icon</a>
            </li>
          </ul>
        </div>
        {/* TODO: This should be a NavLink, add the badge as well */}
        <div className={styles.nav_cart}>
          <a href="">Cart</a>
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
              <option value="MAD">Dirham</option>
              <option value="EUR">Euros</option>
              <option value="USD">Dollars</option>
            </select>
          </form>
        </div>
      </div>
    </nav>
  );
}
