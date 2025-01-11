import React from 'react';
import { Camera, Info as InfoIcon } from 'lucide-react';
import ImageUploader from '../components/ImageUploader';

const Info = () => {
  return (
    <div className="min-h-screen bg-black py-8 px-4">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Camera className="w-8 h-8 text-blue-400" />
          <h1 className="text-3xl font-bold text-gray-100">Image Analysis Portal</h1>
        </div>
        {/* <div className="bg-gray-900 rounded-lg p-4 shadow-xl border border-gray-800">
          <div className="flex items-start gap-2 text-left">
            <InfoIcon className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
            <p className="text-gray-300">
              Upload any image and our AI system will analyze it, providing detailed information and relevant Wikipedia references. 
              Perfect for research, education, or simply learning more about what's in your photos.
            </p>
          </div>
        </div> */}
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        <ImageUploader />
      </div>

      {/* Footer Section */}
      <div className="max-w-4xl mx-auto mt-8 text-center">
        <p className="text-sm text-gray-500">
          Supported image formats: JPG, PNG, GIF | Max file size: 10MB
        </p>
      </div>
    </div>
  );
};

export default Info;