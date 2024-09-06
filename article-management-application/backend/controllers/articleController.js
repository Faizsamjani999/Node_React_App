const Article = require('../model/articles');
const path = require('path');

// Create a new article
const createArticle = async (req, res) => {
    try {
        const { title, description, additionalContent } = req.body;
        const media = req.files ? req.files.map(file => `uploads/${file.filename}`) : [];
        const newArticle = new Article({ title, description, additionalContent, media });
        await newArticle.save();
        res.status(201).json(newArticle);
    } catch (err) {
        console.error('Error creating article:', err);
        res.status(500).json({ error: 'Failed to create article' });
    }
};

// Get all articles
const getEveryArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.status(200).json(articles);
    } catch (err) {
        console.error('Error fetching articles:', err);
        res.status(500).json({ error: 'Failed to fetch articles' });
    }
};

// Get a single article
const getSingleArticle = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ error: 'Article not found' });
        }
        res.status(200).json(article);
    } catch (err) {
        console.error('Error fetching article:', err);
        res.status(500).json({ error: 'Failed to fetch article' });
    }
};

module.exports = {
    createArticle,
    getEveryArticles,
    getSingleArticle
};
