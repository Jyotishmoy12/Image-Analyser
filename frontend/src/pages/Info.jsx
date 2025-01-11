import React from 'react';
import { Camera, Info as InfoIcon } from 'lucide-react';
import ImageUploader from '../components/ImageUploader';
import { useNavigate } from 'react-router-dom';

const Info = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black py-8 px-4">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Camera className="w-8 h-8 text-blue-400" />
          <h1 className="text-3xl font-bold text-gray-100">Image Analysis Portal</h1>
        </div>
      <button  onClick={goToHome} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
      Home Page
      </span>
      </button>
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