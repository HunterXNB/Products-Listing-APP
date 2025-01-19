"use client";
import { Modal } from "@mui/material";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

export default function ProductModal({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <Modal
      className="flex items-center justify-center"
      onClose={router.back}
      open={true}
    >
      <div className="bg-slate-900 px-10 py-8 rounded border border-white max-h-[70vh] max-w-[90vw] overflow-auto relative">
        <X
          className="absolute top-2 right-2 cursor-pointer "
          onClick={router.back}
        />
        {children}
      </div>
    </Modal>
  );
}
