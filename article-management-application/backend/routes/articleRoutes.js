const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { createArticle, getEveryArticles, getSingleArticle } = require('../controllers/articleController');

router.post('/articles', upload.array('media', 10), createArticle);
router.get('/articles', getEveryArticles);
router.get('/articles/:id', getSingleArticle);

module.exports = router;
