import express, { NextFunction, Request, Response } from "express";

import blogRoutes from "./routes/blog";
import authRoutes from "./routes/auth";
import { CustomError } from "./types";

const app = express();

const PORT = process.env.PORT || 8080;
const localhost = `http://localhost:${PORT}`;
const apiVersion = "/v1";

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  next();
});

app.use(express.json());
app.use(`${apiVersion}/auth`, authRoutes);
app.use(`${apiVersion}/blog`, blogRoutes);
app.use(
  (error: CustomError, _req: Request, res: Response, _next: NextFunction) => {
    const status = error.errorStatus || 500;
    const message = error.message || "An error occurred";
    const data = error.data;

    res.status(status).json({ message, data });
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on ${localhost}`);
});
