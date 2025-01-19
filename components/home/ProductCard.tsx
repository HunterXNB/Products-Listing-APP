import { IFullProduct } from "@/models/products";
import { Button, Skeleton } from "@mui/material";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// product card component
function ProductCard({ product }: { product: IFullProduct }) {
  return (
    <div className="grid grid-rows-subgrid w-full max-w-96 row-span-3 border border-gray-400 p-2 rounded">
      <div className="relative rounded overflow-hidden h-52 w-full">
        <Image src={product.imageUrl} fill alt={product.name} />
      </div>
      <div className="flex max-w-full overflow-hidden items-center gap-2 justify-between">
        <h2
          title={product.name}
          className="font-bold text-nowrap overflow-ellipsis overflow-hidden text-lg"
        >
          {product.name}
        </h2>
        <span>{product.price}$</span>
      </div>
      <Link
        className="ml-auto hover:scale-105 transition-all duration-500 active:scale-95"
        href={`/${product._id}`}
      >
        <Button variant="outlined">
          See Full Details <ArrowRight />
        </Button>
      </Link>
    </div>
  );
}
// product card skeleton
export function LoadingProductCard() {
  return (
    <div className="grid grid-rows-subgrid w-full max-w-96 row-span-3 border border-gray-400 p-2 rounded">
      <Skeleton
        variant="rounded"
        animation="wave"
        height={208}
        className="rounded h-52 w-full"
      />{" "}
      <div className="flex max-w-full overflow-hidden items-center gap-2 justify-between">
        <Skeleton variant="text" animation="wave" width={108} height={20} />
        <Skeleton variant="text" animation="wave" width={50} height={16} />
      </div>
      <Skeleton className="ml-auto" animation="wave" width={180} height={36} />
    </div>
  );
}
export default ProductCard;
