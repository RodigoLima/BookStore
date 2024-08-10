import book from "../models/book.js";
import { author } from "../models/author.js";
class BookController {
  static async listBooks(req, res) {
    try {
      const listBooks = await book.find({});
      res.status(200).json(listBooks);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async listBookById(req, res) {
    try {
      const id = req.params.id;
      const findBook = await book.findById(id);
      res.status(200).json(findBook);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async updateBookById(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        menssage: "Book has been updated with successfully.",
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async deleteBookById(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndDelete(id);
      res.status(200).json({
        menssage: "Book has been deleted with successfully.",
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async registerBook(req, res) {
    const newBook = req.body;
    try {
      const authorData = await author.findById(newBook.author); 
      const fullBook = { ...newBook, author: authorData };
      const createdBook = await book.create(fullBook);
      res.status(201).json({
        message: "Book registered successfully",
        book: createdBook, 
      });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }


  static async listBooksByPublisher (req, res) {
    const publisher_query = req.query.publisher;
    try {
      const booksByPublisher = await livro.find({ publisher: publisher_query });
      res.status(200).json(booksByPublisher);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na busca` });
    }
  }


}

export default BookController;
