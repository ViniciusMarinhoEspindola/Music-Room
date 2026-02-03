import SettingPanel from "~/features/setting/SettingPanel";
import AudioPanel from "~/features/audio/AudioPanel";
import MusicPanel from "~/features/music/MusicPanel";

export default function App() {
  return (
    <div className="bg-[url(/src/assets/images/background-default-2.png)]  w-screen h-screen flex flex-col justify-center items-center gap-8 p-4">
      <SettingPanel />
      <AudioPanel />
      <MusicPanel />
    </div>
  );
}
