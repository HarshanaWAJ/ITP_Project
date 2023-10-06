const express = require("express");
const router= express.Router();
const book = require("../models/book");
const booksController = require("../controllers/books-controller")

router.get("/",booksController.getAllbooks);
router.post("/",booksController.addBook);
router.get("/:id",booksController.getById); 
router.put("/:id",booksController.updateBook);
router.delete("/:id",booksController.deleteBook);
module.exports = router; 