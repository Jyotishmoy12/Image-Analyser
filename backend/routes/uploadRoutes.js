const express = require('express');
const multer = require('multer');
const { analyzeImage } = require('../controllers/clarifaiClient');  // Clarifai controller
const { fetchWikipediaInfo } = require('../controllers/wikipediaClient'); // Wikipedia controller
const axios = require('axios'); // Import axios here
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Use multer for image uploads
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('image'), async (req, res) => {
    if (!req.file) {
      return res.status(400).send('No image uploaded');
    }
  
    const imagePath = path.join(__dirname, '../uploads', req.file.filename);
  
    try {
      // Analyze image using Clarifai API
      const result = await analyzeImage(imagePath);
      const concepts = result.outputs[0].data.concepts;
  
      if (concepts.length === 0) {
        return res.status(404).send('No concepts detected in the image.');
      }
  
      // Get the top concept with the highest confidence level
      const topConcept = concepts[0];
      const conceptName = topConcept.name;
      const conceptConfidence = topConcept.value;
  
      // Fetch Wikipedia info for the detected concept
      const wikipediaInfo = await fetchWikipediaInfo(conceptName);
  
      // Clean up uploaded file after processing
      fs.unlinkSync(imagePath);
  
      // Send back the analysis result, confidence, and Wikipedia info
      res.status(200).json({
        message: `The image is of ${conceptName}`,
        confidence: `Confidence: ${(conceptConfidence * 100).toFixed(2)}%`, // Convert confidence to percentage
        wikipediaInfo: wikipediaInfo.extract || 'No Wikipedia info available.',
        fullWikipediaPage: wikipediaInfo.content_urls?.desktop.page || 'No full Wikipedia page available.',
      });
    } catch (error) {
      console.error('Error analyzing image or fetching Wikipedia info:', error);
      res.status(500).send('Error analyzing image or fetching Wikipedia info: ' + error.message);
    }
  });
  
module.exports = router;
