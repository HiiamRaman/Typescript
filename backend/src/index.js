import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";

dotenv.config();
//db connection

const PORT = process.env.port;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is Running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Failed to connect db ", error);
  });
