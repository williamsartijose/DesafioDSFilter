import { ProductDTO } from "../../models/product";
import "./styles.css";

type Props = {
  product?: ProductDTO;
};

export default function CardListing({ product }: Props) {
  return (
    <div className="dsf-cardListing-content">
      <p>{product?.name}</p>
      <h3>R$ {product?.price.toFixed(2)}</h3>
    </div>
  );
}