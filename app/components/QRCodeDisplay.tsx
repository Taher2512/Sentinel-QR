'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface QRCodeDisplayProps {
  qrImagePath?: string;
  className?: string;
}

export default function QRCodeDisplay({ qrImagePath, className = '' }: QRCodeDisplayProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  // Fallback QR pattern if no image is provided
  const QRFallback = () => (
    <div className="w-full h-full bg-black rounded-lg relative overflow-hidden">
      {/* QR pattern simulation */}
      <div className="absolute inset-0 grid grid-cols-15 gap-0.5 p-2">
        {[...Array(225)].map((_, i) => (
          <div
            key={i}
            className={`w-full h-full ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}
          />
        ))}
      </div>
      
      {/* QR corner squares */}
      <div className="absolute top-2 left-2 w-16 h-16 bg-black border-4 border-white">
        <div className="w-full h-full bg-white border-2 border-black">
          <div className="w-full h-full bg-black border border-white"></div>
        </div>
      </div>
      <div className="absolute top-2 right-2 w-16 h-16 bg-black border-4 border-white">
        <div className="w-full h-full bg-white border-2 border-black">
          <div className="w-full h-full bg-black border border-white"></div>
        </div>
      </div>
      <div className="absolute bottom-2 left-2 w-16 h-16 bg-black border-4 border-white">
        <div className="w-full h-full bg-white border-2 border-black">
          <div className="w-full h-full bg-black border border-white"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`w-60 h-60 bg-white rounded-lg flex items-center justify-center ${className}`}>
      {qrImagePath && !imageError ? (
        <div className="relative w-full h-full">
          <Image
            src={qrImagePath}
            alt="Sentinel QR Code"
            fill
            className={`object-contain rounded-lg transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
            </div>
          )}
        </div>
      ) : (
        <QRFallback />
      )}
    </div>
  );
}
