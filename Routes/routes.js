const express = require('express');
const router = express.Router();
const userController = require('../controller/controller');
const multer = require('multer');
const path = require('path');

// Serve static files from the 'public' directory
router.use(express.static(path.resolve(__dirname, 'public')));

// Multer setup for file uploads
// Multer setup for file uploads
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage });

// Route for uploading CSV file and importing data
router.post('/upload', upload.single('file'), userController.importuser); // Ensure that the field name is 'file'

// Route for finding events based on user's location and date
router.post('/api/events/find', userController.findEvents); // Change to POST

module.exports = router;
