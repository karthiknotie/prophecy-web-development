const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  content: String, // Store plain-text content here
  rawContent: { type: Object, required: true }, // Store the original JSON content
  coverImg: String,
  category: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  rating: Number,
  createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;