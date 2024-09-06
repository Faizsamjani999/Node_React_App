const multer = require('multer');
const path = require('path');

// Set up storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// File filter
const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['image/', 'video/', 'audio/', 'image/gif'];
    if (allowedMimeTypes.some(type => file.mimetype.startsWith(type))) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type'), false);
    }
};

// Create the multer instance with storage and file filter
const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
