import Categories from "./Categories";
import styles from "./header.module.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";
import logo from "/src/assets/logo2.png";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.header_children}>
        <h1
          className={styles.logo}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img src={logo} alt="Logo" className={styles.logoImg} />
        </h1>
        <Navbar />
      </div>
      <Categories />
    </header>
  );
}
