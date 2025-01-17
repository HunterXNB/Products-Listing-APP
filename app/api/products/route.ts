import Product from "@/models/products";
import { connectDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
const perPage = 10;
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const page =
    parseInt(searchParams.get("page")!) || 1 > 0
      ? parseInt(searchParams.get("page")!) || 1
      : 1;
  const sort =
    ["asc", "desc"].find((el) => el === searchParams.get("sort")) || "asc";
  const search = searchParams.get("search")?.trim() || "";
  await connectDB();
  const count = await Product.find({
    name: {
      $regex: `^${search}`,
      $options: "i",
    },
  }).countDocuments();
  const products = await Product.find({
    name: {
      $regex: `^${search}`,
      $options: "i",
    },
  })
    .sort(sort === "desc" ? "-price" : "price")
    .skip((page - 1) * perPage)
    .limit(perPage);
  const totalPages = Math.ceil(count / perPage);
  return NextResponse.json(
    {
      products,
      meta: {
        currentPage: page,
        lastPage: totalPages > 0 ? totalPages : 1,
        previousPage: page - 1 > 0 ? page - 1 : null,
        nextPage: page + 1 <= totalPages ? page + 1 : null,
      },
    },
    { status: 200 }
  );
}
