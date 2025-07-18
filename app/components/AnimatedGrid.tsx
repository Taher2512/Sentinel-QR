"use client";

import React, { useEffect, useRef } from "react";

interface AnimatedGridProps {
  className?: string;
}

export default function AnimatedGrid({ className = "" }: AnimatedGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cells = grid.querySelectorAll(".grid-cell");

    const animateCell = (cell: Element) => {
      const htmlCell = cell as HTMLElement;
      htmlCell.style.background = "rgba(0, 255, 255, 0.3)";
      htmlCell.style.transform = "scale(1.1)";

      setTimeout(() => {
        htmlCell.style.background = "rgba(0, 255, 255, 0.05)";
        htmlCell.style.transform = "scale(1)";
      }, 300);
    };

    const startAnimation = () => {
      const randomCells = Array.from(cells)
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.floor(cells.length * 0.1));

      randomCells.forEach((cell, index) => {
        setTimeout(() => animateCell(cell), index * 50);
      });
    };

    startAnimation();
    const interval = setInterval(startAnimation, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={gridRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "20px 20px",
      }}
    >
      {Array.from({ length: 400 }, (_, i) => (
        <div
          key={i}
          className="grid-cell absolute w-4 h-4 transition-all duration-300"
          style={{
            left: `${(i % 20) * 20}px`,
            top: `${Math.floor(i / 20) * 20}px`,
            background: "rgba(0, 255, 255, 0.05)",
          }}
        />
      ))}
    </div>
  );
}
