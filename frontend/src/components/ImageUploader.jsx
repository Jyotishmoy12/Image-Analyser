import React, { useState } from "react";
import { Upload, Image as ImageIcon, AlertCircle, Loader2, Link as LinkIcon } from "lucide-react";
import axios from "../services/api"

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState("");
  const [wikipediaInfo, setWikipediaInfo] = useState("");
  const [fullWikipediaPage, setFullWikipediaPage] = useState("");
  const [confidence, setConfidence] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("/upload", formData);
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
    <div className="w-full max-w-2xl mx-auto p-4 bg-gray-900 rounded-lg shadow-xl border border-gray-800">
      <div className="flex items-center gap-2 mb-6">
        <ImageIcon className="w-6 h-6 text-blue-400" />
        <h1 className="text-2xl font-bold text-gray-100">Image Analysis Tool</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
            ${isDragging ? 'border-blue-400 bg-gray-800' : 'border-gray-700 hover:border-blue-400'}
            ${previewUrl ? 'border-blue-400' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
            accept="image/*"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            {previewUrl ? (
              <div className="space-y-4">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="max-h-48 mx-auto rounded-lg"
                />
                <p className="text-sm text-gray-400">Click or drag to replace</p>
              </div>
            ) : (
              <div className="space-y-4">
                <Upload className="w-12 h-12 mx-auto text-gray-500" />
                <p className="text-gray-300">Drag and drop your image here or click to browse</p>
                <p className="text-sm text-gray-500">Supports: JPG, PNG, GIF</p>
              </div>
            )}
          </label>
        </div>

        <button
          type="submit"
          disabled={!image || loading}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors
            ${!image || loading 
              ? 'bg-gray-700 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Upload className="w-5 h-5" />
              Analyze Image
            </span>
          )}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-900/50 border border-red-800 rounded-lg flex items-start gap-2">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-red-400">{error}</p>
        </div>
      )}

      {results && (
        <div className="mt-6 space-y-6">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-100 mb-2">Analysis Result</h2>
            <p className="text-gray-300">{results}</p>
            {confidence && (
              <p className="mt-2 text-sm text-gray-400">Confidence: {confidence}</p>
            )}
          </div>

          {wikipediaInfo && (
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-100 mb-2">Wikipedia Information</h2>
              <p className="text-gray-300">{wikipediaInfo}</p>
            </div>
          )}

          {fullWikipediaPage && (
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-100 mb-2">Full Wikipedia Page</h2>
              <a
                href={fullWikipediaPage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
              >
                <LinkIcon className="w-4 h-4" />
                Read more on Wikipedia
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;