import { ProductItem } from "./ProductItem";

export type Product = {
  id: number;
  price: number;
  formattedPrice: string;
  title: string;
};

type SearchResultsProps = {
  results?: Product[];
  totalPrice?: number;
  onAddToWishList(id: number): void;
};

export function SearchResults({
  results,
  totalPrice,
  onAddToWishList,
}: SearchResultsProps) {
  return (
    <div>
      <h2>{totalPrice}</h2>

      {results?.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToWishList={onAddToWishList}
        />
      ))}
    </div>
  );
}
