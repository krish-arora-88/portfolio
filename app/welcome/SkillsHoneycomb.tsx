import React from 'react';
import './SkillsHoneycomb.css';

interface SkillsHoneycombProps {
  isVisible: boolean;
}

export function SkillsHoneycomb({ isVisible }: SkillsHoneycombProps) {
  if (!isVisible) return null;

  return (
    <div className="skills-honeycomb">
      <div className="skills">
        <div className="container">
          <div className="honeycomb-grid">
            {/* First row */}
            <div className="honeycomb-row">
              <div className="hexagon">
                <img src="app/assets/java.png" alt="Java" />
                <div className="skill-name">Java</div>
              </div>
              <div className="hexagon">
                <img src="app/assets/javascript.png" alt="JavaScript" />
                <div className="skill-name">JavaScript</div>
              </div>
              <div className="hexagon">
                <img src="app/assets/typescript.png" alt="TypeScript" />
                <div className="skill-name">TypeScript</div>
              </div>
              <div className="hexagon">
                <img src="app/assets/python.png" alt="Python" />
                <div className="skill-name">Python</div>
              </div>
            </div>
            
            {/* Second row */}
            <div className="honeycomb-row staggered-row">
              <div className="hexagon">
                <img src="app/assets/c++.svg" alt="C++" />
                <div className="skill-name">C++</div>
              </div>
              <div className="hexagon">
                <img src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Aqua.png" alt="Go" />
                <div className="skill-name">Golang</div>
              </div>
              <div className="hexagon">
                <img src="app/assets/git.png" alt="Git" />
                <div className="skill-name">Git</div>
              </div>
            </div>
            
            {/* Third row */}
            <div className="honeycomb-row">
              <div className="hexagon">
                <img src="app/assets/reactjs.png" alt="React" />
                <div className="skill-name">React</div>
              </div>
              <div className="hexagon">
                <img src="app/assets/html.png" alt="HTML" />
                <div className="skill-name">HTML</div>
              </div>
              <div className="hexagon">
                <img src="app/assets/css.png" alt="CSS" />
                <div className="skill-name">CSS</div>
              </div>
              <div className="hexagon">
                <img src="app/assets/mysql.png" alt="MySQL" />
                <div className="skill-name">MySQL</div>
              </div>
            </div>
            
            {/* Fourth row */}
            <div className="honeycomb-row staggered-row">
              <div className="hexagon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="VSCode" />
                <div className="skill-name">VS Code</div>
              </div>
              <div className="hexagon">
                <img src="https://nodejs.org/static/images/logo.svg" alt="Node.js" />
                <div className="skill-name">Node.js</div>
              </div>
              <div className="hexagon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
                <div className="skill-name">AWS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 