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
import { Globe } from "@/components/magicui/globe";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { Meteors } from "@/components/magicui/meteors";
import { cn } from "@/lib/utils";

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

      {/* Security Features with Meteors */}
      <section className="py-20 relative overflow-hidden">
        <Meteors number={30} />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Military-Grade Security
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden"
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Scanning line effect */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/25">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-cyan-300 font-mono">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 relative bg-gradient-to-r from-gray-900/50 to-gray-800/50 overflow-hidden">
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
                <Globe className="w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>

                {/* Floating indicators */}
                <div className="absolute top-1/4 left-1/4 px-2 py-1 bg-cyan-500/80 text-xs text-white rounded-full font-mono">
                  US
                </div>
                <div className="absolute top-1/3 right-1/3 px-2 py-1 bg-blue-500/80 text-xs text-white rounded-full font-mono">
                  EU
                </div>
                <div className="absolute bottom-1/3 right-1/4 px-2 py-1 bg-green-500/80 text-xs text-white rounded-full font-mono">
                  ASIA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Overview - Clean & Minimalistic */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            How It Works
          </h2>

          {/* Simple Process Flow with Animated Beams */}
          <div className="mb-16" ref={containerRef}>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Generate */}
              <div
                ref={generateRef}
                className="group p-8 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">
                  Generate
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Create unique QR codes with embedded encrypted product
                  information
                </p>
              </div>

              {/* Scan */}
              <div
                ref={scanRef}
                className="group p-8 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Scan</h3>
                <p className="text-gray-300 leading-relaxed">
                  Use any smartphone camera to scan the QR code instantly
                </p>
              </div>

              {/* Verify */}
              <div
                ref={verifyRef}
                className="group p-8 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Verify</h3>
                <p className="text-gray-300 leading-relaxed">
                  Instant cryptographic verification without database lookup
                </p>
              </div>

              {/* Animated Beam Connections */}
              <div className="flex items-center justify-center absolute -z-10">
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={generateRef}
                  toRef={scanRef}
                  className="text-cyan-400"
                  duration={3}
                />
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={scanRef}
                  toRef={verifyRef}
                  className="text-blue-400"
                  duration={3}
                  delay={1}
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                No Blockchain. No Database. Just Security.
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Sentinel QR operates without the complexity and costs of
                blockchain or traditional databases. Our stateless verification
                system proves authenticity through advanced cryptographic
                protocols, making it infinitely scalable and lightning-fast.
              </p>
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
