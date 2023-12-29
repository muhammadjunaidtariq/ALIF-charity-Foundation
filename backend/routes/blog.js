const express = require("express");
const Blog = require("../controller/blogController");
const { uploadBlog, getBlogById, getBlogs } = Blog;

const router = express.Router();

router.post("/", uploadBlog);
router.get("/", getBlogs);
router.get("/:id", getBlogById);

module.exports = router;
