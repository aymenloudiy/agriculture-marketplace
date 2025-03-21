import Categories from "./Categories";
import styles from "./header.module.css";
import Navbar from "./Navbar";

export default function header() {
  return (
    <header className={styles.header}>
      <div>
        <h1>Logo</h1>
        <Navbar></Navbar>
      </div>
      <Categories></Categories>
    </header>
  );
}
