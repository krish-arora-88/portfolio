import { F90 } from './F90';
import { E39 } from './E39';
import { R34 } from './R34';
import { useState, useEffect, useRef } from 'react';
import './welcome.css';
import { SiVercel } from 'react-icons/si';
import { ImageGallery } from './ImageGallery';
import { SkillsHoneycomb } from './SkillsHoneycomb';

export function Welcome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [isGalleryHighlighted, setIsGalleryHighlighted] = useState(false);
  const [highlightedSkills, setHighlightedSkills] = useState<string[]>([]);
  const [currentCar, setCurrentCar] = useState<'F90' | 'E39' | 'R34'>('F90');
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        setShowAbout(!showAbout);
        setIsMenuOpen(!isMenuOpen);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showAbout]);

  useEffect(() => {
    if (showAbout && skillsRef.current) {
      const progressBars = skillsRef.current.querySelectorAll('.progress-fill');
      progressBars.forEach((bar) => {
        const targetWidth = bar.getAttribute('data-progress') || '0';
        setTimeout(() => {
          (bar as HTMLElement).style.width = `${targetWidth}%`;
        }, 100);
      });
    }
  }, [showAbout]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAboutClick = () => {
    setShowAbout(!showAbout);
    setIsGalleryHighlighted(false);
  };

  const handleProjectsClick = () => {
    setShowAbout(true);
    setIsGalleryHighlighted(true);
    setTimeout(() => {
      setIsGalleryHighlighted(false);
    }, 3000);
  };

  const handleProjectChange = (skills: string[]) => {
    setHighlightedSkills(skills);
  };

  // Function to render the currently selected car component
  const renderCarComponent = () => {
    switch (currentCar) {
      case 'E39':
        return <E39 />;
      case 'R34':
        return <R34 />;
      case 'F90':
      default:
        return <F90 />;
    }
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      
      {showAbout && (
        <div className="social-icons-container" style={{
          position: 'fixed',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '2rem',
          zIndex: 1000
        }}>
          <a href="https://www.linkedin.com/in/krish--arora/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/krish-arora-88" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://vercel.com/krish-arora" target="_blank" rel="noopener noreferrer" className="social-icon">
            <SiVercel className="fa-brands fa-vercel"/>
          </a>
        </div>
      )}

      <div style={{ 
        display: 'flex', 
        width: '100vw', 
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0',
        backgroundImage: 'url("app/assets/ChatGPT Image May 8, 2025, 12_06_44 PM.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div style={{ 
          width: '33.33%', 
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          {showAbout && (
            <div className={`text-box ${showAbout ? 'show' : ''}`} style={{
              position: 'absolute',
              bottom: '15%',
              left: '45.5%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              padding: '20px',
              borderRadius: '10px',
              color: 'white',
              width: '77%',
              textAlign: 'center',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              opacity: '0.8',
            }}>
              <div ref={skillsRef}>
                <div className="skill-container">
                  <div className="skill-name">Curiosity</div>
                  <div className="progress-bar">
                    <div className="progress-fill" data-progress="75"></div>
                  </div>
                </div>
                <div className="skill-container">
                  <div className="skill-name">Eagerness to Learn</div>
                  <div className="progress-bar">
                    <div className="progress-fill" data-progress="85"></div>
                  </div>
                </div>
                <div className="skill-container">
                  <div className="skill-name">Teamwork</div>
                  <div className="progress-bar">
                    <div className="progress-fill" data-progress="80"></div>
                  </div>
                </div>
                <div className="skill-container">
                  <div className="skill-name">Adaptability</div>
                  <div className="progress-bar">
                    <div className="progress-fill" data-progress="75"></div>
                  </div>
                </div>
                <div className="skill-container">
                  <div className="skill-name">Problem Solving</div>
                  <div className="progress-bar">
                    <div className="progress-fill" data-progress="90"></div>
                  </div>
                </div>
                <div className="skill-container">
                  <div className="skill-name">Leadership</div>
                  <div className="progress-bar">
                    <div className="progress-fill" data-progress="82"></div>
                  </div>
                </div>
                <div className="skill-container">
                  <div className="skill-name">Communication</div>
                  <div className="progress-bar">
                    <div className="progress-fill" data-progress="88"></div>
                  </div>
                </div>
                <div className="skill-container">
                  <div className="skill-name">Time Management</div>
                  <div className="progress-bar">
                    <div className="progress-fill" data-progress="72"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div style={{ 
          width: '33.33%', 
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          {renderCarComponent()}
          {showAbout && (
            <>
              <div className={`text-box intro ${showAbout ? 'show' : ''}`} style={{
                position: 'absolute',
                top: '15%',
                opacity: '0.85',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: '20px',
                borderRadius: '10px',
                color: 'white',
                width: '120%',
                textAlign: 'center',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h3>Hello!</h3>
                <p>I'm Krish Arora, a Junior Mathematics student at the University of British Columbia, Vancouver. 
                  With a passion for technology alongside a curious and eager to learn personality, I'm always looking 
                  for new opportunities to grow and expand my knowledge. I have some quite interesting projects that 
                  I'm proud of. Feel free to stick around and check them out!</p>
              </div>
            </>
          )}
        </div>
        <div style={{ 
          width: '33.33%', 
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
        </div>
      </div>

      {/* Menu Title */}
      <div style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        color: 'white',
        fontSize: '3rem',
        letterSpacing: '2px',
        userSelect: 'none',
        zIndex: 1,
        fontFamily: 'UnifrakturMaguntia, cursive',
        fontWeight: '400',
        fontStyle: 'normal'
      }}>
        main menu
      </div>

      <ImageGallery 
        isVisible={showAbout} 
        isHighlighted={isGalleryHighlighted} 
        onProjectChange={handleProjectChange}
      />

      <SkillsHoneycomb 
        isVisible={showAbout} 
        highlightedSkills={highlightedSkills}
      />

      {/* Profile Button */}
      <div className="welcome-container" style={{ top: '2rem', left: '2rem' }}>
        <button className="name" onClick={toggleMenu}>
          <img src="app/assets/prof.jpg" alt="Profile" className="profile-image" />
          <span className="text">Krish Arora</span>
          <div className="tire-track"></div>
        </button>
      </div>
      
      {/* Car Selection Buttons */}
      <div className={`car-selection-container ${isMenuOpen ? 'show' : ''}`}>
        <button 
          className={`car-select-button ${currentCar === 'F90' ? 'active' : ''}`} 
          onClick={() => setCurrentCar('F90')}
        >
          <img src="app/assets/BMW.png" alt="BMW" className="brand-logo" />
          <span>M5 F90</span>
          <div className="tire-track"></div>
        </button>
        <button 
          className={`car-select-button ${currentCar === 'E39' ? 'active' : ''}`} 
          onClick={() => setCurrentCar('E39')}
        >
          <img src="app/assets/BMW.png" alt="BMW" className="brand-logo" />
          <span>M5 E39</span>
          <div className="tire-track"></div>
        </button>
        <button 
          className={`car-select-button ${currentCar === 'R34' ? 'active' : ''}`} 
          onClick={() => setCurrentCar('R34')}
        >
          <img src="app/assets/nissan.png" alt="Nissan" className="brand-logo" />
          <span>GTR R34</span>
          <div className="tire-track"></div>
        </button>
      </div>
      
      {/* Bottom Menu */}
      <div className={`bottom-menu ${isMenuOpen ? 'show' : ''}`}>
        <div className="menu-item">
          <a onClick={handleAboutClick}>About</a>
          <div className="tire-track"></div>
        </div>
        <div className="menu-item">
          <a href='https://drive.google.com/file/d/1t8BJW9OKcWgaFLYp9LPgdLBqBviKpZ--/view?usp=sharing' target="_blank">Resume</a>
          <div className="tire-track"></div>
        </div>
        <div className="menu-item">
          <a onClick={handleProjectsClick}>Projects</a>
          <div className="tire-track"></div>
        </div>
        <div className="menu-item">
          <a href='mailto:krisharora088@icloud.com' target="_blank">Contact Me</a>
          <div className="tire-track"></div>
        </div>
      </div>
    </>
  );
}