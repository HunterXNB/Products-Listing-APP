import Header from "@/components/home/Header";
import ProductsGrid, {
  LoadingProductGrid,
} from "@/components/home/ProductsGrid";
import Search from "@/components/home/Search";
import Sort from "@/components/home/Sort";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    search?: string;
    sort?: string;
  }>;
}) {
  const sParams = await searchParams;
  return (
    <>
      <Header />
      <main className="min-h-dvh flex flex-col gap-2 lg:p-10 p-5">
        <div className="flex gap-2">
          <Search />
          <Sort />
        </div>
        <Suspense
          fallback={<LoadingProductGrid />}
          key={`${sParams.search}-${sParams.sort}-${sParams.page}`}
        >
          <ProductsGrid searchParams={sParams} />
        </Suspense>
      </main>
    </>
  );
}
