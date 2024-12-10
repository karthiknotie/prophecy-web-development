const express = require('express');
const router = express.Router();
const Blog = require('../models/blog-model');
const multer = require('multer');
const path = require('path');

// Multer Configuration for File Upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to save files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename with extension
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/; // Allowed file types
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);
    if (extName && mimeType) {
      cb(null, true);
    } else {
      cb(new Error('Only images are allowed (JPEG, JPG, PNG)'));
    }
  }
});

// Create a new blog post
router.post('/create-post', upload.single('coverImg'), async (req, res) => {
    try {
      const { title, content, category, location, author , description} = req.body;
  
      if (!req.file) {
        return res.status(400).send({ message: 'Cover image is required' });
      }
  
      // Parse and process Editor.js content
      const contentObj = JSON.parse(content);
      const plainTextContent = contentObj.blocks
        .map((block) => block.data.text) // Extract `text` fields from blocks
        .join('\n'); // Join all blocks with a newline
  
      const newPost = new Blog({
        title,
        content: plainTextContent, // Save plain-text content
        rawContent: content, // Save the original JSON content as `rawContent` if needed
        category,
        location,
        description,
        coverImg: req.file.path,
        author,
      });
  
      await newPost.save();
  
      res.status(201).send({ message: 'Post created successfully', post: newPost });
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).send({ message: 'Error creating post' });
    }
});

// Get all blog posts
router.get('/', async (req, res) => {
  try {
    const { search, category, location } = req.query;

    let query = {};

    if (search) {
      query = {
        ...query,
        $or: [
          { title: { $regex: search, $options: 'i' } },
          { content: { $regex: search, $options: 'i' } },
        ],
      };
    }

    if (category) query.category = category;
    if (location) query.location = location;

    const posts = await Blog.find(query)
      .populate('author', 'email') // Populate author details
      .sort({ createdAt: -1 });

    res.status(200).send(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).send({ message: 'Error fetching posts' });
  }
});

// Get a single blog post by ID
// Fetch a single blog post by ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);

    if (!post) {
      return res.status(404).send({ message: 'Blog not found' });
    }

    res.status(200).send(post);
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).send({ message: 'Error fetching blog' });
  }
});


// Update a blog post
router.patch('/update-post/:id', upload.single('coverImg'), async (req, res) => {
  try {
    const { title, content, description } = req.body;

    const updatedData = {
      title,
      content, // Save normal text/HTML content
      description,
    };

    if (req.file) {
      updatedData.coverImg = req.file.path;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
    });

    if (!updatedBlog) {
      return res.status(404).send({ message: 'Blog not found' });
    }

    res.status(200).send({ message: 'Blog updated successfully', post: updatedBlog });
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).send({ message: 'Error updating blog' });
  }
});



// Delete a blog post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Blog.findByIdAndDelete(req.params.id);

    if (!post) return res.status(404).send({ message: 'Post not found' });

    res.status(200).send({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).send({ message: 'Error deleting post' });
  }
});

module.exports = router;
