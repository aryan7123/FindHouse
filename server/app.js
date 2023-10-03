import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
import dotenv from "dotenv";

import Connection from "./database/conn.js";
import userRouter from "./routes/users.js";
import propertyRouter from "./routes/properties.js";

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true, limit: "20mb" }));
app.use(cors());

app.use("/user", userRouter);
app.use("/properties", propertyRouter);

const PORT = process.env.PORT || 8080;

Connection();

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});