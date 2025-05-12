import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Simulate loading time (you can adjust this or remove it)
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(onLoadingComplete, 500); // Wait for fade out animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${isFading ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-spinner" />
        <div className="loading-text">Loading</div>
      </div>
    </div>
  );
} 