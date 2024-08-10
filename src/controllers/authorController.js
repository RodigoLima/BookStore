import {author} from "../models/author.js";

class AuthorController {
  static async listAuthors(req, res) {
    try {
      const listAuthors = await author.find({});
      res.status(200).json(listAuthors);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async listAuthorById(req, res) {
    try {
      const id = req.params.id;
      const findAuthor = await author.findById(id);
      res.status(200).json(findAuthor);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async updateAuthorById(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        menssage: "Author has been updated with successfully.",
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async deleteAuthorById(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({
        menssage: "Author has been deleted with successfully.",
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async registerAuthor(req, res) {
    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({
        message: "Author registered successfully",
        author: newAuthor,
      });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

export default AuthorController;
