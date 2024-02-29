import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams<{productId: string}>()
  return (
    <div>
      <h4>Product {params.productId}</h4>
    </div>
  );
};
export default Product;
