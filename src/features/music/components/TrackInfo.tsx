import { ProgressBar } from "./ProgressBar";
import { useMusicStore } from "~/features/music/music.store";

export function TrackInfo() {
  const currentTrack = useMusicStore((state) => state.currentTrack);

  return (
    <div className="col-span-4 ml-10">
      <span className="text-muted-light font-medium text-sm">Tocando agora</span>
      <p className="text-foreground font-semibold text-2xl my-1">
        {currentTrack?.title || "Nenhuma música selecionada"}
      </p>
      <span className="text-muted-light font-medium">{currentTrack?.artist}</span>

      <ProgressBar />
    </div>
  );
}
