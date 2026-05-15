export interface Track {
  id: number;
  title: string;
  artist: string;
  album?: string;
  url: string;
  cover?: string;
}

export interface Layer {
  id: string;
  asset: string;
  x: number;
  y: number;
  w: number;
  h: number;
  animation?: string;
  trigger?: string;
}

export interface Hotspot {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  action: "toggleAmbient" | "pomodoro";
  sound?: string;
  label: string;
}

export interface Background {
  id: string;
  label: string;
  background: string;
  thumbnail?: string;
  layers: Layer[];
  hotspots: Hotspot[];
}
