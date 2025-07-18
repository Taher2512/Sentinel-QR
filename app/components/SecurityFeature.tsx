'use client';

import React, { useState, useEffect } from 'react';

interface SecurityFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function SecurityFeature({ title, description, icon, delay = 0 }: SecurityFeatureProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`relative group p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/25">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white ml-4">{title}</h3>
        </div>
        
        <p className="text-gray-300 leading-relaxed">{description}</p>
        
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
      </div>
    </div>
  );
}
