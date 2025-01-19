import ProductFullData from "@/components/home/ProductFullData";

async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  return <ProductFullData params={params} />;
}

export default ProductPage;
