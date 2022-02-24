const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
      trim: true,
    },
    bookDescription: {
      type: String,
      default: "",
      trim: true,
    },
    bookPrice: {
      type: Number,
      required: true,
    },
    bookAuthor: {
      type: String,
      default: "",
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Book = mongoose.model("Book", bookSchema);

bookSchema.index({ arabicName: "text", englishName: "text" });

module.exports = Book;
