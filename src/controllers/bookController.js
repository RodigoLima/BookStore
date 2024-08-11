import { book } from "../models/index.js";
import { author } from "../models/author.js";
import NotFound from "../erros/NotFound.js";
class BookController {
  static async listBooks(req, res, next) {
    try {
      const { limit = 5, page = 1 } = req.query;

      const listBooks = await book
        .find({})
        .sort({ _id: -1})
        .skip((page - 1) * limit)
        .limit(limit);
      res.status(200).json(listBooks);
    } catch (err) {
      next(err);
    }
  }

  static async listBookById(req, res, next) {
    try {
      const id = req.params.id;
      const findBook = await book.findById(id);
      if (findBook != null) {
        res.status(200).json(findBook);
      } else {
        next(new NotFound("Book not found"));
      }
    } catch (err) {
      next(err);
    }
  }

  static async updateBookById(req, res, next) {
    try {
      const id = req.params.id;
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        menssage: "Book has been updated with successfully.",
      });
    } catch (err) {
      next(err);
    }
  }

  static async deleteBookById(req, res, next) {
    try {
      const id = req.params.id;
      await book.findByIdAndDelete(id);
      res.status(200).json({
        menssage: "Book has been deleted with successfully.",
      });
    } catch (err) {
      next(err);
    }
  }

  static async registerBook(req, res, next) {
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
      next(err);
    }
  }

  static async listBooksByFilter(req, res, next) {
    const { publisher, title } = req.query;
    try {
      const filter = {};

      // Adicione condições ao filtro somente se os valores existirem
      if (publisher) {
        filter.publisher = publisher;
      }
      if (title) {
        filter.title = { $regex: title, $options: "i" };
      }

      // Realize a busca com base nos critérios definidos
      const booksByPublisher = await book.find(filter);
      if (booksByPublisher.length > 0) {
        res.status(200).json(booksByPublisher);
      } else {
        next(new NotFound("Filter without result"));
      }
    } catch (err) {
      next(err);
    }
  }
}

export default BookController;
