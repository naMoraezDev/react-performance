import { ProductItem } from "./ProductItem";

export type Product = {
  id: number;
  price: number;
  title: string;
};

type SearchResultsProps = {
  results: Product[];
};

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
