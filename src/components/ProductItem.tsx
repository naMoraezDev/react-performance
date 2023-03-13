import { Product } from "./SearchResults";
import { memo, useState } from "react";
import dynamic from "next/dynamic";
//import { AddProductToWishList } from "./AddProductToWishList";

const AddProductToWishList = dynamic(
  async () =>
    import("./AddProductToWishList").then(
      (module) => module.AddProductToWishList
    ),
  { loading: () => <span>loading...</span> }
);

type ProductItemProps = {
  product: Product;
  onAddToWishList(id: number): void;
};

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.formattedPrice}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>
        Add to wishlist
      </button>
      {isAddingToWishList && (
        <AddProductToWishList
          onAddToWishList={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
