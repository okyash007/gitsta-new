import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/connectDb.js";
import cors from "cors";
import { errorMiddleWare } from "./middlewares/errorMiddleWare.js";

dotenv.config({
  path: "./.env",
});

const app = express();

connectDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT} `);
  });
});

app.use(
  cors({
    origin: ["http://localhost:5173", "https://social.okyash.tech"],
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.get("/", (req, res) => {
  res.json({ status: "giiiii" });
});

app.use(errorMiddleWare);
