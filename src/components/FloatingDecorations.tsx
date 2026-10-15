import React from 'react';

export const FloatingDecorations: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* Soft gradient blobs for dreamy pastel pink & blue ambiance */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-200/50 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-sky-200/50 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl" />

      {/* Floating subtle pastel stars & sparkles */}
      {[
        { top: '12%', left: '8%', size: 'text-lg', delay: '0s', dur: '7s', color: 'text-pink-300' },
        { top: '22%', left: '88%', size: 'text-xl', delay: '2s', dur: '8s', color: 'text-sky-300' },
        { top: '68%', left: '6%', size: 'text-base', delay: '4s', dur: '9s', color: 'text-rose-200' },
        { top: '82%', left: '90%', size: 'text-2xl', delay: '1s', dur: '7.5s', color: 'text-pink-200' },
        { top: '45%', left: '94%', size: 'text-base', delay: '3s', dur: '6s', color: 'text-blue-300' },
        { top: '15%', left: '75%', size: 'text-lg', delay: '5s', dur: '8.5s', color: 'text-pink-200' },
        { top: '88%', left: '20%', size: 'text-lg', delay: '2.5s', dur: '7s', color: 'text-sky-200' },
      ].map((item, idx) => (
        <div
          key={idx}
          className={`absolute ${item.color} ${item.size} opacity-60 animate-pulse`}
          style={{
            top: item.top,
            left: item.left,
            animationDuration: item.dur,
            animationDelay: item.delay,
          }}
        >
          ✦
        </div>
      ))}

      {/* Little pastel sparkles / star twinkling */}
      {[
        { top: '18%', left: '25%', size: 12 },
        { top: '35%', left: '8%', size: 14 },
        { top: '55%', left: '90%', size: 16 },
        { top: '75%', left: '80%', size: 12 },
        { top: '30%', left: '80%', size: 10 },
      ].map((star, idx) => (
        <div
          key={`star-${idx}`}
          className="absolute text-yellow-300/70 animate-ping"
          style={{
            top: star.top,
            left: star.left,
            animationDuration: `${3 + idx}s`,
            animationDelay: `${idx * 0.8}s`,
          }}
        >
          ✦
        </div>
      ))}
    </div>
  );
};
