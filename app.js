import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import apiRouter from "./routes/api.js";
import client from "./db.js";

dotenv.config();

const app = express();
const APP_PORT = 3000;
app.use(cors({ origin: true }));
app.get("/", (req, res) => {
  res.json({ Hello: "World", Version: 2 });
});
app.use("/api", apiRouter);

app.listen(APP_PORT, () => {
  console.log(`api listening at http://localhost:${APP_PORT}`);
});
