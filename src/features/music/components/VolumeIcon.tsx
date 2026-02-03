interface VolumeIconProps {
  readonly volume: number;
  readonly handleMuteToggle: () => void;
}

export function VolumeIcon({ volume, handleMuteToggle }: VolumeIconProps) {
  return (
    <button onClick={() => handleMuteToggle()} className="apparence-none cursor-pointer">
      <svg
        className={`w-5 h-5 ${volume >= 5 ? "text-primary" : "text-deep"}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M3 9v6h4l5 4V5L7 9H3z" />
        {volume > 0 ? (
          <>
            <path
              d="M14.5 8.5a5 5 0 0 1 0 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className={volume >= 33 ? "text-primary" : "text-deep"}
            />
            <path
              d="M17.5 6a8 8 0 0 1 0 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className={volume > 66 ? "text-primary" : "text-deep"}
            />
          </>
        ) : (
          <path
            d="M18 10l-4 4m0 -4l4 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-primary"
          />
        )}
      </svg>
    </button>
  );
}
