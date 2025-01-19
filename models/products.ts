import mongoose from "mongoose";
interface IProduct {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}
const productSchema = new mongoose.Schema<IProduct>({
  name: {
    type: String,
    required: [true, "A product must have a name"],
    unique: true,
    trim: true,
    minlength: [3, "Minimum 3 characters"],
    maxlength: [50, "Maximum 50 characters"],
  },
  price: {
    type: Number,
    required: [true, "A product must have a price"],
  },
  description: {
    type: String,
    required: [true, "A product must have a description"],
    minlength: [10, "Minimum 10 characters"],
    maxlength: [255, "Maximum 255 characters"],
  },
  imageUrl: {
    type: String,
    required: [true, "A product must have an image"],
  },
});

const Product =
  (mongoose.models?.product as mongoose.Model<IProduct>) ||
  mongoose.model<IProduct>("product", productSchema);
export interface IFullProduct extends IProduct {
  _id: string;
}
export default Product;
