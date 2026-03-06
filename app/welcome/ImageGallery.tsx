import { useState, useEffect, useRef } from 'react';
import './ImageGallery.css';

interface ImageGalleryProps {
  isVisible: boolean;
  isHighlighted?: boolean;
  onProjectChange?: (skills: string[]) => void;
}

export function ImageGallery({ isVisible, isHighlighted = false, onProjectChange }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const images = [
    {
      url: '/assets/DreamCar.png',
      title: 'DreamCar',
      link: 'https://dreamcar-lovat.vercel.app/',
      skills: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'OpenAI API', 'Redis', 'TailwindCSS']
    },
    {
      url: '/assets/PetAdoptionHomePage.png',
      title: 'PetAdopt BC',
      link: 'https://pet-adoption-platform-two.vercel.app/',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'Passport.js', 'Mocha', 'Chai']
    },
    {
      url: '/assets/Apex.png',
      title: 'Apex Go-Karting Booking System',
      link: 'https://apex-racing-gokarting.vercel.app/',
      skills: ['Spring Boot', 'Java', 'Next.js', 'Apache Kafka', 'Redis']
    },
    {
      url: '/assets/UBConnect.png',
      title: 'UBConnect',
      link: 'https://www.youtube.com/shorts/22sCW8aNNCk',
      skills: ['React Native', 'TypeScript', 'Figma', 'Firebase', 'Jest']
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

  useEffect(() => {
    if (onProjectChange) {
      onProjectChange(images[currentIndex].skills);
    }
  }, [currentIndex, onProjectChange]);

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
          {images[currentIndex].link ? (
            <a href={images[currentIndex].link} target="_blank" rel="noopener noreferrer">
              <img
                src={images[currentIndex].url}
                alt={images[currentIndex].title}
                className="gallery-image"
              />
            </a>
          ) : (
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].title}
              className="gallery-image"
            />
          )}
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