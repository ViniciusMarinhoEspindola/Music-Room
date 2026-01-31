import PlayIcon from "~/assets/icons/ui/play.svg?react";
import MusicNote from "~/assets/icons/ui/music-note.svg?react";

export default function AudioPanel() {
  return (
    <div
      className="
        absolute bottom-20
        grid grid-cols-6 items-center
        rounded-3xl
        bg-red-900/80
        px-7 py-4
        md:w-7/16 sm:w-full
        "
    >
      <div className="col-span-1 flex items-center justify-center relative">
        <div className="p-3 bg-zinc-900 rounded-xl">
          <MusicNote className="w-16 h-16 text-white m-4" />
        </div>

        <div className="absolute -bottom-3 -right-3 p-3 bg-rose-500 rounded-full hover:bg-red-600 cursor-pointer hover:scale-110 transition-all">
          <PlayIcon className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="col-span-4 ml-10">
        <span className="text-zinc-400 font-medium text-sm">Tocando agora</span>
        <p className="text-white font-semibold text-2xl my-1">Midnight Dreams</p>
        <span className="text-zinc-400 font-medium">Lofi Beats Collective</span>

        <div className="mt-3 h-1.5 w-full bg-zinc-800 rounded-full hover:bg-gray-900 cursor-pointer">
          <div className="h-1.5 w-1/3 bg-rose-500 rounded-full hover:bg-red-600 cursor-pointer" />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-zinc-400 font-light text-xs">0:45</span>
          <span className="text-zinc-400 font-light text-xs">3:20</span>
        </div>
      </div>

      <div className="col-span-1 ml-2 flex flex-col items-center justify-center">
        <svg
          className="w-5 h-5 text-rose-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 9v6h4l5 4V5L7 9H3z" />
          <path
            d="M14.5 8.5a5 5 0 0 1 0 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-rose-500"
          />
          <path
            d="M17.5 6a8 8 0 0 1 0 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-zinc-800"
          />
        </svg>
        <div className="mt-3 w-1.5 h-24 bg-zinc-800 rounded-full relative hover:bg-gray-900 cursor-pointer">
          <div className="absolute bottom-0 w-1.5 h-1/3 bg-rose-500 rounded-full hover:bg-red-600 cursor-pointer" />
        </div>
        <span className="text-zinc-400 font-light text-xs ml-2 mt-2">33%</span>
      </div>
    </div>
  );
}
