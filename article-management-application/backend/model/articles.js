const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    additionalContent: { type: String },
    media: [{ type: String }]  // Array of file paths
}, { timestamps: true });

module.exports = mongoose.model('Article', articleSchema);
