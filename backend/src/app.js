import express from "express";
import cors from "cors";
export const app = express();
import authRouter from "./routes/auth.routes.js";

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRouter);
