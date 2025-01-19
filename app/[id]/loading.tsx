import { cn } from "@/utils/lib";
import { Skeleton } from "@mui/material";
import React from "react";
interface IProps<T> {
  modal?: T;
}
function ProductLoading({ modal = false }: IProps<boolean>) {
  return (
    <main
      className={cn("flex-1 flex max-md:flex-col p-4 gap-2", {
        block: modal,
      })}
    >
      <div
        className={cn("flex-1 flex flex-col", {
          "h-40": modal,
        })}
      >
        <Skeleton
          animation="wave"
          variant="rectangular"
          className="h-full flex-1"
          height={"100%"}
        />
      </div>
      <div className="flex-1 py-3">
        <div className="flex gap-2 items-center overflow-hidden justify-between w-full">
          <Skeleton animation="wave" variant="text" width={150} height={30} />
          <Skeleton animation="wave" variant="text" width={50} height={30} />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton animation="wave" variant="text" width={150} height={30} />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={"100%"}
            height={modal ? 110 : 300}
          />
        </div>
      </div>
    </main>
  );
}

export default ProductLoading;
