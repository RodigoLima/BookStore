import NotFound from "../erros/NotFound.js";
import { author } from "../models/index.js";

class AuthorController {
  static async listAuthors(req, res, next) {
    try {
      const listAuthors = await author.find({});
      res.status(200).json(listAuthors);
    } catch (err) {
      next(err);
    }
  }

  static listAuthorById = async (req, res, next) => {
    try {
      const id = req.params.id;
      const findAuthor = await author.findById(id);
      if (findAuthor != null) {
        res.status(200).json(findAuthor);
      }
      else{
        next(new NotFound("Author not found"));  
      }
    } catch (err) {
        next(err);

    }
  };

  static async updateAuthorById(req, res,next) {
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        menssage: "Author has been updated with successfully.",
      });
    } catch (err) {
      next(err);
    }
  }

  static async deleteAuthorById(req, res,next) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({
        menssage: "Author has been deleted with successfully.",
      });
    } catch (err) {
      next(err);
    }
  }

  static async registerAuthor(req, res,next) {
    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({
        message: "Author registered successfully",
        author: newAuthor,
      });
    } catch (err) {
      next(err);
    }
  }
}

export default AuthorController;
