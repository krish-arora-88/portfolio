import { F90 } from './F90';
import { E39 } from './E39';
import { R34 } from './R34';
import { useState, useEffect } from 'react';
import './welcome.css';
import { SiVercel } from 'react-icons/si';
import { SkillsHoneycomb } from './SkillsHoneycomb';

type ViewState = 'home' | 'projects' | 'about' | 'contact';
type CarModel = 'F90' | 'E39' | 'R34';

const projects = [
  {
    title: 'DreamCar',
    description: 'AI-powered platform that generates personalized car recommendations based on user preferences, with real-time pricing and dealer matching.',
    image: '/assets/DreamCar.png',
    link: 'https://dreamcar-lovat.vercel.app/',
    skills: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'OpenAI API', 'Redis', 'TailwindCSS'],
  },
  {
    title: 'PetAdopt BC',
    description: 'Full-stack pet adoption platform connecting shelters with adopters across British Columbia, featuring secure authentication and search filters.',
    image: '/assets/PetAdoptionHomePage.png',
    link: 'https://pet-adoption-platform-two.vercel.app/',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Passport.js', 'Mocha', 'Chai'],
  },
  {
    title: 'Apex Go-Karting',
    description: 'Event-driven booking system for go-karting venues with real-time availability, built with microservices architecture and message queuing.',
    image: '/assets/Apex.png',
    link: 'https://apex-racing-gokarting.vercel.app/',
    skills: ['Spring Boot', 'Java', 'Next.js', 'Apache Kafka', 'Redis'],
  },
  {
    title: 'UBConnect',
    description: 'Mobile social app for university students to discover campus events, join clubs, and connect with peers in real-time.',
    image: '/assets/UBConnect.png',
    link: 'https://www.youtube.com/shorts/22sCW8aNNCk',
    skills: ['React Native', 'TypeScript', 'Figma', 'Firebase', 'Jest'],
  },
];

export function Welcome() {
  const [viewState, setViewState] = useState<ViewState>('home');
  const [currentCar, setCurrentCar] = useState<CarModel>('F90');
  const [projectIndex, setProjectIndex] = useState(0);
  const [highlightedSkills, setHighlightedSkills] = useState<string[]>([]);

  // Update highlighted skills when project changes
  useEffect(() => {
    if (viewState === 'projects') {
      setHighlightedSkills(projects[projectIndex].skills);
    } else {
      setHighlightedSkills([]);
    }
  }, [projectIndex, viewState]);

  // Spotlight position based on state
  const spotlightPositions: Record<ViewState, { x: string; y: string }> = {
    home: { x: '50%', y: '55%' },
    projects: { x: '70%', y: '50%' },
    about: { x: '30%', y: '50%' },
    contact: { x: '50%', y: '45%' },
  };

  const handleNavClick = (state: ViewState) => {
    setViewState(state === viewState ? 'home' : state);
  };

  const nextProject = () => {
    setProjectIndex((i) => (i + 1) % projects.length);
  };

  const prevProject = () => {
    setProjectIndex((i) => (i - 1 + projects.length) % projects.length);
  };

  const project = projects[projectIndex];

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

      <div
        className="showroom"
        style={{
          '--spotlight-x': spotlightPositions[viewState].x,
          '--spotlight-y': spotlightPositions[viewState].y,
        } as React.CSSProperties}
      >
        {/* Top bar */}
        <div className="showroom-topbar">
          <div className="showroom-name">Krish Arora</div>
          <nav className="showroom-nav">
            <button
              className={viewState === 'projects' ? 'active' : ''}
              onClick={() => handleNavClick('projects')}
            >
              Projects
            </button>
            <button
              className={viewState === 'about' ? 'active' : ''}
              onClick={() => handleNavClick('about')}
            >
              About
            </button>
            <button
              className={viewState === 'contact' ? 'active' : ''}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Main stage */}
        <div className="showroom-stage">
          {/* 3D Car */}
          <div className="car-stage" data-state={viewState}>
            <div className="car-wrapper">
              <div className={`car-instance ${currentCar === 'F90' ? 'active' : ''}`}>
                <F90 />
              </div>
              <div className={`car-instance ${currentCar === 'E39' ? 'active' : ''}`}>
                <E39 />
              </div>
              <div className={`car-instance ${currentCar === 'R34' ? 'active' : ''}`}>
                <R34 />
              </div>
            </div>
          </div>

          {/* Home tagline */}
          <div className={`panel panel-home ${viewState === 'home' ? 'visible' : ''}`}>
            <div className="home-tagline">Software Engineer · Creative Builder</div>
          </div>

          {/* Projects panel */}
          <div className={`panel panel-projects ${viewState === 'projects' ? 'visible' : ''}`}>
            <div className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.skills.map((skill) => (
                    <span key={skill} className="tech-pill">{skill}</span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Live
                </a>
              </div>
            </div>
            <div className="project-nav">
              <button onClick={prevProject}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="project-dots">
                {projects.map((_, i) => (
                  <span
                    key={i}
                    className={`project-dot ${i === projectIndex ? 'active' : ''}`}
                    onClick={() => setProjectIndex(i)}
                  />
                ))}
              </div>
              <button onClick={nextProject}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

          {/* Skills honeycomb in projects state */}
          <div className={`showroom-skills ${viewState === 'projects' ? 'visible' : ''}`}>
            <SkillsHoneycomb isVisible={viewState === 'projects'} highlightedSkills={highlightedSkills} />
          </div>

          {/* About panel */}
          <div className={`panel panel-about ${viewState === 'about' ? 'visible' : ''}`}>
            <div className="about-content">
              <h2>Building Things<br />That <span>Matter</span></h2>
              <p>
                I'm a Senior Mathematics student at the University of British Columbia with a
                deep passion for software engineering. I build full-stack applications that
                solve real problems — from AI-powered platforms to event-driven microservices.
              </p>
              <p>
                I thrive on learning new technologies, architecting clean systems, and
                shipping products that people actually use.
              </p>
              <div className="about-links">
                <a href="https://www.linkedin.com/in/krish--arora/" target="_blank" rel="noopener noreferrer" className="about-link">
                  <i className="fa-brands fa-linkedin"></i>
                  LinkedIn
                </a>
                <a href="https://github.com/krish-arora-88" target="_blank" rel="noopener noreferrer" className="about-link">
                  <i className="fa-brands fa-github"></i>
                  GitHub
                </a>
                <a href="https://drive.google.com/file/d/1obUiCDj8K6ntrpIBOsjba0V2CO9IEpBr/preview" target="_blank" rel="noopener noreferrer" className="about-link">
                  <i className="fas fa-file-alt"></i>
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Contact panel */}
          <div className={`panel panel-contact ${viewState === 'contact' ? 'visible' : ''}`}>
            <div className="contact-content">
              <h2>Let's Connect</h2>
              <a href="mailto:krisharora088@icloud.com" className="contact-email">
                krisharora088@icloud.com
              </a>
              <div className="contact-links">
                <a href="https://www.linkedin.com/in/krish--arora/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/krish-arora-88" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://vercel.com/krish-arora" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <SiVercel />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Car selector */}
        <div className="car-selector">
          <button
            className={currentCar === 'F90' ? 'active' : ''}
            onClick={() => setCurrentCar('F90')}
          >
            M5 F90
          </button>
          <button
            className={currentCar === 'E39' ? 'active' : ''}
            onClick={() => setCurrentCar('E39')}
          >
            M5 E39
          </button>
          <button
            className={currentCar === 'R34' ? 'active' : ''}
            onClick={() => setCurrentCar('R34')}
          >
            GTR R34
          </button>
        </div>
      </div>
    </>
  );
}
