import express, { Router } from "express";
import {
  deleteBooks,
  getAllBooks,
  getSingleBook,
  newBook,
  updateBooks,
} from "../Controller/BookController";

const router: Router = express.Router();

router.route("/getallbooks").get(getAllBooks);
router.route("/getsinglebooks/:bookId").get(getSingleBook);
router.route("/createbooks").post(newBook);
router.route("/updatebooks/:bookId").patch(updateBooks);
router.route("/deletebooks/:bookId").delete(deleteBooks);

export default router;
