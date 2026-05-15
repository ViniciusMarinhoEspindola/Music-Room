import { useBackgroundStore } from "./background.store";

export default function BackgroundScene() {
  const currentBackground = useBackgroundStore((state) => state.currentBackground);

  return (
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
      style={{ backgroundImage: `url(${currentBackground.background})` }}
    >
      {currentBackground.layers.map((layer) => (
        <div
          key={layer.id}
          className={`absolute ${layer.animation ? `animate-${layer.animation}` : ""}`}
          style={{
            left: `${layer.x}%`,
            top: `${layer.y}%`,
            width: `${layer.w}%`,
            height: `${layer.h}%`,
          }}
        >
          <img src={layer.asset} alt="" className="w-full h-full object-contain" />
        </div>
      ))}
    </div>
  );
}
