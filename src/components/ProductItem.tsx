import { Product } from "./SearchResults";

type ProductItemProps = {
  product: Product;
};

export function ProductItem({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}