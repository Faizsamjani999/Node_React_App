const path = require('path');
const Article = require('../model/article');

const uploadMedia = (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: 'No files uploaded' });
    }
    
    const filePaths = req.files.map(file => `uploads/${file.filename}`);
    return { filePaths };
};

const createArticle = async (req, res) => {
    try {
        const { title, content } = req.body;
        const media = uploadMedia(req);
        const newArticle = new Article({ title, content, media: media.filePaths });
        await newArticle.save();
        res.status(201).json(newArticle);
    } catch (err) {
        console.error('Error creating article:', err);
        res.status(500).json({ error: 'Failed to create article' });
    }
};

const getEveryArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.status(200).json(articles);
    } catch (err) {
        console.error('Error fetching articles:', err);
        res.status(500).json({ error: 'Failed to fetch articles' });
    }
};

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
    getSingleArticle,
    uploadMedia
};
