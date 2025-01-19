import { IFullProduct } from "@/models/products";
import { cn } from "@/utils/lib";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
async function ProductFullData({
  params,
  modal = false,
}: {
  params: Promise<{
    id: string;
  }>;
  modal?: boolean;
}) {
  const { id } = await params;
  const req = await fetch(`${process.env.API_URL}/products/${id}`);
  if (!req.ok) {
    if (req.status === 404) {
      return notFound();
    } else {
      throw new Error(`Error fetching product ${id}`);
    }
  }
  const { data: product } = (await req.json()) as { data: IFullProduct };

  return (
    <main
      className={cn("flex-1 flex max-md:flex-col p-4 gap-2", {
        "block space-y-2": modal,
      })}
    >
      <div className={cn("flex-1 relative ", { "h-56": modal })}>
        <Image src={product.imageUrl} alt={product.name} fill />
      </div>
      <div className="flex-1 py-3">
        <div className="flex gap-2 items-center overflow-hidden justify-between w-full">
          <h2 className="text-xl font-bold ">{product.name}</h2>
          <span>{product.price}$</span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Description</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </main>
  );
}

export default ProductFullData;
