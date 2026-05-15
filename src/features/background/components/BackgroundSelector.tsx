import { useState } from "react";
import { useBackgroundStore } from "~/features/background/background.store";

function ImageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

export function BackgroundSelector() {
  const [open, setOpen] = useState(false);
  const { backgrounds, currentBackground, setBackground } = useBackgroundStore();

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="cursor-pointer rounded-full p-2 bg-panel/70 hover:bg-panel transition-all hover:scale-110 backdrop-blur-sm"
        aria-label="Trocar fundo"
        title="Trocar fundo"
      >
        <ImageIcon className="w-5 h-5 text-foreground" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-10 z-50 flex flex-col gap-2 bg-panel/90 backdrop-blur-sm rounded-2xl p-3 shadow-xl min-w-[180px]">
            <p className="text-xs text-muted-light font-medium px-1 mb-1">Escolha o fundo</p>
            {backgrounds.map((bg) => (
              <button
                key={bg.id}
                onClick={() => {
                  setBackground(bg.id);
                  setOpen(false);
                }}
                className={`flex items-center gap-2 rounded-xl overflow-hidden transition-all hover:scale-[1.02] border-2 ${
                  currentBackground.id === bg.id
                    ? "border-primary"
                    : "border-transparent"
                }`}
              >
                <div
                  className="w-full h-14 bg-cover bg-center"
                  style={{ backgroundImage: `url(${bg.background})` }}
                />
                <span className="sr-only">{bg.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
