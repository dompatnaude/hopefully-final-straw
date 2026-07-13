"use client";

export default function DnaHelixBackground() {
  const strands = Array.from({ length: 12 });

  return (
    <div className="dna-wrap pointer-events-none absolute inset-0 overflow-hidden">
      <div className="dna-container">
        {strands.map((_, i) => (
          <div className="dna-strand" key={i}>
            <div className="dna-node dna-node-top" />
            <div className="dna-node dna-node-bottom" />
          </div>
        ))}
      </div>

      <style jsx>{`
        .dna-wrap {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .dna-container {
          position: relative;
          right: -60px;
          width: 400px;
          height: 200px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transform: rotate(-15deg);
          opacity: 0.55;
        }
        .dna-strand {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          align-items: center;
        }
        .dna-strand::before {
          content: "";
          position: absolute;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, #0055ff, #00d4ff);
          z-index: 1;
          opacity: 0.4;
          animation: dnaBuildBar 6s infinite ease-in-out;
        }
        .dna-node {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          position: relative;
          z-index: 2;
          animation: dnaRotate 6s infinite ease-in-out;
        }
        .dna-node-top {
          background: radial-gradient(circle at 30% 30%, #2277ff, #0033aa);
          box-shadow: 0 4px 10px rgba(0, 51, 170, 0.3);
        }
        .dna-node-bottom {
          background: radial-gradient(circle at 30% 30%, #00f0ff, #0077aa);
          box-shadow: 0 4px 10px rgba(0, 240, 255, 0.3);
          animation-delay: -3s !important;
        }
        .dna-strand:nth-child(1) .dna-node { animation-delay: 0s; }
        .dna-strand:nth-child(2) .dna-node { animation-delay: -0.4s; }
        .dna-strand:nth-child(3) .dna-node { animation-delay: -0.8s; }
        .dna-strand:nth-child(4) .dna-node { animation-delay: -1.2s; }
        .dna-strand:nth-child(5) .dna-node { animation-delay: -1.6s; }
        .dna-strand:nth-child(6) .dna-node { animation-delay: -2.0s; }
        .dna-strand:nth-child(7) .dna-node { animation-delay: -2.4s; }
        .dna-strand:nth-child(8) .dna-node { animation-delay: -2.8s; }
        .dna-strand:nth-child(9) .dna-node { animation-delay: -3.2s; }
        .dna-strand:nth-child(10) .dna-node { animation-delay: -3.6s; }
        .dna-strand:nth-child(11) .dna-node { animation-delay: -4.0s; }
        .dna-strand:nth-child(12) .dna-node { animation-delay: -4.4s; }
        .dna-strand:nth-child(1)::before { animation-delay: 0s; }
        .dna-strand:nth-child(2)::before { animation-delay: -0.4s; }
        .dna-strand:nth-child(3)::before { animation-delay: -0.8s; }
        .dna-strand:nth-child(4)::before { animation-delay: -1.2s; }
        .dna-strand:nth-child(5)::before { animation-delay: -1.6s; }
        .dna-strand:nth-child(6)::before { animation-delay: -2.0s; }
        .dna-strand:nth-child(7)::before { animation-delay: -2.4s; }
        .dna-strand:nth-child(8)::before { animation-delay: -2.8s; }
        .dna-strand:nth-child(9)::before { animation-delay: -3.2s; }
        .dna-strand:nth-child(10)::before { animation-delay: -3.6s; }
        .dna-strand:nth-child(11)::before { animation-delay: -4.0s; }
        .dna-strand:nth-child(12)::before { animation-delay: -4.4s; }
        @keyframes dnaRotate {
          0%, 100% { transform: translateY(0) scale(1.3); z-index: 3; }
          50% { transform: translateY(168px) scale(0.7); opacity: 0.6; z-index: 1; }
        }
        @keyframes dnaBuildBar {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.1); }
        }
        @media (max-width: 1024px) {
          .dna-wrap { display: none; }
        }
      `}</style>
    </div>
  );
}
