import PlayIcon from "~/assets/icons/ui/play.svg?react";
import PauseIcon from "~/assets/icons/ui/pause.svg?react";
import MusicNote from "~/assets/icons/ui/music-note.svg?react";
import { useMusicStore } from "~/features/music/music.store";

export function AlbumArt() {
  const currentTrack = useMusicStore((state) => state.currentTrack);
  const isPlaying = useMusicStore((state) => state.isPlaying);
  const togglePlay = useMusicStore((state) => state.togglePlay);

  return (
    <div className="col-span-1 flex items-center justify-center relative">
      <div className="bg-black rounded-xl size-full hidden md:block">
        {currentTrack?.image ? (
          <img src={currentTrack.image} className="rounded-xl h-full w-full" alt="imagem de capa" />
        ) : (
          <MusicNote className="text-foreground m-4" />
        )}
      </div>

      <button
        onClick={togglePlay}
        className="absolute -bottom-3 -right-3 p-3 bg-primary rounded-full hover:bg-accent cursor-pointer hover:scale-110 transition-all apparence-none"
        aria-label={isPlaying ? "Pausar" : "Reproduzir"}
      >
        {isPlaying ? (
          <PauseIcon className="w-6 h-6 text-foreground" />
        ) : (
          <PlayIcon className="w-6 h-6 text-foreground" />
        )}
      </button>
    </div>
  );
}
