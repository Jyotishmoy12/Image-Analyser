import React, { useState } from "react";
import axios from "../services/api";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState("");
  const [wikipediaInfo, setWikipediaInfo] = useState("");
  const [fullWikipediaPage, setFullWikipediaPage] = useState("");
  const [confidence, setConfidence] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error message

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("/upload", formData);

      // Set the full response from backend
      setResults(response.data.message);
      setConfidence(response.data.confidence);
      setWikipediaInfo(response.data.wikipediaInfo);
      setFullWikipediaPage(response.data.fullWikipediaPage);
    } catch (error) {
      console.error("Image upload failed:", error);
      setError("Image upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit" disabled={loading}>Upload</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {results && (
        <div>
          <h3>Analysis Result:</h3>
          <p>{results}</p>
          <p>{confidence}</p>
        </div>
      )}

      {wikipediaInfo && (
        <div>
          <h3>Wikipedia Information:</h3>
          <p>{wikipediaInfo}</p>
        </div>
      )}

      {fullWikipediaPage && (
        <div>
          <h3>Full Wikipedia Page:</h3>
          <a href={fullWikipediaPage} target="_blank" rel="noopener noreferrer">
            {fullWikipediaPage}
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;

