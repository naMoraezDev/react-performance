import { ProductItem } from "./ProductItem";
import { List, ListRowRenderer } from "react-virtualized";

export type Product = {
  id: number;
  price: number;
  formattedPrice: string;
  title: string;
};

type SearchResultsProps = {
  results: Product[];
  totalPrice?: number;
  onAddToWishList(id: number): void;
};

export function SearchResults({
  results,
  totalPrice,
  onAddToWishList,
}: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    );
  };

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results && (
        <List
          height={300}
          rowHeight={30}
          width={900}
          overscanRowCount={5}
          rowCount={results?.length}
          rowRenderer={rowRenderer}
        />
      )}
    </div>
  );
}
