import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const [loadingText, setLoadingText] = useState("Installing dependencies...");
  const [deploymentLogs, setDeploymentLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [confettiCount, setConfettiCount] = useState(0);
  const navigate = useNavigate();

  const loadingStates = [
    "Installing dependencies...",
    "Building project...",
    "Optimizing assets...",
    "Deploying to server...",
    "Almost there...",
  ];

  const logMessages = [
    "Initializing deployment process...",
    "Checking environment variables...",
    "Validating configuration files...",
    "Resolving node modules...",
    "Lockfile up to date.",
    "Auditing packages for vulnerabilities...",
    "No vulnerabilities found.",
    "Starting build process...",
    "Compiling source code...",
    "Transpiling JSX...",
    "Tree-shaking unused modules...",
    "Generating source maps...",
    "Minifying CSS and JS...",
    "Inlining critical CSS...",
    "Optimizing images and SVGs...",
    "Splitting vendor and app chunks...",
    "Generating service worker...",
    "Running tests...",
    "All tests passed.",
    "Preparing deployment package...",
    "Compressing artifacts (brotli/gzip)...",
    "Uploading assets to CDN...",
    "Invalidating CDN cache...",
    "Configuring server...",
    "Migrating database...",
    "Seeding initial data...",
    "Starting application...",
    "Running health checks...",
    "Deployment verified.",
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % loadingStates.length;
      setLoadingText(loadingStates[currentIndex]);
      setProgress((currentIndex + 1) * (100 / loadingStates.length));

      if (currentIndex === loadingStates.length - 1) {
        clearInterval(interval);
        setTimeout(() => {
          setShowCelebration(true);
          setConfettiCount(140);
        }, 800);
      }
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    const logInterval = setInterval(() => {
      if (index < logMessages.length) {
        setDeploymentLogs((prev) => [...prev, logMessages[index]]);
        index++;
      }
    }, 800);

    return () => clearInterval(logInterval);
  }, []);

  return (
    <div className="loading-container">
      {/* Animated matrix/particle background */}
      <div className="matrix-bg" aria-hidden="true"></div>
      <div className="glow-bg" aria-hidden="true"></div>
      {/* Floating doodles */}
      <div className="doodles" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className={`doodle d${i % 6}`}
            style={{
              left: `${(i * 8 + 5) % 100}%`,
              animationDelay: `${(i % 5) * 1.2}s`,
              animationDuration: `${12 + (i % 4) * 2}s`,
            }}
          >
            {["{ }", "</>", "API", "GET", "POST", "CDN"][i % 6]}
          </span>
        ))}
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="terminal enhanced">
        <div className="terminal-header">
          <div className="terminal-button red"></div>
          <div className="terminal-button yellow"></div>
          <div className="terminal-button green"></div>
        </div>
        <div className="terminal-content">
          <div className="terminal-text">
            <span className="prompt">deploy@node</span>:
            <span className="path">~/app</span>$ {loadingText}
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

      {/* Celebration overlay */}
      {showCelebration && (
        <div className="celebrate">
          <div className="animate-float">
            <img
              className="w-80  object-contain pl-20  hover:scale-105 transition-transform duration-300"
              src="/samyak.svg"
              alt="Samyak"
            />
            <img
              className="w-96  mb-8 object-contain  hover:scale-105 transition-transform duration-300"
              src="/logo.png"
              alt="Samyak"
            />
          </div>

          <p className="celebrate-sub">
            Deployment successful. Your app is live.
          </p>
          <div className="celebrate-actions">
            <a
              href="https://klsamyak.in/"
              target="_blank"
              rel="noreferrer"
              className="celebrate-btn"
            >
              Open{" "}
            </a>
            <a href="/" className="celebrate-btn alt">
              Go Home
            </a>
          </div>
          <div className="confetti-layer" aria-hidden="true">
            {Array.from({ length: confettiCount }).map((_, i) => (
              <span
                key={i}
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 0.8}s`,
                  animationDuration: `${3.2 + Math.random() * 1.8}s`,
                  backgroundColor: [
                    "#00ff88",
                    "#00d4ff",
                    "#ff5f56",
                    "#ffbd2e",
                    "#27c93f",
                  ][i % 5],
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .loading-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          width: 100%;
          background-color: #05070a;
          padding: 20px;
          position: relative;
          overflow: hidden;
        }

        .matrix-bg {
          position: absolute;
          width: 100%;
          inset: 0;
          background: repeating-linear-gradient(
              to bottom,
              rgba(0, 255, 140, 0.05) 0px,
              rgba(0, 255, 140, 0.05) 1px,
              transparent 1px,
              transparent 24px
            ),
            repeating-linear-gradient(
              to right,
              rgba(0, 255, 140, 0.03) 0px,
              rgba(0, 255, 140, 0.03) 1px,
              transparent 1px,
              transparent 24px
            );
          animation: gridScroll 18s linear infinite;
          opacity: 0.3;
        }
        @keyframes gridScroll {
          from {
            background-position: 0 0, 0 0;
          }
          to {
            background-position: 0 200%, 200% 0;
          }
        }

        .glow-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(
              500px 300px at 15% 15%,
              rgba(0, 255, 140, 0.12),
              transparent 60%
            ),
            radial-gradient(
              600px 300px at 85% 25%,
              rgba(0, 180, 255, 0.1),
              transparent 60%
            ),
            radial-gradient(
              600px 300px at 50% 85%,
              rgba(180, 0, 255, 0.08),
              transparent 60%
            );
          filter: blur(18px);
          pointer-events: none;
          animation: glowMove 20s ease-in-out infinite alternate;
        }
        @keyframes glowMove {
          from {
            transform: translateY(-1%);
          }
          to {
            transform: translateY(1%);
          }
        }

        .progress-bar {
          width: 80%;
          max-width: 600px;
          height: 4px;
          background-color: #0e1a24;
          border-radius: 2px;
          margin-bottom: 20px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00ff88, #00d4ff);
          transition: width 0.5s ease-out;
        }

        .terminal {
          background-color: #0b0f14;
          border-radius: 8px;
          width: 80%;
          max-width: 600px;
          margin-bottom: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.45);
          overflow: hidden;
          border: 1px solid #0e1a24;
        }
        .terminal.enhanced {
          backdrop-filter: blur(6px);
        }

        .terminal-header {
          background-color: #0f172a;
          padding: 10px;
          display: flex;
          gap: 8px;
          border-bottom: 1px solid #0e1a24;
        }

        .terminal-button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .terminal-button.red {
          background-color: #ff5f56;
        }
        .terminal-button.yellow {
          background-color: #ffbd2e;
        }
        .terminal-button.green {
          background-color: #27c93f;
        }

        .terminal-content {
          padding: 20px;
        }

        .terminal-text {
          color: #9ef7d9;
          font-family: "Fira Code", monospace;
          font-size: 16px;
          line-height: 1.5;
        }
        .terminal-text .prompt {
          color: #00ff88;
        }
        .terminal-text .path {
          color: #00d4ff;
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
          background-color: #0b0f14;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.45);
          border: 1px solid #0e1a24;
        }

        .log-entry {
          color: #bdeee0;
          font-family: "Fira Code", monospace;
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
          color: #6b86a1;
          font-size: 12px;
        }

        .log-symbol {
          color: #00ff88;
        }

        /* Doodles */
        .doodles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .doodle {
          position: absolute;
          top: 110%;
          color: #224b43;
          font-family: "Fira Code", monospace;
          font-size: 12px;
          opacity: 0.6;
          animation-name: doodleFloat;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes doodleFloat {
          from {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          to {
            transform: translateY(-220%) translateX(-20px) rotate(12deg);
          }
        }
        .d0 {
          color: #1aa37a;
        }
        .d1 {
          color: #167e9c;
        }
        .d2 {
          color: #9c5bd6;
        }
        .d3 {
          color: #ffbd2e;
        }
        .d4 {
          color: #27c93f;
        }
        .d5 {
          color: #00d4ff;
        }

        /* Celebration overlay */
        .celebrate {
          position: fixed;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: rgba(5, 7, 10, 0.7);
          backdrop-filter: blur(6px);
          z-index: 20;
          text-align: center;
        }
        .celebrate-logo {
          width: 140px;
          height: 140px;
          margin-bottom: 14px;
          filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.35));
        }
        .celebrate-title {
          color: #eafff7;
          font-size: 48px;
          font-weight: 600;
          margin: 8px 0;
          letter-spacing: 0.02em;
        }
        .celebrate-sub {
          color: #9fd6c5;
          font-size: 14px;
          margin-bottom: 18px;
        }
        .celebrate-actions {
          display: flex;
          gap: 12px;
        }
        .celebrate-btn {
          display: inline-block;
          padding: 10px 14px;
          border-radius: 999px;
          background: #eafff7;
          color: #041312;
          text-decoration: none;
          font-weight: 600;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }
        .celebrate-btn.alt {
          background: transparent;
          border: 1px solid #1f9b79;
          color: #9ef7d9;
        }
        .confetti-layer {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .confetti {
          position: absolute;
          top: -10px;
          width: 8px;
          height: 14px;
          border-radius: 2px;
          animation: confettiFall linear forwards;
        }
        @keyframes confettiFall {
          to {
            transform: translateY(110vh) rotate(340deg);
            opacity: 0.9;
          }
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
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
  );
};

export default Loading;
