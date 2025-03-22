import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Loading = () => {
  const [loadingText, setLoadingText] = useState('Installing dependencies...');
  const [deploymentLogs, setDeploymentLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  
  const loadingStates = [
    'Installing dependencies...',
    'Building project...',
    'Optimizing assets...',
    'Deploying to server...',
    'Almost there...'
  ];

  const logMessages = [
    'Initializing deployment process...',
    'Checking environment variables...',
    'Validating configuration files...',
    'Starting build process...',
    'Compiling source code...',
    'Running tests...',
    'Optimizing bundle size...',
    'Preparing deployment package...',
    'Uploading assets...',
    'Configuring server...',
    'Starting application...',
    'Running health checks...'
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % loadingStates.length;
      setLoadingText(loadingStates[currentIndex]);
      setProgress((currentIndex + 1) * (100 / loadingStates.length));
      
      // Redirect when loading completes
      if (currentIndex === loadingStates.length - 1) {
        clearInterval(interval);
        setTimeout(() => {
          window.location.href = 'https://intelligentsiaclub.vercel.app/';
        }, 1000);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    const logInterval = setInterval(() => {
      if (index < logMessages.length) {
        setDeploymentLogs(prev => [...prev, logMessages[index]]);
        index++;
      }
    }, 800);

    return () => clearInterval(logInterval);
  }, []);

  return (
    <div className="loading-container">
      <div className="progress-bar">
        <div className="progress-fill" style={{width: `${progress}%`}}></div>
      </div>
      
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-button red"></div>
          <div className="terminal-button yellow"></div>
          <div className="terminal-button green"></div>
        </div>
        <div className="terminal-content">
          <div className="terminal-text">
            $ {loadingText}
            <span className="blinking-cursor">_</span>
          </div>
        </div>
      </div>
      
      <div className="logs-container">
        {deploymentLogs.map((log, index) => (
          <div key={index} className="log-entry">
            <span className="log-time">{new Date().toLocaleTimeString()}</span>
            <span className="log-symbol">→</span>
            {log}
          </div>
        ))}
      </div>

      <style jsx>{`
        .loading-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          width: 100%;
          background-color: #0a0a0a;
          padding: 20px;
        }
        
        .progress-bar {
          width: 80%;
          max-width: 600px;
          height: 4px;
          background-color: #2a2a2a;
          border-radius: 2px;
          margin-bottom: 20px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background-color: #00ff00;
          transition: width 0.5s ease-out;
        }
        
        .terminal {
          background-color: #1a1a1a;
          border-radius: 8px;
          width: 80%;
          max-width: 600px;
          margin-bottom: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          overflow: hidden;
        }
        
        .terminal-header {
          background-color: #2a2a2a;
          padding: 10px;
          display: flex;
          gap: 8px;
        }
        
        .terminal-button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        
        .terminal-button.red { background-color: #ff5f56; }
        .terminal-button.yellow { background-color: #ffbd2e; }
        .terminal-button.green { background-color: #27c93f; }
        
        .terminal-content {
          padding: 20px;
        }
        
        .terminal-text {
          color: #00ff00;
          font-family: 'Fira Code', monospace;
          font-size: 16px;
          line-height: 1.5;
        }
        
        .blinking-cursor {
          animation: blink 1s step-end infinite;
          margin-left: 4px;
        }
        
        .logs-container {
          width: 80%;
          max-width: 600px;
          height: 300px;
          overflow-y: auto;
          background-color: #1a1a1a;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        
        .log-entry {
          color: #b4b4b4;
          font-family: 'Fira Code', monospace;
          font-size: 14px;
          margin-bottom: 8px;
          animation: slideUp 0.5s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
          display: flex;
          gap: 10px;
          align-items: center;
        }
        
        .log-time {
          color: #666;
          font-size: 12px;
        }
        
        .log-symbol {
          color: #00ff00;
        }
        
        @keyframes blink {
          50% { opacity: 0; }
        }
        
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }

        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #444;
        }
      `}</style>
    </div>
  )
}

export default Loading