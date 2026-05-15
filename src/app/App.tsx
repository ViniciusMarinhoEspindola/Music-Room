import SettingPanel from "~/features/setting/SettingPanel";
import AudioPanel from "~/features/audio/AudioPanel";
import MusicPanel from "~/features/music/MusicPanel";
import BackgroundScene from "~/features/background/BackgroundScene";

export default function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <BackgroundScene />
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full gap-8 p-4">
        <SettingPanel />
        <AudioPanel />
        <MusicPanel />
      </div>
    </div>
  );
}
