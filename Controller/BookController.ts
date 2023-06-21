import { Request, Response } from "express";
import BookModel from "../Model/BookModel";

export const getAllBooks = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const AllBooks = await BookModel.find();
    // if (AllBooks.length > 0) {
    //   return res.status(200).json({
    //     message: "Gotten all books successfully",
    //     data: AllBooks,
    //   });
    // } else {
    //   return res.status(200).json({
    //     message: "No Books Found",
    //   });
    // }
    return res.status(200).json({
      message: "Gotten all books successfully",
      data: AllBooks,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Invalid Request from: getAllBooks",
    });
  }
};

export const getSingleBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const SingleBook = await BookModel.findById(bookId);

    return res.status(200).json({
      message: "Gottem Single Book successfully",
      data: SingleBook,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Invalid Request from: getSingleBooks",
    });
  }
};

export const newBook = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { title, authorName, details, ISBN, isBoring, price } = req.body;

    const getAuthorName = await authorName.charAt(0).toUpperCase();

    const genISBN = `${getAuthorName}_${Math.floor(
      Math.random() * 1000
    )}_${Math.floor(Math.random() * 1000)}`;

    const create = await BookModel.create({
      title,
      authorName,
      details,
      ISBN: genISBN,
      isBoring,
      price,
    });

    return res.status(201).json({
      message: "Created Books succesfully",
      data: create,
    });
  } catch (error) {
    return res.status(400).json({
      // message: "Invalid Request from: newBook",
      data: error,
    });
  }
};

export const updateBooks = async (req: Request, res: Response) => {
  try {
    const { title, price } = req.body;
    const bookId = req.params.bookId;
    const update = await BookModel.findByIdAndUpdate(
      bookId,
      {
        title,
        price,
      },
      { new: true }
    );
    return res.status(201).json({
      message: "Updated Books successfully",
      data: update,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Invalid request from: updatebooks",
    });
  }
};

export const deleteBooks = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const deleteOne = await BookModel.findByIdAndDelete(bookId);

    return res.status(201).json({
      message: "Deleted Books successfully",
      data: deleteOne,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Invalid request from: deleteBooks",
    });
  }
};
