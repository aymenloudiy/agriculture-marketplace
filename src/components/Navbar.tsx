import { NavLink } from "react-router";
import styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink to={"/"}>Shop</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/cart"}>Cart</NavLink>
      <NavLink to={"/login"}>Sign in</NavLink>
    </nav>
  );
}
