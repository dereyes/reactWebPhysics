import { Canvas } from "@react-three/fiber";

import { useState } from "react";

import { GameScene } from "@/components/GameScene";

export function GameCanvas() {
  const [isDropped, setIsDropped] = useState(false);

  const handleClick = () => {
    setIsDropped(true);
  };

  return (
    <Canvas orthographic camera={{ zoom: 100 }} onClick={handleClick}>
      <GameScene isDropped={isDropped} />
    </Canvas>
  );
}
