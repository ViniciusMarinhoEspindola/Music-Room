import { useEffect } from "react";
import { AlbumArt } from "./components/AlbumArt";
import { TrackInfo } from "./components/TrackInfo";
import { VolumeControl } from "./components/VolumeControl";
import { PlayerButtons } from "./components/PlayerButtons";
import { useMusicStore } from "~/features/music/music.store";

export default function MusicPanel() {
  const setCurrentTrack = useMusicStore((state) => state.setCurrentTrack);

  useEffect(() => {
    setCurrentTrack({
      image: "/src/assets/images/capa.jpg",
      title: "Midnight Dreams",
      artist: "Lofi Beats Collective",
      duration: 180,
    });
  }, []);

  return (
    <div
      className="
        absolute bg-panel/90
        w-full bottom-0 rounded-none
        lg:rounded-3xl lg:bottom-20 lg:w-1/2
      "
    >
      <div className="grid grid-cols-6 items-center px-1 py-4 md:px-7">
        <AlbumArt />
        <TrackInfo />
        <VolumeControl />
      </div>

      <PlayerButtons />
    </div>
  );
}
