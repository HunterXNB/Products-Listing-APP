import ProductModal from "@/components/ProductModal";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  // the modal that wraps the parallel intercepting routes
  return <ProductModal>{children}</ProductModal>;
}

export default layout;
