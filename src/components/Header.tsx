import Categories from "./Categories";
import styles from "./header.module.css";
import Navbar from "./Navbar";

export default function header() {
  return (
    <div className={styles.header}>
      <Navbar></Navbar>
      <Categories></Categories>
    </div>
  );
}
