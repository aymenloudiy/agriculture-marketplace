import styles from "./categories.module.css";
import { Link } from "react-router";
import { FaWineBottle } from "react-icons/fa";
import {
  GiHoneyJar,
  GiFruitBowl,
  GiAmphora,
  GiSpinningWheel,
} from "react-icons/gi";

export default function Categories() {
  return (
    <div className={styles.categories}>
      <ul>
        <li>
          <Link to="/category/olive-oil">
            <FaWineBottle /> Olive Oil
          </Link>
        </li>
        <li>
          <Link to="/category/medical-honey">
            <GiHoneyJar /> Medical Honey
          </Link>
        </li>
        <li>
          <Link to="/category/fresh-produce">
            <GiFruitBowl /> Fresh Produce
          </Link>
        </li>
        <li>
          <Link to="/category/pottery">
            <GiAmphora /> Pottery
          </Link>
        </li>
        <li>
          <Link to="/category/artisanal-goods">
            <GiSpinningWheel /> Artisanal Goods
          </Link>
        </li>
      </ul>
    </div>
  );
}
