import { VolumeIcon } from "./VolumeIcon";
import { useMusicStore } from "~/features/music/music.store";

export function VolumeControl() {
  const volume = useMusicStore((state) => state.volume);
  const setVolume = useMusicStore((state) => state.setVolume);
  const toggleMute = useMusicStore((state) => state.toggleMute);

  const handleChangeVolume = (event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setVolume(Number.parseInt(event.target.value, 10));
  };

  return (
    <div className="col-span-1 ml-2 flex flex-col items-center justify-center">
      <VolumeIcon volume={volume} handleMuteToggle={toggleMute} />

      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleChangeVolume}
        style={{ "--value": `${volume}%` } as React.CSSProperties}
        className="slider volume-slider mt-1"
      />

      <span className="text-muted-light font-light text-xs ml-2 mt-2">{volume}%</span>
    </div>
  );
}
