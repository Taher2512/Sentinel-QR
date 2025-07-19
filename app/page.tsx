"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import QRCodePattern from "./components/QRCodePattern";
import AnimatedGrid from "./components/AnimatedGrid";
import SecurityFeature from "./components/SecurityFeature";
import TypewriterText from "./components/TypewriterText";
import FloatingParticles from "./components/FloatingParticles";
import { securityFeatures, useCases, stats } from "./utils/constants";
import { animateValue } from "./utils/helpers";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { Meteors } from "@/components/magicui/meteors";
import { cn } from "@/lib/utils";
import { Globe } from "./components/Globe";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  // Refs for animated beams
  const containerRef = React.useRef<HTMLDivElement>(null);
  const generateRef = React.useRef<HTMLDivElement>(null);
  const scanRef = React.useRef<HTMLDivElement>(null);
  const verifyRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Matrix background */}
      <div className="matrix-bg" />

      {/* Floating particles */}
      <FloatingParticles count={50} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 sm:pt-12 lg:pt-0">
        <AnimatedGrid className="opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Status Badge */}
              <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full mb-8">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-xs font-medium text-cyan-300">
                  SYSTEM ONLINE
                </span>
              </div>

              {/* Main Title */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
                  SENTINEL QR
                </h1>
                <div className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6">
                  <TypewriterText
                    text="Military-Grade Product Verification"
                    speed={80}
                    className="text-glow"
                  />
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                Secure QR codes with{" "}
                <span className="text-cyan-400 font-bold">
                  seven-layer encryption
                </span>{" "}
                and
                <span className="text-blue-400 font-bold">
                  {" "}
                  quantum-resistant
                </span>{" "}
                technology. No blockchain, no database - just{" "}
                <span className="text-cyan-400 font-bold">
                  instant verification
                </span>
                .
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <button className="group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-base hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 glow-cyan">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                <button className="group relative px-6 py-3 border-2 border-cyan-400 rounded-lg font-semibold text-base hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-cyan-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="group">
                    <div className="text-xl md:text-2xl font-bold text-cyan-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Asset - Futuristic QR Code */}
            <div className="relative hidden lg:flex items-center justify-center">
              {/* Main QR Container */}
              <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-green-400 rounded-full"></div>
                </div>

                {/* Middle Ring */}
                <div className="absolute inset-8 rounded-full border border-cyan-400/50 animate-spin-reverse">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-300 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-blue-300 rounded-full"></div>
                </div>

                {/* Central QR Code */}
                <div className="absolute inset-16 bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-sm rounded-2xl border-2 border-cyan-500/40 overflow-hidden">
                  {/* Scanning Lines */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-scan-horizontal"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-scan-vertical"></div>

                  {/* QR Code Pattern */}
                  <div className="absolute inset-4 bg-transparent rounded-lg p-4">
                    <QRCodePattern size={300} opacity={0.8} animated={true} />
                  </div>

                  {/* Corner Brackets */}
                  <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
                  <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-cyan-400"></div>
                  <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-cyan-400"></div>
                  <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400"></div>
                </div>

                {/* Floating Data Points */}
                <div className="absolute -top-8 -left-8 px-3 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg backdrop-blur-sm animate-float-reverse">
                  <div className="text-xs text-cyan-300 font-mono">AES-256</div>
                </div>
                <div className="absolute -top-8 -right-8 px-3 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg backdrop-blur-sm animate-float-delayed">
                  <div className="text-xs text-blue-300 font-mono">QUANTUM</div>
                </div>
                <div className="absolute -bottom-8 -left-8 px-3 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg backdrop-blur-sm animate-float-slow">
                  <div className="text-xs text-purple-300 font-mono">
                    7 LAYERS
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 px-3 py-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-lg backdrop-blur-sm animate-float-reverse">
                  <div className="text-xs text-green-300 font-mono">SECURE</div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
              </div>

              {/* Status Indicator */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-mono text-green-400">
                  READY TO SCAN
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Military-Grade Security Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900/20 to-black">
        {/* Enhanced background effects - extended to full viewport */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-screen h-px bg-gradient-to-r from-red-500/30 via-cyan-500/50 to-blue-500/30"></div>
          <div className="absolute bottom-0 left-0 w-screen h-px bg-gradient-to-r from-orange-500/30 via-blue-500/50 to-purple-500/30"></div>
          <div className="absolute top-1/3 left-0 w-screen h-px bg-gradient-to-r from-transparent via-red-400/40 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/3 left-0 w-screen h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-pulse delay-1000"></div>
        </div>

        {/* Animated grid overlay - extended */}
        <div className="absolute -left-20 -right-20 inset-y-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating geometric shapes - extended to viewport edges */}
        <div className="absolute -left-32 -right-32 inset-y-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/6 w-32 h-32 border border-red-500/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute top-3/4 right-1/6 w-24 h-24 border border-orange-500/25 rotate-12 animate-spin-reverse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/15 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/5 w-20 h-20 border-2 border-yellow-500/25 animate-ping"></div>
          <div className="absolute top-1/6 left-1/8 w-40 h-40 border border-purple-500/15 rotate-12 animate-spin-slow opacity-60"></div>
          <div className="absolute bottom-1/6 right-1/8 w-28 h-28 border border-cyan-500/20 rotate-45 animate-spin-reverse opacity-70"></div>
        </div>

        {/* Matrix-like falling lines - extended across viewport */}
        <div className="absolute -left-10 -right-10 inset-y-0">
          <div className="absolute top-0 left-1/12 w-px h-full bg-gradient-to-b from-red-400/40 via-transparent to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-2/12 w-px h-full bg-gradient-to-b from-orange-400/30 via-transparent to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-0 left-4/12 w-px h-full bg-gradient-to-b from-cyan-400/35 via-transparent to-transparent animate-pulse delay-2000"></div>
          <div className="absolute top-0 left-6/12 w-px h-full bg-gradient-to-b from-blue-400/40 via-transparent to-transparent animate-pulse delay-500"></div>
          <div className="absolute top-0 left-8/12 w-px h-full bg-gradient-to-b from-purple-400/25 via-transparent to-transparent animate-pulse delay-1500"></div>
          <div className="absolute top-0 left-10/12 w-px h-full bg-gradient-to-b from-green-400/30 via-transparent to-transparent animate-pulse delay-750"></div>
          <div className="absolute top-0 right-1/12 w-px h-full bg-gradient-to-b from-pink-400/25 via-transparent to-transparent animate-pulse delay-2500"></div>
        </div>

        {/* Side glow effects */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-red-500/10 via-red-500/5 to-transparent"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-cyan-500/10 via-cyan-500/5 to-transparent"></div>

        <Meteors number={20} />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Enhanced header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-xs font-mono text-red-300 tracking-wider">
                CLASSIFIED PROTOCOLS
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              MILITARY-GRADE
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SECURITY MATRIX
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/80 transition-all duration-700 overflow-hidden transform hover:scale-105"
              >
                {/* Enhanced animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Multiple scanning effects */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 animate-pulse delay-200"></div>
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 animate-pulse delay-400"></div>

                {/* Corner indicators */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center text-white shadow-2xl shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-500">
                      <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Enhanced status indicators */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-300 font-mono tracking-wider">
                        OPERATIONAL
                      </span>
                    </div>
                    <div className="text-xs font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      SEC-LVL-{index + 7}
                    </div>
                  </div>
                </div>

                {/* Floating particles on hover */}
                <div className="absolute top-4 right-4 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Global Reach Section */}
      <section className="py-20 relative bg-gradient-to-r from-gray-900/50 to-gray-800/50 overflow-hidden">
        {/* Enhanced background effects - extended to full viewport */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-screen h-px bg-gradient-to-r from-cyan-500/40 via-blue-500/60 to-purple-500/40"></div>
          <div className="absolute bottom-0 left-0 w-screen h-px bg-gradient-to-r from-green-500/40 via-cyan-500/60 to-blue-500/40"></div>
          <div className="absolute top-1/4 left-0 w-screen h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-0 w-screen h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-pulse delay-1500"></div>
        </div>

        {/* Global network grid overlay */}
        <div className="absolute -left-20 -right-20 inset-y-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating network nodes */}
        <div className="absolute -left-32 -right-32 inset-y-0 overflow-hidden">
          <div className="absolute top-1/6 left-1/8 w-6 h-6 bg-cyan-400/60 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/10 w-4 h-4 bg-blue-400/70 rounded-full animate-pulse delay-800"></div>
          <div className="absolute bottom-1/4 left-1/6 w-5 h-5 bg-green-400/50 rounded-full animate-ping delay-1200"></div>
          <div className="absolute bottom-1/6 right-1/8 w-3 h-3 bg-purple-400/60 rounded-full animate-pulse delay-400"></div>
          <div className="absolute top-1/2 left-1/12 w-2 h-2 bg-cyan-300/80 rounded-full animate-ping delay-1600"></div>
          <div className="absolute top-3/4 right-1/12 w-4 h-4 bg-blue-300/70 rounded-full animate-pulse delay-2000"></div>
        </div>

        {/* Connection lines between nodes */}
        <div className="absolute -left-10 -right-10 inset-y-0">
          <div className="absolute top-1/6 left-1/8 w-32 h-px bg-gradient-to-r from-cyan-400/30 to-transparent rotate-12 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/6 w-24 h-px bg-gradient-to-l from-blue-400/40 to-transparent -rotate-12 animate-pulse delay-600"></div>
          <div className="absolute bottom-1/4 left-1/4 w-40 h-px bg-gradient-to-r from-green-400/25 to-transparent rotate-6 animate-pulse delay-1000"></div>
          <div className="absolute top-2/3 right-1/5 w-28 h-px bg-gradient-to-l from-purple-400/35 to-transparent -rotate-6 animate-pulse delay-1400"></div>
        </div>

        {/* Global data streams */}
        <div className="absolute -left-10 -right-10 inset-y-0">
          <div className="absolute top-0 left-1/10 w-px h-3/4 bg-gradient-to-b from-cyan-400/40 via-cyan-400/20 to-transparent animate-pulse delay-300"></div>
          <div className="absolute top-1/4 right-1/8 w-px h-2/3 bg-gradient-to-b from-blue-400/35 via-blue-400/15 to-transparent animate-pulse delay-900"></div>
          <div className="absolute bottom-0 left-1/5 w-px h-1/2 bg-gradient-to-t from-green-400/30 via-green-400/10 to-transparent animate-pulse delay-1300"></div>
          <div className="absolute top-1/3 right-1/4 w-px h-3/5 bg-gradient-to-b from-purple-400/25 via-purple-400/12 to-transparent animate-pulse delay-1700"></div>
        </div>

        {/* Floating geometric satellites */}
        <div className="absolute -left-32 -right-32 inset-y-0 overflow-hidden">
          <div className="absolute top-1/5 left-1/12 w-16 h-16 border border-cyan-500/25 rotate-45 animate-spin-slow opacity-70">
            <div className="absolute inset-2 border border-cyan-400/20 rotate-45"></div>
          </div>
          <div className="absolute bottom-1/3 right-1/10 w-20 h-20 border border-blue-500/20 rotate-12 animate-spin-reverse opacity-60">
            <div className="absolute inset-3 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rotate-12"></div>
          </div>
          <div className="absolute top-2/3 left-1/16 w-12 h-12 border border-green-500/30 rotate-30 animate-spin-slow opacity-80"></div>
          <div className="absolute top-1/4 right-1/16 w-14 h-14 border border-purple-500/25 rotate-60 animate-spin-reverse opacity-50"></div>
        </div>

        {/* World map connection lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-1/2 h-px bg-gradient-to-r from-cyan-400/20 via-blue-400/40 to-cyan-400/20 animate-pulse delay-2500"></div>
          <div className="absolute top-1/3 left-1/6 w-2/3 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent animate-pulse delay-800"></div>
          <div className="absolute top-2/3 left-1/8 w-3/4 h-px bg-gradient-to-r from-purple-400/15 via-purple-400/35 to-purple-400/15 animate-pulse delay-1800"></div>
        </div>

        {/* Side glow effects */}
        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-cyan-500/12 via-cyan-500/6 to-transparent"></div>
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-blue-500/12 via-blue-500/6 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Global Security Network
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Sentinel QR operates across industries worldwide, providing
                instant verification for products from pharmaceuticals to luxury
                goods, electronics to food safety.
              </p>

              {/* Industry Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {useCases.slice(0, 4).map((useCase, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-700/20 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <h3 className="text-lg font-bold text-cyan-400 mb-2">
                      {useCase.industry}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {useCase.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-cyan-300 font-mono">
                  ACTIVE IN 50+ COUNTRIES
                </span>
              </div>
            </div>

            {/* Right Globe */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
                {/* <Globe className="w-full h-full" /> */}
                <Globe />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Technical Overview */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-black via-gray-900/30 to-black">
        {/* Technical grid background - extended */}
        <div className="absolute -left-20 -right-20 inset-y-0 bg-grid-pattern opacity-15"></div>

        {/* Circuit-like lines - extended across viewport */}
        <div className="absolute -left-10 -right-10 inset-y-0">
          <div className="absolute top-1/3 left-0 w-screen h-px bg-gradient-to-r from-green-500/40 via-green-500/20 to-green-500/40 animate-pulse"></div>
          <div className="absolute top-2/3 left-0 w-screen h-px bg-gradient-to-r from-cyan-500/35 via-cyan-500/15 to-cyan-500/35 animate-pulse delay-1000"></div>
          <div className="absolute left-1/6 top-0 w-px h-full bg-gradient-to-b from-blue-500/30 via-transparent to-blue-500/30"></div>
          <div className="absolute right-1/6 top-0 w-px h-full bg-gradient-to-b from-purple-500/25 via-transparent to-purple-500/25"></div>
          <div className="absolute left-1/12 top-0 w-px h-full bg-gradient-to-b from-green-500/20 via-transparent to-green-500/20"></div>
          <div className="absolute right-1/12 top-0 w-px h-full bg-gradient-to-b from-cyan-500/20 via-transparent to-cyan-500/20"></div>
        </div>

        {/* Neural network nodes - extended to edges */}
        <div className="absolute -left-32 -right-32 inset-y-0 overflow-hidden">
          <div className="absolute top-1/5 left-1/12 w-4 h-4 bg-green-400/50 rounded-full animate-ping"></div>
          <div className="absolute top-1/4 right-1/12 w-3 h-3 bg-cyan-400/60 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-3/5 left-1/8 w-2 h-2 bg-blue-400/70 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-1/5 right-1/8 w-3 h-3 bg-purple-400/50 rounded-full animate-pulse delay-1500"></div>
          <div className="absolute top-1/2 left-1/20 w-1 h-1 bg-green-300/90 rounded-full animate-ping delay-2000"></div>
          <div className="absolute bottom-1/3 right-1/20 w-2 h-2 bg-cyan-300/70 rounded-full animate-pulse delay-2500"></div>
          <div className="absolute top-2/5 left-1/6 w-3 h-3 bg-blue-300/60 rounded-full animate-ping delay-300"></div>
          <div className="absolute bottom-2/5 right-1/6 w-2 h-2 bg-purple-300/70 rounded-full animate-pulse delay-800"></div>
        </div>

        {/* Floating hexagons - extended */}
        <div className="absolute -left-32 -right-32 inset-y-0 overflow-hidden">
          <div className="absolute top-1/6 right-1/10 w-12 h-12 border border-green-500/30">
            <div className="w-full h-full transform rotate-45 border border-green-500/15"></div>
          </div>
          <div className="absolute bottom-1/4 left-1/10 w-16 h-16 border border-cyan-500/25 animate-spin-slow">
            <div className="absolute inset-2 border border-cyan-400/30 animate-spin-reverse"></div>
          </div>
          <div className="absolute top-2/5 right-1/8 w-8 h-8 bg-gradient-to-br from-blue-500/15 to-purple-500/15 transform rotate-12 animate-pulse"></div>
          <div className="absolute bottom-1/6 left-1/16 w-20 h-20 border border-purple-500/20 rotate-30 animate-spin-slow opacity-50"></div>
          <div className="absolute top-3/4 right-1/16 w-14 h-14 border border-green-500/25 rotate-60 animate-spin-reverse opacity-60"></div>
        </div>

        {/* Quantum particles - extended */}
        <div className="absolute -left-20 -right-20 inset-y-0">
          <div className="absolute top-1/3 left-1/8 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-70"></div>
          <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-700 opacity-80"></div>
          <div className="absolute top-1/2 right-1/8 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-1400 opacity-60"></div>
          <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-2100 opacity-70"></div>
          <div className="absolute top-1/6 right-1/5 w-1 h-1 bg-green-300 rounded-full animate-ping delay-300 opacity-50"></div>
          <div className="absolute bottom-1/6 left-1/12 w-1 h-1 bg-cyan-300 rounded-full animate-ping delay-1800 opacity-60"></div>
        </div>

        {/* Data streams - extended */}
        <div className="absolute -left-10 -right-10 inset-y-0">
          <div className="absolute top-0 left-1/8 w-px h-2/3 bg-gradient-to-b from-green-400/30 via-green-400/50 to-transparent animate-pulse"></div>
          <div className="absolute top-1/3 right-1/6 w-px h-1/2 bg-gradient-to-b from-cyan-400/40 via-cyan-400/60 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-3/4 w-px h-1/3 bg-gradient-to-t from-blue-400/35 via-blue-400/55 to-transparent animate-pulse delay-500"></div>
          <div className="absolute top-1/4 left-1/12 w-px h-3/4 bg-gradient-to-b from-purple-400/25 via-purple-400/45 to-transparent animate-pulse delay-1500"></div>
          <div className="absolute bottom-1/4 right-1/12 w-px h-2/3 bg-gradient-to-t from-green-400/30 via-green-400/50 to-transparent animate-pulse delay-2000"></div>
        </div>

        {/* Side glow effects */}
        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-green-500/15 via-green-500/8 to-transparent"></div>
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-cyan-500/15 via-cyan-500/8 to-transparent"></div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          {/* Enhanced header */}
          <div className="mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-xs font-mono text-green-300 tracking-wider">
                QUANTUM PROCESSING
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              NEURAL NETWORK
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              VERIFICATION PROTOCOL
            </h3>
          </div>

          {/* Enhanced Process Flow */}
          <div className="mb-20" ref={containerRef}>
            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Generate */}
              <div
                ref={generateRef}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-green-500/30 hover:border-green-400/80 transition-all duration-700 transform hover:scale-110"
              >
                {/* Holographic effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Enhanced scanning effects */}
                <div className="absolute inset-0 border-2 border-green-400/20 rounded-2xl opacity-0 group-hover:opacity-100 animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0 transform -translate-y-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 via-cyan-500 to-blue-600 flex items-center justify-center text-4xl shadow-2xl shadow-green-500/25 group-hover:shadow-green-500/50 transition-all duration-500 transform group-hover:rotate-12">
                    🔐
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-xs font-mono text-green-400 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      PROTOCOL_01
                    </div>
                    <h3 className="text-2xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">
                      GENERATE
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    Neural encryption algorithms create quantum-entangled QR
                    matrices with military-grade cryptographic signatures
                  </p>

                  {/* Tech specs */}
                  <div className="mt-6 p-3 bg-black/50 rounded-lg border border-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-xs font-mono text-green-400">
                      AES-256 | RSA-4096 | SHA-512
                    </div>
                  </div>
                </div>
              </div>

              {/* Scan */}
              <div
                ref={scanRef}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400/80 transition-all duration-700 transform hover:scale-110"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 border-2 border-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-cyan-400/0 transform -translate-y-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center text-4xl shadow-2xl shadow-cyan-500/25 group-hover:shadow-cyan-500/50 transition-all duration-500 transform group-hover:rotate-12">
                    📱
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-xs font-mono text-cyan-400 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      PROTOCOL_02
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                      SCAN
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    Quantum-enhanced optical sensors decode molecular signatures
                    with zero-latency pattern recognition
                  </p>

                  <div className="mt-6 p-3 bg-black/50 rounded-lg border border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-xs font-mono text-cyan-400">
                      ML-VISION | TENSOR-CORE | GPU-ACCELERATED
                    </div>
                  </div>
                </div>
              </div>

              {/* Verify */}
              <div
                ref={verifyRef}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/80 transition-all duration-700 transform hover:scale-110"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 border-2 border-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0 transform -translate-y-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-600 flex items-center justify-center text-4xl shadow-2xl shadow-blue-500/25 group-hover:shadow-blue-500/50 transition-all duration-500 transform group-hover:rotate-12">
                    ✅
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-xs font-mono text-blue-400 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      PROTOCOL_03
                    </div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      VERIFY
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    Quantum cryptanalysis validates authenticity through
                    distributed ledger-free consensus algorithms
                  </p>

                  <div className="mt-6 p-3 bg-black/50 rounded-lg border border-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-xs font-mono text-blue-400">
                      QUANTUM-PROOF | ZERO-KNOWLEDGE | INSTANT
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Animated Beam Connections */}
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={generateRef}
                toRef={scanRef}
                className="text-green-400 -z-10"
                duration={2}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={scanRef}
                toRef={verifyRef}
                className="text-cyan-400 -z-10"
                duration={2}
                delay={0.5}
              />
            </div>
          </div>

          {/* Enhanced bottom section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 rounded-3xl p-10 backdrop-blur-sm border-2 border-cyan-500/20 relative overflow-hidden">
              {/* Holographic overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/10 to-purple-500/5 rounded-3xl"></div>

              {/* Corner elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400/60"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/60"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400/60"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400/60"></div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-6">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-xs font-mono text-purple-300 tracking-wider">
                    QUANTUM ADVANTAGE
                  </span>
                </div>

                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-6">
                  ZERO INFRASTRUCTURE. INFINITE SCALE.
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
                  Our quantum-resistant verification matrix operates through
                  pure cryptographic consensus, eliminating single points of
                  failure while achieving unprecedented scalability and speed.
                </p>

                {/* Tech metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="p-4 bg-black/50 rounded-xl border border-purple-500/20">
                    <div className="text-2xl font-bold text-purple-400 mb-1">
                      ∞
                    </div>
                    <div className="text-sm text-gray-400">
                      Transactions/sec
                    </div>
                  </div>
                  <div className="p-4 bg-black/50 rounded-xl border border-cyan-500/20">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">
                      &lt;1ms
                    </div>
                    <div className="text-sm text-gray-400">
                      Verification Time
                    </div>
                  </div>
                  <div className="p-4 bg-black/50 rounded-xl border border-green-500/20">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      256-bit
                    </div>
                    <div className="text-sm text-gray-400">
                      Quantum Security
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            SENTINEL QR
          </div>
          <p className="text-gray-400 mb-6">
            Securing the future of product verification, one QR code at a time.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
