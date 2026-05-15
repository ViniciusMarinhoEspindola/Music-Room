import PrevIcon from "~/assets/icons/ui/prev.svg?react";
import NextIcon from "~/assets/icons/ui/next.svg?react";
import { useMusicStore } from "~/features/music/music.store";

function ShuffleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 3 21 3 21 8" />
      <line x1="4" y1="20" x2="21" y2="3" />
      <polyline points="21 16 21 21 16 21" />
      <line x1="15" y1="15" x2="21" y2="21" />
    </svg>
  );
}

export function PlayerButtons() {
  const next = useMusicStore((state) => state.next);
  const prev = useMusicStore((state) => state.prev);
  const shuffle = useMusicStore((state) => state.shuffle);

  return (
    <div className="col-span-6 flex justify-center pb-3 gap-2">
      <button
        onClick={shuffle}
        className="apparence-none cursor-pointer p-2 rounded-full bg-muted hover:bg-accent transition-all hover:scale-110"
        aria-label="Embaralhar"
      >
        <ShuffleIcon className="w-5 h-5 text-foreground" />
      </button>

      <div className="flex w-fit">
        <button
          onClick={prev}
          className="apparence-none cursor-pointer p-2 rounded-l-3xl bg-primary hover:bg-accent transition-all hover:scale-110"
          aria-label="Música anterior"
        >
          <PrevIcon className="w-6 h-6 text-foreground" />
        </button>
        <button
          onClick={next}
          className="apparence-none cursor-pointer p-2 rounded-r-3xl bg-primary hover:bg-accent transition-all hover:scale-110"
          aria-label="Próxima música"
        >
          <NextIcon className="w-6 h-6 text-foreground" />
        </button>
      </div>
    </div>
  );
}
