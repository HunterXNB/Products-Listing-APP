import React from "react";
import ProductCard, { LoadingProductCard } from "./ProductCard";

import { IFullProduct } from "@/models/products";
import ProductPagination from "./ProductPagination";

async function ProductsGrid({
  searchParams,
}: {
  searchParams: {
    page?: string;
    search?: string;
    sort?: string;
  };
}) {
  const queryParams = new URLSearchParams(searchParams);
  const req = await fetch(
    `${process.env.API_URL}/products` + "?" + queryParams
  );
  if (!req.ok)
    throw new Error("Failed to fetch products, please try again later");
  const res = (await req.json()) as {
    products: IFullProduct[];
    meta: {
      currentPage: number | null;
      lastPage: number | null;
      previousPage: number | null;
      nextPage: number | null;
    };
  };
  return res.products.length > 0 ? (
    <div className="grid flex-1 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] justify-center content-center justify-items-center gap-3">
      {res.products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
      <ProductPagination meta={res.meta} />
    </div>
  ) : (
    <div className="flex-1 flex items-center justify-center">
      No Products Found. Please Click on Seed button to create 50 Products.
    </div>
  );
}
export function LoadingProductGrid() {
  return (
    <div className="grid flex-1 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] justify-center content-center justify-items-center  gap-3">
      {Array.from({ length: 10 }).map((_, i) => (
        <LoadingProductCard key={i} />
      ))}
    </div>
  );
}
export default ProductsGrid;
