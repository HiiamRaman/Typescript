import express from "express";
import cors from "cors";
export const app = express();
import authRouter from "./routes/auth.routes.js";

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/v1/auth", authRouter);
