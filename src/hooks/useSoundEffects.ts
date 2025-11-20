import { useCallback, useEffect, useRef, useState } from 'react';

type SoundType = 'roll' | 'win' | 'jackpot' | 'ambiance' | 'click' | 'loss' | 'swipe' | 'claim' | 'continue' | 'deposit' | 'withdraw' | 'buy_session' | 'click_cw' | 'click_ccw';

const SOUND_PATHS: Record<SoundType, string> = {
  roll: '/sounds/roll.wav',
  win: '/sounds/win.wav',
  jackpot: '/sounds/jackpot.wav',
  ambiance: '/sounds/bgm1.mp3', // Initial track
  click: '/sounds/click.wav',
  loss: '/sounds/loss.wav',
  swipe: '/sounds/swipe.wav',
  claim: '/sounds/claim.wav',
  continue: '/sounds/continue.wav',
  deposit: '/sounds/deposit.wav',
  withdraw: '/sounds/withdraw.wav',
  buy_session: '/sounds/buy_session.wav',
  click_cw: '/sounds/click_cw.wav',
  click_ccw: '/sounds/click_ccw.wav',
};

const BGM_PLAYLIST = [
  '/sounds/bgm1.mp3',
  '/sounds/bgm2.wav',
  '/sounds/bgm3.wav',
];

export const useSoundEffects = () => {
  const [isMuted, setIsMuted] = useState(() => {
    const saved = localStorage.getItem('luckchain_muted');
    return saved ? JSON.parse(saved) : false;
  });

  const [currentBgmIndex, setCurrentBgmIndex] = useState(0);

  const audioRefs = useRef<Record<SoundType, HTMLAudioElement | null>>({
    roll: null,
    win: null,
    jackpot: null,
    ambiance: null,
    click: null,
    loss: null,
    swipe: null,
    claim: null,
    continue: null,
    deposit: null,
    withdraw: null,
    buy_session: null,
    click_cw: null,
    click_ccw: null,
  });

  useEffect(() => {
    // Initialize audio objects
    Object.entries(SOUND_PATHS).forEach(([key, path]) => {
      const audio = new Audio(path);
      audio.preload = 'auto';

      if (key === 'ambiance') {
        audio.loop = false; // Disable loop for playlist
        audio.volume = 0.3;

        // Add event listener for playlist rotation
        audio.addEventListener('ended', () => {
          setCurrentBgmIndex((prev) => (prev + 1) % BGM_PLAYLIST.length);
        });
      }

      audioRefs.current[key as SoundType] = audio;
    });

    return () => {
      // Cleanup
      Object.values(audioRefs.current).forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
    };
  }, []);

  // Handle BGM track changes
  useEffect(() => {
    const ambiance = audioRefs.current.ambiance;
    if (ambiance) {
      const nextTrack = BGM_PLAYLIST[currentBgmIndex];
      if (ambiance.src !== window.location.origin + nextTrack && ambiance.src !== nextTrack) {
        const wasPlaying = !ambiance.paused;
        ambiance.src = nextTrack;
        if (wasPlaying && !isMuted) {
          ambiance.play().catch(e => console.debug('BGM play failed:', e));
        }
      }
    }
  }, [currentBgmIndex, isMuted]);

  useEffect(() => {
    localStorage.setItem('luckchain_muted', JSON.stringify(isMuted));

    const ambiance = audioRefs.current.ambiance;
    if (ambiance) {
      if (isMuted) {
        ambiance.pause();
      } else {
        // Auto-resume if unmuted (and we want it to play)
        // For now, let's assume we want BGM to play if unmuted
        ambiance.play().catch(e => console.debug('BGM resume failed:', e));
      }
    }
  }, [isMuted]);

  const duckingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const playSound = useCallback((type: SoundType) => {
    if (isMuted) return;

    const audio = audioRefs.current[type];
    const ambiance = audioRefs.current.ambiance;

    if (audio) {
      if (type !== 'ambiance') {
        // Duck background music when playing other sounds
        if (ambiance && !ambiance.paused) {
          ambiance.volume = 0.1; // Lower BGM volume
        }

        const clone = audio.cloneNode() as HTMLAudioElement;
        clone.volume = audio.volume;
        clone.play().catch((e) => console.debug(`Audio play failed (${type}):`, e));

        // Restore BGM volume after sound effect finishes
        if (ambiance && !ambiance.paused) {
          // Clear any existing timeout
          if (duckingTimeoutRef.current) {
            clearTimeout(duckingTimeoutRef.current);
          }

          // Restore volume after 2 seconds (or when sound likely finished)
          duckingTimeoutRef.current = setTimeout(() => {
            if (ambiance && !ambiance.paused) {
              ambiance.volume = 0.3; // Restore original BGM volume
            }
          }, 2000);
        }
      } else {
        audio.play().catch((e) => console.debug(`Audio play failed (${type}):`, e));
      }
    }
  }, [isMuted]);

  const stopSound = useCallback((type: SoundType) => {
    const audio = audioRefs.current[type];
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted((prev: boolean) => !prev);
  }, []);

  return {
    playSound,
    stopSound,
    isMuted,
    toggleMute,
  };
};
