import bgNight from "~/assets/images/background-default-2.png";
import bgCity from "~/assets/images/background-default.png";
import bgNature from "~/assets/images/background-1.webp";
import type { Background } from "~/types";

export const backgrounds: Background[] = [
  {
    id: "night-room",
    label: "Quarto Noturno",
    background: bgNight,
    layers: [],
    hotspots: [],
  },
  {
    id: "city-night",
    label: "Cidade de Noite",
    background: bgCity,
    layers: [],
    hotspots: [],
  },
  {
    id: "nature",
    label: "Natureza",
    background: bgNature,
    layers: [],
    hotspots: [],
  },
];
