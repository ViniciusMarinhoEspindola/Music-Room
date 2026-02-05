import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingState {
  theme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
}

const updateDOM = (theme: "light" | "dark"): void => {
  document.documentElement.classList.toggle("dark", theme === "dark");
};

export const useSettingStore = create<SettingState>()(
  persist(
    (set) => ({
      theme: globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light",

      toggleTheme: () =>
        set((state) => {
          const theme = state.theme === "dark" ? "light" : "dark";
          updateDOM(theme);

          return { theme: theme };
        }),

      setTheme: (theme: "light" | "dark") => {
        updateDOM(theme);
        set({ theme });
      },
    }),
    {
      name: "settings-storage",
      onRehydrateStorage: () => (state) => {
        if (state) updateDOM(state.theme);
      },
    },
  ),
);
