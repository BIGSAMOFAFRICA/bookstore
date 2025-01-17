import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: String,
  author: String,
  link: { type: String, required: true },
  review: String,
  username: { type: String, required: true },
});

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);

export default Book;
