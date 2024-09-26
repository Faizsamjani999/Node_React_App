const multer = require('multer');
const path = require('path');

// Set up storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Ensure this directory exists or create it if not
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Create a unique filename
    }
});

// File filter
const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['image/', 'video/', 'audio/', 'image/gif'];
    if (allowedMimeTypes.some(type => file.mimetype.startsWith(type))) {
        cb(null, true); // Accept the file
    } else {
        cb(new Error('Invalid file type'), false); // Reject the file
    }
}

// Create the multer instance with storage and file filter
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

// Middleware function to handle uploads
const uploadMiddleware = (req, res, next) => {
    // Adjust the `upload.any()` or `upload.single('fieldname')` based on your requirement
    upload.any()(req, res, (err) => {
        if (err) {
            // Handle Multer-specific errors
            return res.status(400).json({ error: err.message });
        }
        next();
    });
};

module.exports = uploadMiddleware;
