import Product from "@/models/products";
import { connectDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
// route handler to get a specific product by id

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await connectDB();
    const product = await Product.findById(id);
    if (product) {
      return NextResponse.json(
        {
          status: "success",
          data: product,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          status: "fail",
          message: "Product not found",
        },
        { status: 404 }
      );
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        status: "error",
        message: "Server error",
      },
      { status: 500 }
    );
  }
}
