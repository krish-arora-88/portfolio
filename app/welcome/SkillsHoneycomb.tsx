import React from 'react';
import './SkillsHoneycomb.css';

interface SkillsHoneycombProps {
  isVisible: boolean;
  highlightedSkills?: string[];
}

export function SkillsHoneycomb({ isVisible, highlightedSkills = [] }: SkillsHoneycombProps) {
  if (!isVisible) return null;

  const isSkillHighlighted = (skillName: string) => {
    return highlightedSkills.includes(skillName);
  };

  return (
    <div className="skills-honeycomb">
      <div className="skills">
        <div className="container">
          <div className="honeycomb-grid">
            {/* First row */}
            <div className="honeycomb-row">
              <div className={`hexagon ${isSkillHighlighted('Java') ? 'highlighted' : ''}`}>
                <img src="app/assets/java.png" alt="Java" />
                <div className="skill-name">Java</div>
              </div>
              <div className={`hexagon ${isSkillHighlighted('JavaScript') ? 'highlighted' : ''}`}>
                <img src="app/assets/javascript.png" alt="JavaScript" />
                <div className="skill-name">JavaScript</div>
              </div>
              <div className={`hexagon ${isSkillHighlighted('TypeScript') ? 'highlighted' : ''}`}>
                <img src="app/assets/typescript.png" alt="TypeScript" />
                <div className="skill-name">TypeScript</div>
              </div>
              <div className={`hexagon ${isSkillHighlighted('Python') ? 'highlighted' : ''}`}>
                <img src="app/assets/python.png" alt="Python" />
                <div className="skill-name">Python</div>
              </div>
            </div>
            
            {/* Second row */}
            <div className="honeycomb-row staggered-row">
              <div className={`hexagon ${isSkillHighlighted('C++') ? 'highlighted' : ''}`}>
                <img src="app/assets/c++.svg" alt="C++" />
                <div className="skill-name">C++</div>
              </div>
              <div className={`hexagon ${isSkillHighlighted('Golang') ? 'highlighted' : ''}`}>
                <img src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Aqua.png" alt="Go" />
                <div className="skill-name">Golang</div>
              </div>
              <div className={`hexagon ${isSkillHighlighted('MySQL') ? 'highlighted' : ''}`}>
                <img src="app/assets/mysql.png" alt="MySQL" />
                <div className="skill-name">MySQL</div>
              </div>
            </div>
            
            {/* Third row */}
            <div className="honeycomb-row">
              <div className={`hexagon ${isSkillHighlighted('React') ? 'highlighted' : ''}`}>
                <img src="app/assets/reactjs.png" alt="React" />
                <div className="skill-name">React</div>
              </div>
              <div className={`hexagon ${isSkillHighlighted('HTML') ? 'highlighted' : ''}`}>
                <img src="app/assets/html.png" alt="HTML" />
                <div className="skill-name">HTML</div>
              </div>
              <div className={`hexagon ${isSkillHighlighted('CSS') ? 'highlighted' : ''}`}>
                <img src="app/assets/css.png" alt="CSS" />
                <div className="skill-name">CSS</div>
              </div>
              <div className={`hexagon ${isSkillHighlighted('Node.js') ? 'highlighted' : ''}`}>
                <img src="https://nodejs.org/static/images/logo.svg" alt="Node.js" />
                <div className="skill-name">Node.js</div>
              </div>
            </div>
            
            {/* Fourth row */}
            <div className="honeycomb-row staggered-row">
              <div className={`hexagon ${isSkillHighlighted('VS Code') ? 'highlighted' : ''}`}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="VSCode" />
                <div className="skill-name">VS Code</div>
              </div>
              <div className={`hexagon ${isSkillHighlighted('IntelliJ') ? 'highlighted' : ''}`}>
                <img src="app/assets/IntelliJ_IDEA_icon.svg" alt="IntelliJ IDEA" />
                <div className="skill-name">IntelliJ IDEA</div>
              </div>
              <div className={`hexagon ${isSkillHighlighted('Eclipse') ? 'highlighted' : ''}`}>
                <img src="app/assets/eclipse.png" alt="Eclipse" />
                <div className="skill-name">Eclipse</div>
              </div>
            </div>

            {/* Fifth row */}
            <div className="honeycomb-row">
              <div className={`hexagon ${isSkillHighlighted('AWS') ? 'highlighted' : ''}`}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
                <div className="skill-name">AWS</div>
              </div>
              <div className={`hexagon ${isSkillHighlighted('Azure') ? 'highlighted' : ''}`}>
                <img src="app/assets/azure.png" alt="Azure" />
                <div className="skill-name">Azure</div>
              </div>
              <div className={`hexagon ${isSkillHighlighted('Git') ? 'highlighted' : ''}`}>
                <img src="app/assets/git.png" alt="Git" />
                <div className="skill-name">Git</div>
              </div>
              <div className={`hexagon ${isSkillHighlighted('Shell') ? 'highlighted' : ''}`}>
                <img src="app/assets/shell.png" alt="Shell" />
                <div className="skill-name">Shell</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 