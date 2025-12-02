import React, { useEffect, useMemo } from 'react';

export default function Particles() {
  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 50; i++) {
      const size = Math.random() * 6 + 2;
      arr.push({
        id: i,
        width: size,
        height: size,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 15,
        duration: Math.random() * 10 + 10
      });
    }
    return arr;
  }, []);

  return (
    <div className="particles" id="particles">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: `${p.width}px`,
            height: `${p.height}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`
          }}
        />
      ))}
    </div>
  );
}

