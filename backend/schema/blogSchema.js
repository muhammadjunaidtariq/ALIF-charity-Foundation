const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  image: {
    type: String,
    required:true
  },
});


const blogModel = mongoose.model('Blog', blogSchema);
module.exports = blogModel