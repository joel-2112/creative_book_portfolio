import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * Web Audio API synthesizer for realistic physical paper rustles,
 * book opening sounds, and pencil taps.
 * Zero external audio files required — 100% reliable & zero latency!
 */
export function useSoundEffects() {
  // Sound must be OFF by default per requirements
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioCtxRef = useRef(null);

  // Initialize or resume AudioContext
  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  // Synthesize realistic paper flip rustle sound
  const playPageTurn = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const bufferSize = ctx.sampleRate * 0.28; // 280ms duration
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);

      // Generate pinkish noise with subtle friction bursts
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        const pink = b0 + b1 + b2 + white * 0.5362;
        // Envelope shaping: soft attack, peak in middle, airy decay
        const progress = i / bufferSize;
        const envelope = Math.sin(progress * Math.PI) * Math.pow(1 - progress, 0.8);
        output[i] = pink * envelope * 0.35;
      }

      const noiseNode = ctx.createBufferSource();
      noiseNode.buffer = buffer;

      // Filter to mimic paper thickness & airy slide
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, now);
      filter.frequency.exponentialRampToValueAtTime(800, now + 0.25);
      filter.Q.setValueAtTime(1.2, now);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.27);

      noiseNode.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noiseNode.start(now);
    } catch {
      // Ignore audio failure gracefully
    }
  }, [soundEnabled, getAudioContext]);

  // Synthesize hardcover open sound
  const playBookOpen = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      
      // Low friction thump for hardcover settling
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(110, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.3);
      oscGain.gain.setValueAtTime(0.25, now);
      oscGain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.connect(oscGain);
      oscGain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.3);

      // Paper slide swoosh
      playPageTurn();
    } catch {
      // Graceful fallback
    }
  }, [soundEnabled, getAudioContext, playPageTurn]);

  // Synthesize pencil tap / scribble click
  const playPencilClick = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(950, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.05);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // Graceful fallback
    }
  }, [soundEnabled, getAudioContext]);

  const toggleSound = useCallback(() => {
    setSoundEnabled(prev => {
      const next = !prev;
      if (next) {
        // Unlock AudioContext on explicit user gesture
        getAudioContext();
      }
      return next;
    });
  }, [getAudioContext]);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return {
    soundEnabled,
    toggleSound,
    playPageTurn,
    playBookOpen,
    playPencilClick
  };
}
