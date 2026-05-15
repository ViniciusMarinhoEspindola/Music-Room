import { create } from "zustand";
import { persist } from "zustand/middleware";
import { backgrounds } from "./backgrounds.registry";
import type { Background } from "~/types";

interface BackgroundState {
  backgrounds: Background[];
  currentBackground: Background;
  setBackground: (id: string) => void;
}

export const useBackgroundStore = create<BackgroundState>()(
  persist(
    (set, get) => ({
      backgrounds,
      currentBackground: backgrounds[0],

      setBackground: (id: string) => {
        const found = get().backgrounds.find((bg) => bg.id === id);
        if (found) set({ currentBackground: found });
      },
    }),
    {
      name: "background-storage",
      partialize: (state) => ({ currentBackground: { id: state.currentBackground.id } }),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        const saved = backgrounds.find((bg) => bg.id === state.currentBackground.id);
        if (saved) state.currentBackground = saved;
      },
    }
  )
);
