import { create } from "zustand";
import AudioService from "~/services/AudioService";
import { mockTracks, getNextTrack, getPreviousTrack, type Track } from "~/mocks/MockTracks";

interface MusicState {
  volume: number;
  previousVolume: number;
  isPlaying: boolean;
  currentTrack: Track | null;
  currentTime: number;
  duration: number;

  _audioService: AudioService;

  play: () => void;
  pause: () => void;
  next: () => void;
  prev: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;

  loadTrack: (track: Track) => void;
  togglePlay: () => void;
  toggleMute: () => void;
}

export const useMusicStore = create<MusicState>((set, get) => {
  const audioService = new AudioService();

  audioService.on("play", () => {
    set({ isPlaying: true });
  });

  audioService.on("pause", () => {
    set({ isPlaying: false });
  });

  audioService.on("timeupdate", (currentTime: number, duration: number) => {
    set({ currentTime, duration });
  });

  audioService.on("load", () => {
    set({
      duration: audioService.getDuration(),
      currentTime: 0,
    });
  });

  audioService.on("ended", () => {
    get().next();
  });

  audioService.on("error", (error: Error) => {
    console.error("Erro ao carregar áudio:", error);
    set({ isPlaying: false });
  });

  return {
    volume: 50,
    previousVolume: 50,
    isPlaying: false,
    currentTrack: null,
    currentTime: 0,
    duration: 0,
    _audioService: audioService,

    play: () => {
      audioService.play();
    },

    pause: () => {
      audioService.pause();
    },

    next: () => {
      const { currentTrack } = get();

      let nextTrack = mockTracks[0];
      if (currentTrack) nextTrack = getNextTrack(currentTrack.id);

      get().loadTrack(nextTrack);
      get().play();
    },

    prev: () => {
      const { currentTrack } = get();

      let prevTrack = mockTracks[0];
      if (currentTrack) prevTrack = getPreviousTrack(currentTrack.id);

      get().loadTrack(prevTrack);
      get().play();
    },

    seek: (time: number) => {
      audioService.seek(time);
      set({ currentTime: time });
    },

    setVolume: (volume) => {
      audioService.setVolume(volume);
      set({ volume });
    },

    loadTrack: (track: Track) => {
      audioService.load(track.url);
      set({ currentTrack: track });
    },

    togglePlay: () => {
      const { isPlaying } = get();

      if (isPlaying) {
        get().pause();
      } else {
        get().play();
      }
    },

    toggleMute: () => {
      const state = get();

      if (state.volume == 0) {
        audioService.setVolume(0);
        set({ previousVolume: state.volume, volume: 0 });
      } else {
        audioService.setVolume(state.previousVolume);
        set({ volume: state.previousVolume });
      }
    },
  };
});
