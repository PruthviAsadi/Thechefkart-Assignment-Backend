const express = require('express');
const multer = require('multer');
const path = require('path');
const postModel = require('../models/postModel');
const router = express.Router();

// Set up storage for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Create Post
router.post('/', upload.single('image'), (req, res) => {
  const { userId, caption } = req.body;
  const image = req.file ? req.file.filename : null;

  postModel.createPost(userId, caption, image, (err, postId) => {
    if (err) return res.status(500).json({ error: err.message });

    res.status(201).json({ message: 'Post created', postId });
  });
});

// Get All Posts
router.get('/', (req, res) => {
  postModel.getAllPosts((err, posts) => {
    if (err) return res.status(500).json({ error: err.message });

    res.status(200).json({ posts });
  });
});

module.exports = router;
