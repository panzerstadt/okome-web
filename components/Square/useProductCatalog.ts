import { useEffect, useState } from "react";

interface ItemData {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  currency: string;
  visibility: string;
  updated_at: Date;
}

type ProductCatalogOutput = [ItemData[], () => void];

export const useProductCatalog = (): ProductCatalogOutput => {
  const [products, setProducts] = useState<ItemData[]>([]);

  const getCatalog = () => {
    return fetch("/api/list")
      .then((results) => results.json())
      .then((results) => {
        setProducts(results.data);
      })
      .catch((err) => {
        console.error(err);
        setProducts([]);
      });
  };

  useEffect(() => {
    getCatalog();
  }, []);

  const updateProduct = () => {
    alert("haven't gone done that thing yet");
  };

  return [products, updateProduct];
};
