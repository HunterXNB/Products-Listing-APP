"use client";
import { Pagination } from "@mui/material";
import React from "react";
import styles from "./ProductPagination.module.css";
import { useRouter, useSearchParams } from "next/navigation";
function ProductPagination({
  meta,
}: {
  meta: {
    currentPage: number | null;
    lastPage: number | null;
    previousPage: number | null;
    nextPage: number | null;
  };
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  return (
    <div
      className={`col-span-full mt-auto flex justify-center ${styles["pagination-container"]}`}
    >
      <Pagination
        color="primary"
        page={meta.currentPage || 1}
        count={meta.lastPage || 1}
        onChange={(e, page) => {
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.set("page", String(page));
          router.push(`/?${newSearchParams}`);
        }}
        variant="text"
      />
    </div>
  );
}

export default ProductPagination;
