export interface Track {
  id: number;
  title: string;
  artist: string;
  album?: string;
  url: string;
  duration?: number;
  cover?: string;
}

export const mockTracks: Track[] = [
  {
    id: 1,
    title: "Midnight Passenger",
    artist: "Unknown Artist",
    album: "Lofi Nights",
    url: "/src/assets/sounds/midnight-passenger.mp3",
    cover: "/src/assets/covers/midnight-passenger.jpg",
  },
  {
    id: 2,
    title: "Moonlit Journey",
    artist: "Unknown Artist",
    album: "Lofi Nights",
    url: "/src/assets/sounds/moonlit-journey.mp3",
    cover: "/src/assets/covers/moonlit-journey.jpg",
  },
  {
    id: 3,
    title: "Rain On Old Tape",
    artist: "Unknown Artist",
    album: "Lofi Rainy Days",
    url: "/src/assets/sounds/rain-on-old-tape.mp3",
    cover: "/src/assets/covers/rain-on-old-tape.jpg",
  },
  {
    id: 4,
    title: "Vintage Rainfall",
    artist: "Unknown Artist",
    album: "Lofi Rainy Days",
    url: "/src/assets/sounds/vintage-rainfall.mp3",
    cover: "/src/assets/covers/vintage-rainfall.jpg",
  },
  {
    id: 5,
    title: "Warm Pages at 2 A.M.",
    artist: "Unknown Artist",
    album: "Late Night Lofi",
    url: "/src/assets/sounds/warm-pages-at-2am.mp3",
    cover: "/src/assets/covers/warm-pages.jpg",
  },
  {
    id: 6,
    title: "Coffee Stains & Notebooks",
    artist: "Unknown Artist",
    album: "Late Night Lofi",
    url: "/src/assets/sounds/coffee-stains-and-notebooks.mp3",
    cover: "/src/assets/covers/coffee-stains.jpg",
  },
  {
    id: 7,
    title: "Silent Library Dreams",
    artist: "Unknown Artist",
    album: "Late Night Lofi",
    url: "/src/assets/sounds/silent-library-dreams.mp3",
    cover: "/src/assets/covers/silent-library.jpg",
  },
];

// Helper para pegar uma track aleatória
export const getRandomTrack = (): Track => {
  const randomIndex = Math.floor(Math.random() * mockTracks.length);
  return mockTracks[randomIndex];
};

// Helper para pegar a próxima track
export const getNextTrack = (currentId: number): Track => {
  const currentIndex = mockTracks.findIndex((track) => track.id === currentId);
  const nextIndex = (currentIndex + 1) % mockTracks.length;
  return mockTracks[nextIndex];
};

// Helper para pegar a track anterior
export const getPreviousTrack = (currentId: number): Track => {
  const currentIndex = mockTracks.findIndex((track) => track.id === currentId);
  const previousIndex = currentIndex === 0 ? mockTracks.length - 1 : currentIndex - 1;
  return mockTracks[previousIndex];
};

// Helper para pegar track por ID
export const getTrackById = (id: number): Track | undefined => {
  return mockTracks.find((track) => track.id === id);
};

// Helper para embaralhar playlist
export const shuffleTracks = (): Track[] => {
  const shuffled = [...mockTracks];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
