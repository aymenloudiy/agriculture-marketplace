import { useParams } from "react-router";
import { products } from "../data/dataset";
import ReviewsSection from "../components/Product/reviewSection";
import ProductPage from "../components/Product/productPage";

const ProductPageWrapper = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) return <p style={{ padding: "2rem" }}>Product not found.</p>;

  return (
    <>
      <ProductPage product={product} />
      <ReviewsSection productId={product.id} />
    </>
  );
};

export default ProductPageWrapper;
