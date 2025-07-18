"use client";

import React, { useEffect, useRef } from "react";

interface QRCodePatternProps {
  className?: string;
  size?: number;
  opacity?: number;
  animated?: boolean;
}

export default function QRCodePattern({
  className = "",
  size = 400,
  opacity = 0.1,
  animated = true,
}: QRCodePatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.scale(dpr, dpr);
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";

    const drawQRPattern = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const moduleSize = 8;
      const cols = Math.ceil(size / moduleSize);
      const rows = Math.ceil(size / moduleSize);

      ctx.fillStyle = `rgba(0, 255, 255, ${opacity})`;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          // Create a QR-like pattern with some randomness
          const shouldFill = Math.random() > 0.5;

          if (shouldFill) {
            ctx.fillRect(
              col * moduleSize,
              row * moduleSize,
              moduleSize - 1,
              moduleSize - 1
            );
          }
        }
      }

      // Add corner squares (typical QR code feature)
      const cornerSize = moduleSize * 7;
      ctx.fillStyle = `rgba(0, 255, 255, ${opacity * 2})`;

      // Top-left corner
      ctx.fillRect(0, 0, cornerSize, cornerSize);
      ctx.fillStyle = `rgba(0, 0, 0, ${opacity * 3})`;
      ctx.fillRect(
        moduleSize,
        moduleSize,
        cornerSize - 2 * moduleSize,
        cornerSize - 2 * moduleSize
      );

      // Top-right corner
      ctx.fillStyle = `rgba(0, 255, 255, ${opacity * 2})`;
      ctx.fillRect(size - cornerSize, 0, cornerSize, cornerSize);
      ctx.fillStyle = `rgba(0, 0, 0, ${opacity * 3})`;
      ctx.fillRect(
        size - cornerSize + moduleSize,
        moduleSize,
        cornerSize - 2 * moduleSize,
        cornerSize - 2 * moduleSize
      );

      // Bottom-left corner
      ctx.fillStyle = `rgba(0, 255, 255, ${opacity * 2})`;
      ctx.fillRect(0, size - cornerSize, cornerSize, cornerSize);
      ctx.fillStyle = `rgba(0, 0, 0, ${opacity * 3})`;
      ctx.fillRect(
        moduleSize,
        size - cornerSize + moduleSize,
        cornerSize - 2 * moduleSize,
        cornerSize - 2 * moduleSize
      );
    };

    drawQRPattern();

    if (animated) {
      const interval = setInterval(drawQRPattern, 3000);
      return () => clearInterval(interval);
    }
  }, [size, opacity, animated]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
