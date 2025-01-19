import ProductLoading from "@/app/[id]/loading";
import ProductFullData from "@/components/home/ProductFullData";
import React, { Suspense } from "react";

async function ModalPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  //Parallel intercepting Route to show the product inside a modal when navigating from the home page
  return (
    <Suspense fallback={<ProductLoading modal />}>
      <ProductFullData modal params={Promise.resolve({ id })} />
    </Suspense>
  );
}

export default ModalPage;
