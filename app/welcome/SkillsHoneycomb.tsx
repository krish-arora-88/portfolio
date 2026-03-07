import React from 'react';
import './SkillsHoneycomb.css';

interface SkillsHoneycombProps {
  isVisible: boolean;
  highlightedSkills?: string[];
}

const skills = [
  // Row 1 — Frameworks & Runtimes
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
  { name: 'React Native', icon: '/assets/reactjs.png' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/5FA04E' },
  { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express/white' },

  // Row 2 — Languages & Core
  { name: 'TypeScript', icon: '/assets/typescript.png' },
  { name: 'Java', icon: '/assets/java.png' },
  { name: 'Spring Boot', icon: 'https://cdn.simpleicons.org/springboot/6DB33F' },

  // Row 3 — Data & Cloud
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/FF4438' },
  { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/DD2C00' },

  // Row 4 — Infrastructure & Tooling
  { name: 'Prisma', icon: 'https://cdn.simpleicons.org/prisma/white' },
  { name: 'Apache Kafka', icon: 'https://cdn.simpleicons.org/apachekafka/white' },
  { name: 'TailwindCSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },

  // Row 5 — Testing & Auth
  { name: 'Jest', icon: 'https://cdn.simpleicons.org/jest/C21325' },
  { name: 'Mocha', icon: 'https://cdn.simpleicons.org/mocha/8D6748' },
  { name: 'Chai', icon: 'https://cdn.simpleicons.org/chai/A30701' },
  { name: 'Passport.js', icon: 'https://cdn.simpleicons.org/passport/34E27A' },

  // Row 6 — AI & Design
  { name: 'OpenAI API', icon: '/assets/openai.svg' },
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
];

const rowSizes = [7, 6, 7];

export function SkillsHoneycomb({ isVisible, highlightedSkills = [] }: SkillsHoneycombProps) {
  if (!isVisible) return null;

  const hasHighlights = highlightedSkills.length > 0;

  const rows: (typeof skills)[] = [];
  let idx = 0;
  for (const size of rowSizes) {
    rows.push(skills.slice(idx, idx + size));
    idx += size;
  }

  return (
    <div className="skills-honeycomb">
      <div className="skills">
        <div className="container">
          <div className="honeycomb-grid">
            {rows.map((row, rowIdx) => {
              const baseDelay = rowSizes.slice(0, rowIdx).reduce((a, b) => a + b, 0);
              return (
                <div
                  key={rowIdx}
                  className={`honeycomb-row${rowIdx % 2 === 1 ? ' staggered-row' : ''}`}
                >
                  {row.map((skill, colIdx) => {
                    const isHighlighted = highlightedSkills.includes(skill.name);
                    return (
                      <div
                        key={skill.name}
                        className={`hexagon${isHighlighted ? ' highlighted' : ''}${hasHighlights && !isHighlighted ? ' dimmed' : ''}`}
                        style={{ '--delay': baseDelay + colIdx } as React.CSSProperties}
                      >
                        <img src={skill.icon} alt={skill.name} />
                        <div className="skill-name">{skill.name}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
