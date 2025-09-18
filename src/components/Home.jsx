import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Technical animated background */}
      <div className="bg-tech" aria-hidden="true"></div>
      <div className="bg-aurora" aria-hidden="true"></div>

      <div className="container mx-auto  text-center flex flex-col items-center justify-center h-screen relative">
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

        {/* Tech marquee */}

        <Link
          to="/loading"
          className="px-8 py-3 bg-white hover:bg-gray-200 rounded-full text-black font-semibold text-lg tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Launch Website
        </Link>

        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          /* Subtle animated grid */
          .bg-tech {
            position: absolute;
            inset: -50% -50% -50% -50%;
            background: radial-gradient(
                circle at 20% 20%,
                rgba(0, 255, 170, 0.08),
                transparent 35%
              ),
              radial-gradient(
                circle at 80% 30%,
                rgba(0, 180, 255, 0.08),
                transparent 35%
              ),
              radial-gradient(
                circle at 40% 80%,
                rgba(255, 0, 200, 0.06),
                transparent 35%
              ),
              linear-gradient(transparent 0 0), linear-gradient(transparent 0 0);
            background-size: 100% 100%, 100% 100%, 100% 100%, 40px 40px,
              40px 40px;
            background-image: radial-gradient(
                circle at 20% 20%,
                rgba(0, 255, 170, 0.08),
                transparent 35%
              ),
              radial-gradient(
                circle at 80% 30%,
                rgba(0, 180, 255, 0.08),
                transparent 35%
              ),
              radial-gradient(
                circle at 40% 80%,
                rgba(255, 0, 200, 0.06),
                transparent 35%
              ),
              linear-gradient(#0f172a 1px, transparent 1px),
              linear-gradient(90deg, #0f172a 1px, transparent 1px);
            transform: perspective(800px) rotateX(60deg) translateY(-20%);
            animation: grid-pan 20s linear infinite;
            opacity: 1;
          }
          @keyframes grid-pan {
            0% {
              background-position: 0 0, 0 0, 0 0, 0 0, 0 0;
            }
            100% {
              background-position: 0 0, 0 0, 0 0, 0 200%, 200% 0;
            }
          }

          /* Aurora blobs */
          .bg-aurora {
            position: absolute;
            inset: 0;
            background: radial-gradient(
                600px 300px at 10% 10%,
                rgba(0, 255, 170, 0.12),
                transparent 60%
              ),
              radial-gradient(
                500px 250px at 90% 20%,
                rgba(0, 180, 255, 0.12),
                transparent 60%
              ),
              radial-gradient(
                500px 250px at 40% 90%,
                rgba(255, 0, 200, 0.1),
                transparent 60%
              );
            filter: blur(20px);
            animation: aurora-move 18s ease-in-out infinite alternate;
            pointer-events: none;
          }
          @keyframes aurora-move {
            from {
              transform: translateY(-2%) translateX(-1%);
            }
            to {
              transform: translateY(2%) translateX(1%);
            }
          }

          /* Marquee */
          .marquee {
            width: 100%;
            overflow: hidden;
          }
          .marquee__track {
            display: inline-flex;
            gap: 24px;
            min-width: 200%;
            white-space: nowrap;
            animation: marquee 18s linear infinite;
            color: #8bffdf;
            font-family: "Fira Code", monospace;
            opacity: 0.8;
          }
          .marquee__track span {
            padding: 0 8px;
            letter-spacing: 0.06em;
          }
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          /* Code card */
          .code-card {
            background: #0b0f14;
            border: 1px solid #0e1a24;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
          }
          .code-card__header {
            display: flex;
            gap: 8px;
            padding: 10px 12px;
            background: #0f172a;
            border-bottom: 1px solid #0e1a24;
          }
          .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
          }
          .dot.red {
            background: #ff5f56;
          }
          .dot.yellow {
            background: #ffbd2e;
          }
          .dot.green {
            background: #27c93f;
          }
          .code-card__body {
            margin: 0;
            padding: 16px;
            color: #9ef7d9;
            font-family: "Fira Code", monospace;
            font-size: 14px;
            line-height: 1.6;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Home;
