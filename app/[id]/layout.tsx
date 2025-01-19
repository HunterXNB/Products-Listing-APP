import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col gap-2">
      <nav className="py-2 px-4">
        <Link
          className="hover:text-[#1976d2] transition-all duration-500 hover:scale-105 active:scale-95 w-fit inline-block"
          href={"/"}
        >
          <ArrowLeft />
        </Link>
      </nav>
      {children}
    </div>
  );
}

export default ProductLayout;
