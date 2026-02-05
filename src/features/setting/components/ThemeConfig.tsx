import { useSettingStore } from "~/features/setting/setting.store";

export function ThemeConfig() {
  const theme = useSettingStore((state) => state.theme);
  const toggleTheme = useSettingStore((state) => state.toggleTheme);

  return <button onClick={toggleTheme}>{theme === "dark" ? "☀️" : "🌙"}</button>;
}
