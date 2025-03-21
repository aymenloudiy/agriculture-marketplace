import { NavLink } from "react-router";
import styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to={"/"}
      >
        Shop
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to={"/about"}
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to={"/cart"}
      >
        Cart
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to={"/login"}
      >
        Sign in
      </NavLink>
    </nav>
  );
}
