import express, { Application, Request, Response } from "express";
import cors from "cors";
import { database } from "./Config/Database";
import router from "./Router/BookRouter";

const app: Application = express();
const port: number = 9768;
database();

app
  .use(express.json())
  .use(cors())
  .use("/api", router)
  .get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "You have just hit on a bookstore endpoint",
      });
    } catch (error) {
      console.log(error);
    }
  })
  .listen(port, () => {
    console.log("Server is listening to port: ", port);
  });
