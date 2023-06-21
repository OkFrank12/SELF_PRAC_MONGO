import mongoose from "mongoose";

const bookstore_url = "mongodb://0.0.0.0:27017/bookstore_database";

export const database = async () => {
  const dbConnect = await mongoose.connect(bookstore_url);
  console.log("");
  console.log("Database is connected to: ", dbConnect.connection.host);
};
