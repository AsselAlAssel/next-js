import React from "react";
import { Product } from "@/utilities/types";
import ProductCard from "@/components/productCard";

async function getProducts(category: string) {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return await response.json();
}

export default async function ProductsPage({
  params,
}: {
  params: {
    category: string;
  };
}) {
  const category = params.category;
  const products = await getProducts(category);
  return (
    <div className="mt-3">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {products.map((product: Product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}
