const BookModel = require("../models/BooksModel");

exports.addBook = async (req, res) => {
  try {
    const { bookName, bookDescription, bookPrice, bookAuthor } = req.body;
    const newBook = new BookModel({
      bookName,
      bookDescription,
      bookPrice,
      bookAuthor,
    });

    await newBook.save();

    res.send(newBook);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.searchBooks = async (req, res) => {
  try {
    const books = await BookModel.find().lean();
    res.send(books);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.searchOneBook = async (req, res) => {
  try {
    const _id = req.params.id;

    const book = await BookModel.findById(_id).lean();
    if (!book) {
      return res.status(404).json({ msg: "Book Not Found" });
    }
    res.send(book);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.editBook = async (req, res) => {
  try {
    const _id = req.params.id;

    const { bookName, bookDescription, bookPrice, bookAuthor } = req.body;
    const newBook = await BookModel.findByIdAndUpdate(
      _id,
      {
        bookName,
        bookDescription,
        bookPrice,
        bookAuthor,
      },
      { new: true }
    );

    if (!newBook) {
      return res.status(404).json({ msg: "Book Not Found" });
    }

    res.send(newBook);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const _id = req.params.id;
    const books = await BookModel.findByIdAndDelete(_id);
    res.json({ msg: "Deleted" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
