import express, { NextFunction, Request, Response } from "express";
import mongoose, { Schema, Document } from "mongoose";

const app = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

mongoose.connect("mongodb://localhost:27017/alcool", {
});
mongoose.connection.on("error", (err) => {
    console.error("Connection to MongoDB failed", err);
});
mongoose.connection.on("open", () => {
    console.log("Connected to MongoDB");
});

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});