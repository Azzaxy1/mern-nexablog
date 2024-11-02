import express from "express";
import { body } from "express-validator";

import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
} from "../controllers/blog.controller";

const router = express.Router();

// Create -> POST
router.post(
  "/",
  [
    body("title").isLength({ min: 5 }).withMessage("Input title tidak sesuai"),
    body("body").isLength({ min: 10 }).withMessage("Input body tidak sesuai"),
  ],
  createBlog
);

// Read -> GET
router.get("/", getAllBlogs);

// Get One -> GET
router.get("/:id", getBlogById);

// Update -> PUT
router.put(
  "/:id",
  [
    body("title").isLength({ min: 5 }).withMessage("Input title tidak sesuai"),
    body("body").isLength({ min: 10 }).withMessage("Input body tidak sesuai"),
  ],
  updateBlog
);

export default router;
