import { create } from "zustand";

interface MusicState {
  volume: number;
  previousVolume: number;
  isPlaying: boolean;
  currentTrack: {
    image: string;
    title: string;
    artist: string;
    duration: number;
    currentTime: number;
  } | null;

  setVolume: (volume: number) => void;
  togglePlay: () => void;
  toggleMute: () => void;
  setCurrentTrack: (track: Omit<NonNullable<MusicState["currentTrack"]>, "currentTime">) => void;
  setCurrentTime: (time: number) => void;
}

export const useMusicStore = create<MusicState>((set) => ({
  volume: 50,
  previousVolume: 50,
  isPlaying: false,
  currentTrack: null,

  setVolume: (volume) => set({ volume }),
  toggleMute: () =>
    set((state) => {
      return state.volume > 0
        ? { previousVolume: state.volume, volume: 0 }
        : { volume: state.previousVolume };
    }),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setCurrentTrack: (track) =>
    set({
      currentTrack: {
        ...track,
        currentTime: 0,
      },
      isPlaying: false,
    }),
  setCurrentTime: (time) =>
    set((state) => ({
      currentTrack: state.currentTrack ? { ...state.currentTrack, currentTime: time } : null,
    })),
}));
