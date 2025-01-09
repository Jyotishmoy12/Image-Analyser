const fs = require('fs');
const Clarifai = require('clarifai');
require('dotenv').config()

// Initialize Clarifai API client with your API key
const app = new Clarifai.App({
  apiKey: process.env.CLARIFAI_ID,  // Replace with your actual Clarifai API key
});

// Function to analyze image
async function analyzeImage(imagePath) {
  try {
    // Convert image to base64 format
    const imageBuffer = fs.readFileSync(imagePath);
    const imageBase64 = imageBuffer.toString('base64');

    // Send base64 image to Clarifai
    const response = await app.models.predict(Clarifai.GENERAL_MODEL, { base64: imageBase64 });
    return response;
  } catch (error) {
    throw new Error('Error analyzing image: ' + error.message);
  }
}

module.exports = { analyzeImage };
