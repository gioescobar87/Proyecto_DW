const express = require('express');
const multer = require('multer');
const Image = require('../models/Image');
const router = express.Router();

//Multer para almacenar imágenes
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/', upload.single('image'), async (req, res) => {
    try {
        const newImage = new Image({
            filename: req.file.originalname,
            contentType: req.file.mimetype,
            imageBase64: req.file.buffer.toString('base64')
        });

        await newImage.save(); //Guarda la imagen a MongoDB
        res.status(201).json({ message: 'Image uploaded successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to upload image', error });
    }
});

module.exports = router;