import PrevIcon from "~/assets/icons/ui/prev.svg?react";
import NextIcon from "~/assets/icons/ui/next.svg?react";
import { useMusicStore } from "~/features/music/music.store";

export function PlayerButtons() {
  const next = useMusicStore((state) => state.next);
  const prev = useMusicStore((state) => state.prev);

  return (
    <div className="col-span-6 flex justify-center pb-3">
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
