import { useTheme } from "~/hooks/useTheme";

export function ThemeConfig() {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>{theme === "dark" ? "☀️" : "🌙"}</button>;
}
