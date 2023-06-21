import mongoose from "mongoose";
import { iBooks } from "../Utils/BookInterface";

interface books extends iBooks, mongoose.Document {}

const BookSchema = new mongoose.Schema<iBooks>(
  {
    title: {
      type: String,
      unique: true,
      required: [true, "Please write book title"],
    },
    ISBN: {
      type: String,
      unique: true,
    },
    details: {
      type: String,
    },
    isBoring: {
      type: Boolean,
    },
    authorName: {
      type: String,
      unique: true,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

const BookModel = mongoose.model<books>("Book-Store", BookSchema);

export default BookModel;
