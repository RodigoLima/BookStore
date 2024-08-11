import mongoose from "mongoose";
import { authorSchema } from "./author.js";

const bookSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.ObjectId,
    },
    title: { type: String, required: [true, "Title is required"] },
    publisher: {
      type: String,
      required: [true, "Publisher is required"],
    },
    price: { type: Number },
    pages: {
      type: Number,
      validate: {
      validator: (value) => {
        return value >= 10 && value <= 5000;
      },
      message: "{VALUE} is not a valid price. Price must be between 10 and 5000.",
    }
    },
    author: authorSchema,
  },
  { versionKey: false }
);

const book = mongoose.model("books", bookSchema);

export default book;
