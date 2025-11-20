import { useCallback, useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine, ISourceOptions } from '@tsparticles/engine';

export type ParticleEffectType = 'confetti' | 'goldCoins' | 'sparkles';

interface ParticleEffectsProps {
  type: ParticleEffectType;
  trigger: boolean;
  onComplete?: () => void;
}

export function ParticleEffects({ type, trigger, onComplete }: ParticleEffectsProps) {
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    });
  }, []);

  const particlesLoaded = useCallback(async () => {
    if (onComplete) {
      setTimeout(onComplete, 3000); // Auto-complete after 3 seconds
    }
  }, [onComplete]);

  const options: ISourceOptions = useMemo(() => {
    if (type === 'confetti') {
      return {
        key: 'confetti',
        fullScreen: { enable: false },
        fpsLimit: 120,
        particles: {
          number: {
            value: 0,
          },
          color: {
            value: ['#FFD700', '#FFA500', '#FF6347', '#FF1493', '#9370DB'],
          },
          shape: {
            type: ['circle', 'square'],
          },
          opacity: {
            value: { min: 0, max: 1 },
            animation: {
              enable: true,
              speed: 2,
              startValue: 'max',
              destroy: 'min',
            },
          },
          size: {
            value: { min: 3, max: 8 },
          },
          life: {
            duration: {
              sync: true,
              value: 3,
            },
            count: 1,
          },
          move: {
            enable: true,
            gravity: {
              enable: true,
              acceleration: 20,
            },
            speed: { min: 25, max: 45 },
            decay: 0.05,
            direction: 'none',
            random: true,
            straight: false,
            outModes: {
              default: 'destroy',
              top: 'none',
            },
          },
          rotate: {
            value: {
              min: 0,
              max: 360,
            },
            direction: 'random',
            move: true,
            animation: {
              enable: true,
              speed: 60,
            },
          },
          tilt: {
            direction: 'random',
            enable: true,
            move: true,
            value: {
              min: 0,
              max: 360,
            },
            animation: {
              enable: true,
              speed: 60,
            },
          },
          roll: {
            darken: {
              enable: true,
              value: 25,
            },
            enable: true,
            speed: {
              min: 15,
              max: 25,
            },
          },
          wobble: {
            distance: 30,
            enable: true,
            move: true,
            speed: {
              min: -15,
              max: 15,
            },
          },
        },
        emitters: {
          position: {
            x: 50,
            y: 30,
          },
          rate: {
            quantity: 30,
            delay: 0.15,
          },
          size: {
            width: 100,
            height: 0,
          },
          life: {
            count: 1,
            duration: 0.1,
          },
        },
      };
    } else if (type === 'goldCoins') {
      return {
        key: 'goldCoins',
        fullScreen: { enable: false },
        fpsLimit: 120,
        particles: {
          number: {
            value: 0,
          },
          color: {
            value: '#FFD700',
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: { min: 0, max: 1 },
            animation: {
              enable: true,
              speed: 2,
              startValue: 'max',
              destroy: 'min',
            },
          },
          size: {
            value: { min: 8, max: 16 },
          },
          life: {
            duration: {
              sync: true,
              value: 2.5,
            },
            count: 1,
          },
          move: {
            enable: true,
            gravity: {
              enable: true,
              acceleration: 15,
            },
            speed: { min: 15, max: 30 },
            decay: 0.05,
            direction: 'none',
            random: true,
            straight: false,
            outModes: {
              default: 'destroy',
              top: 'none',
            },
          },
          stroke: {
            width: 2,
            color: '#FFA500',
          },
        },
        emitters: {
          position: {
            x: 50,
            y: 20,
          },
          rate: {
            quantity: 15,
            delay: 0.1,
          },
          size: {
            width: 80,
            height: 0,
          },
          life: {
            count: 1,
            duration: 0.2,
          },
        },
      };
    } else {
      // sparkles
      return {
        key: 'sparkles',
        fullScreen: { enable: false },
        fpsLimit: 120,
        particles: {
          number: {
            value: 0,
          },
          color: {
            value: ['#FFD700', '#FFFFFF', '#FFA500'],
          },
          shape: {
            type: 'star',
          },
          opacity: {
            value: { min: 0, max: 1 },
            animation: {
              enable: true,
              speed: 3,
              startValue: 'max',
              destroy: 'min',
            },
          },
          size: {
            value: { min: 2, max: 6 },
          },
          life: {
            duration: {
              sync: true,
              value: 1.5,
            },
            count: 1,
          },
          move: {
            enable: true,
            speed: { min: 5, max: 15 },
            direction: 'top',
            random: true,
            straight: false,
            outModes: {
              default: 'destroy',
            },
          },
        },
        emitters: {
          position: {
            x: 50,
            y: 50,
          },
          rate: {
            quantity: 20,
            delay: 0.1,
          },
          size: {
            width: 100,
            height: 100,
          },
          life: {
            count: 1,
            duration: 0.1,
          },
        },
      };
    }
  }, [type]);

  if (!trigger) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-50">
      <Particles
        id={`particles-${type}`}
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </div>
  );
}
