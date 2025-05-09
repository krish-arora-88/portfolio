import type { Route } from "./+types/maintenance";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Maintenance - Krish Arora" },
    { name: "description", content: "Portfolio under maintenance" },
  ];
}

export default function Maintenance() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(45deg, #1a202c, #2d3748)',
      color: 'white',
      padding: '2rem',
      textAlign: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '600px',
        padding: '3rem',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '1rem',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '1.5rem',
          background: 'linear-gradient(45deg, #ff3e3e, #ff9f1c)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold'
        }}>
          🛠️ Under Maintenance
        </h1>
        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.6',
          marginBottom: '2rem',
          color: 'rgba(255, 255, 255, 0.9)'
        }}>
          I'm currently updating my portfolio to bring you an even better experience.
          Please check back shortly!
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center'
        }}>
          <a href="https://www.linkedin.com/in/krish--arora/" 
             target="_blank" 
             rel="noopener noreferrer"
             style={{
               padding: '0.75rem 1.5rem',
               background: 'rgba(255, 255, 255, 0.1)',
               borderRadius: '0.5rem',
               color: 'white',
               textDecoration: 'none',
               transition: 'all 0.3s ease',
               border: '1px solid rgba(255, 255, 255, 0.2)'
             }}
             onMouseOver={(e) => {
               e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
               e.currentTarget.style.transform = 'translateY(-2px)';
             }}
             onMouseOut={(e) => {
               e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
               e.currentTarget.style.transform = 'translateY(0)';
             }}>
            Connect on LinkedIn
          </a>
          <a href="https://github.com/krish-arora-88" 
             target="_blank" 
             rel="noopener noreferrer"
             style={{
               padding: '0.75rem 1.5rem',
               background: 'rgba(255, 255, 255, 0.1)',
               borderRadius: '0.5rem',
               color: 'white',
               textDecoration: 'none',
               transition: 'all 0.3s ease',
               border: '1px solid rgba(255, 255, 255, 0.2)'
             }}
             onMouseOver={(e) => {
               e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
               e.currentTarget.style.transform = 'translateY(-2px)';
             }}
             onMouseOut={(e) => {
               e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
               e.currentTarget.style.transform = 'translateY(0)';
             }}>
            Visit GitHub
          </a>
        </div>
      </div>
    </div>
  );
} 