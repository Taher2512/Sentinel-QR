export function generateRandomQRPattern(): string {
  const patterns = [
    "█████████████████████████████████████████████████████████████████████",
    "█████████████████████████████████████████████████████████████████████",
    "█████████████████████████████████████████████████████████████████████",
    "█████████████████████████████████████████████████████████████████████",
    "█████████████████████████████████████████████████████████████████████",
  ];

  return patterns[Math.floor(Math.random() * patterns.length)];
}

export function formatSecurityLevel(level: number): string {
  const levels = [
    "Basic",
    "Enhanced",
    "Military-Grade",
    "Quantum-Resistant",
    "Ultra-Secure",
  ];

  return levels[Math.min(level, levels.length - 1)] || "Unknown";
}

export function generateSecurityHash(input: string): string {
  // Simple hash function for demonstration
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(16).padStart(8, "0").toUpperCase();
}

export function animateValue(
  start: number,
  end: number,
  duration: number,
  callback: (value: number) => void
): void {
  const startTime = Date.now();
  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const current = start + (end - start) * progress;
    callback(Math.floor(current));

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  animate();
}

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}
