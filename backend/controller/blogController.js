const Blog = require("../schema/blogSchema");

const uploadBlog = async (req, res) => {
  try {
    const { title, content, doctorId, image, summary } = req.body;
    const blog = new Blog({
      title,
      content,
      doctorId,
      image,
      summary,
    });

    const savedBlog = await blog.save();
    res.status(200).json({
      message: "Posted Blog successfully!",
    });
  } catch (error) {
    res.status(404).json({ error: "Failed to create a blog post" });
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Failed to fetch blog posts" });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    res.json(blog);
  } catch (error) {
    res.status(404).json({ error: "Failed to fetch the blog post" });
  }
};

module.exports = { uploadBlog, getBlogs, getBlogById };
