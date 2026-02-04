import { useMemo } from "react";
import { useMusicStore } from "~/features/music/music.store";
import { formatTime } from "~/utils/formatters";

export function ProgressBar() {
  const currentTime = useMusicStore((state) => state.currentTime);
  const duration = useMusicStore((state) => state.duration);
  const seek = useMusicStore((state) => state.seek);

  const handleChangeTime = (event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const currentPercent = Number.parseInt(event.target.value, 10);
    const total = duration || 1;
    const newTime = (currentPercent / 100) * total;

    seek(newTime);
  };

  const progress = useMemo(() => {
    const current = currentTime || 0;
    const total = duration || 1;

    return (current / total) * 100;
  }, [currentTime, duration]);

  return (
    <div className="mt-3">
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleChangeTime}
        style={{ "--value": `${progress}%` } as React.CSSProperties}
        className="slider progress-slider"
      />

      <div className="flex justify-between mt-1">
        <span className="text-muted-light font-light text-xs">{formatTime(currentTime || 0)}</span>
        <span className="text-muted-light font-light text-xs">{formatTime(duration || 0)}</span>
      </div>
    </div>
  );
}
