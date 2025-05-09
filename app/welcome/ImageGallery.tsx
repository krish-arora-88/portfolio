import { useState, useEffect, useRef } from 'react';
import './ImageGallery.css';

interface ImageGalleryProps {
  isVisible: boolean;
  isHighlighted?: boolean;
}

export function ImageGallery({ isVisible, isHighlighted = false }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const images = [
    {
      url: 'app/assets/ChatGPT Image May 8, 2025, 11_38_16 AM.png',
      title: 'Project 1'
    },
    {
      url: 'app/assets/ChatGPT Image May 8, 2025, 11_41_08 AM.png',
      title: 'Project 2'
    },
    {
      url: 'app/assets/ChatGPT Image May 8, 2025, 11_45_20 AM.png',
      title: 'Project 3'
    },
    {
      url: 'app/assets/ChatGPT Image May 8, 2025, 12_01_19 PM.png',
      title: 'Project 4'
    },
    {
      url: 'app/assets/ChatGPT Image May 8, 2025, 12_06_44 PM.png',
      title: 'Project 5'
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (isVisible && !isPaused) {
      autoScrollRef.current = setInterval(() => {
        nextImage();
      }, 2000); // Change image every 3 seconds
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isVisible, isPaused]);

  if (!isVisible) return null;

  return (
    <div 
      className={`image-gallery ${isHighlighted ? 'highlighted' : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="gallery-container">
        <button className="nav-button prev" onClick={prevImage}>
          <i className="fas fa-chevron-left"></i>
        </button>
        
        <div className="image-container">
          <img 
            src={images[currentIndex].url} 
            alt={images[currentIndex].title}
            className="gallery-image"
          />
          <div className="image-title">
            {images[currentIndex].title}
          </div>
        </div>

        <button className="nav-button next" onClick={nextImage}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      
      <div className="image-dots">
        {images.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
} 