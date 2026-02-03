import PrevIcon from "~/assets/icons/ui/prev.svg?react";
import NextIcon from "~/assets/icons/ui/next.svg?react";

export function PlayerButtons() {
  return (
    <div className="col-span-6 flex justify-center pb-3">
      <div className="flex w-fit">
        <button className="apparence-none cursor-pointer p-2 rounded-l-3xl bg-primary hover:bg-accent transition-all hover:scale-110">
          <PrevIcon className="w-6 h-6 text-foreground" />
        </button>
        <button className="apparence-none cursor-pointer p-2 rounded-r-3xl bg-primary hover:bg-accent transition-all hover:scale-110">
          <NextIcon className="w-6 h-6 text-foreground" />
        </button>
      </div>
    </div>
  );
}
