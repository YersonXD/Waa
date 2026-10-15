import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const MusicBox: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);
  const stepRef = useRef<number>(0);

  // Sweet, emotional pentatonic / music box melody notes in Hz
  // Chord progression: C - G/B - Am - F (gentle, heartfelt, romantic)
  const notes = [
    // Phrase 1 (C maj arpeggio)
    523.25, 659.25, 783.99, 1046.5, 783.99, 659.25,
    // Phrase 2 (G maj)
    493.88, 587.33, 783.99, 987.77, 783.99, 587.33,
    // Phrase 3 (A min)
    440.00, 523.25, 659.25, 880.00, 659.25, 523.25,
    // Phrase 4 (F maj)
    349.23, 440.00, 523.25, 698.46, 523.25, 440.00,
    // Melody sweet variation
    659.25, 783.99, 880.00, 1046.5, 880.00, 783.99,
    587.33, 659.25, 783.99, 880.00, 783.99, 659.25,
  ];

  const playNote = (freq: number) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Gentle music box timbre (sine wave with slight overtone)
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    // Warm envelope
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.4);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 1.45);
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setIsPlaying(false);
    } else {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      setIsPlaying(true);

      // Play first note immediately
      playNote(notes[stepRef.current % notes.length]);
      stepRef.current += 1;

      // Gentle pace (380ms per note)
      intervalRef.current = window.setInterval(() => {
        playNote(notes[stepRef.current % notes.length]);
        stepRef.current += 1;
      }, 420);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={togglePlay}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-md border border-pink-200 text-pink-600 hover:text-pink-700 hover:bg-white transition-all text-xs font-semibold hover:shadow-lg active:scale-95"
      title={isPlaying ? 'Pausar música de fondo' : 'Poner música suave'}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-4 h-4 animate-bounce text-pink-500" />
          <span className="hidden sm:inline">Música sonando</span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
          </span>
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4 text-slate-400" />
          <Music className="w-3.5 h-3.5 text-pink-400" />
          <span className="hidden sm:inline text-slate-500">Tocar música suave</span>
        </>
      )}
    </button>
  );
};
