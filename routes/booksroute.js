const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Book = require("../model/booksmode");

router.post("/", (req, res, next) => {
  const book = new Book({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
  });
  book
    .save()
    .then((result) => {
      res.status(200).json({
        newBooks: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/", (req, res, next) => {
  Book.find()
    .then((result) => {
      res.status(200).json({
        book: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
