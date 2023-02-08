const express = require("express");
const router = express.Router();

// Require controller modules
const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const genre_controller = require("../controllers/genreController");
const book_instance_controller = require("../controllers/bookinstanceController");

/// BOOK ROUTES ///

// GET catalog home page
router.get("/", book_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display BOOK (uses id).
router.get("/book/create", book_controller.book_create_get);

// POST request for creating Book
router.post("/book/create", book_controller.book_create_post);

// GET request to delete Book
router.get("/book/:id/delete", book_controller.book_delete_get);

// POST request to delete book
router.post("/book/:id/delete", book_controller.book_delete_post);

// GET request to update Book
router.get("/book/:id/update", book_controller.book_update_get);

// POST request to update Book
router.post("/book/:id/update", book_controller.book_update_post);

// GET request for one Book
router.get("/book/:id", book_controller.book_detail);

// GET request for list of all Book items
router.get("/books", book_controller.book_list);

/// AUTHOR ROUTES ///

// GET request for creating a Book. NOTE This must come before routes that display BOOK (uses id).
router.get("/author/create", author_controller.author_create_get);

// POST request for creating Book
router.post("/author/create", author_controller.author_create_post);

// GET request to delete Book
router.get("/author/:id/delete", author_controller.author_delete_get);

// POST request to delete book
router.post("/author/:id/delete", author_controller.author_delete_post);

// GET request to update Book
router.get("/author/:id/update", author_controller.author_update_get);

// POST request to update Book
router.post("/author/:id/update", author_controller.author_update_post);

// GET request for one Book
router.get("/author/:id", author_controller.author_detail);

// GET request for list of all Book items
router.get("/authors/", author_controller.author_list);

/// GENRE ROUTES ///

// GET request for creating a Book. NOTE This must come before routes that display BOOK (uses id).
router.get("/genre/create", genre_controller.genre_create_get);

// POST request for creating Book
router.post("/genre/create", genre_controller.genre_create_post);

// GET request to delete Book
router.get("/genre/:id/delete", genre_controller.genre_delete_get);

// POST request to delete book
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

// GET request to update Book
router.get("/genre/:id/update", genre_controller.genre_update_get);

// POST request to update Book
router.post("/genre/:id/update", genre_controller.genre_update_post);

// GET request for one Book
router.get("/genre/:id", genre_controller.genre_detail);

// GET request for list of all Book items
router.get("/genres/", genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

// GET request for creating a Book. NOTE This must come before routes that display BOOK (uses id).
router.get(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_get
);

// POST request for creating Book
router.post(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_post
);

// GET request to delete Book
router.get(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_get
);

// POST request to delete book
router.post(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_post
);

// GET request to update Book
router.get(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_get
);

// POST request to update Book
router.post(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_post
);

// GET request for one Book
router.get("/bookinstance/:id", book_instance_controller.bookinstance_detail);

// GET request for list of all Book items
router.get("/bookinstances/", book_instance_controller.bookinstance_list);

module.exports = router;
