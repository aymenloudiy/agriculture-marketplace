import ProductCarousel from "./ProductCarousel";
import ProductDetails from "./ProductDetails";
import ProductShippingInfo from "./ProductShippingInfo";
import style from "./productContainer.module.css";

export default function ProductContainer() {
  return (
    <div className={style.productContainer}>
      <h2>Product Name</h2>
      <nav>
        {/* TODO: These should be NavLinks */}
        <ul>
          <li>
            <a href="">General Info</a>
          </li>
          <li>
            <a href="">Product Details</a>
          </li>
          <li>
            <a href="">Reviews</a>
          </li>
        </ul>
      </nav>
      {/* TODO: This needs to be an outlet, change based on above NavLink */}
      <ProductCarousel />
      <ProductShippingInfo />
      <ProductDetails />
    </div>
  );
}
