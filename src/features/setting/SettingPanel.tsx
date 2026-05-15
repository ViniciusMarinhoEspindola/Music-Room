import { ThemeConfig } from "~/features/setting/components/ThemeConfig";
import { BackgroundSelector } from "~/features/background/components/BackgroundSelector";

export default function SettingPanel() {
  return (
    <div className="flex gap-2 items-center">
      <BackgroundSelector />
      <ThemeConfig />
    </div>
  );
}
