"use server";
import { revalidatePath } from "next/cache";
import Product, { IFullProduct } from "../models/products";
import { connectDB } from "../utils/db";
import { faker } from "@faker-js/faker";
const images = [
  "https://m.media-amazon.com/images/I/61B7dn9ZUYL._AC_SX450_.jpg",
  "https://m.media-amazon.com/images/I/513rNt-cvGL.__AC_SX300_SY300_QL70_ML2_.jpg",
  "https://m.media-amazon.com/images/I/418m2C8Q2nL.__AC_SX300_SY300_QL70_ML2_.jpg",
  "https://m.media-amazon.com/images/I/51QnVwQiaPL._AC_SX679_.jpg",
  "https://m.media-amazon.com/images/I/31pV6FtC3aL.__AC_QL70_ML2_.jpg",
  "https://m.media-amazon.com/images/I/51wheCmVabL.__AC_SY300_SX300_QL70_ML2_.jpg",
];
export async function seedDB() {
  await connectDB();
  console.log("seeding start");
  const products: Omit<IFullProduct, "_id">[] = [];
  for (let i = 0; i < 50; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      description: faker.commerce.productDescription(),
      imageUrl: images[i % images.length],
    });
    console.log(`Created ${i + 1} products`);
  }
  await Product.create(products);
  console.log("seeding end");
  revalidatePath("/");
}
