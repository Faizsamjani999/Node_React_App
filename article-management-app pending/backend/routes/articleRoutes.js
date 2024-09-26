const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { createArticle, getEveryArticles, getSingleArticle, uploadMedia } = require('../controllers/articleControllers');
const uploadMiddleware = require('../middleware/upload');

// Route for creating an article with file upload
router.post('/articles', upload.array('media', 10), createArticle);

// Route for fetching all articles
router.get('/showAllArticles', getEveryArticles);

// Route for fetching a single article by ID
router.get('/singleArticle/:id', getSingleArticle);

// Route for file upload (if separate from article creation)
router.post('/upload', uploadMiddleware.array('media', 10), uploadMedia);

module.exports = router;
