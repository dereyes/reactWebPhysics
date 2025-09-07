import { Canvas } from "@react-three/fiber";

import { GameScene } from "@/components/GameScene";

export function GameCanvas() {
  return (
    <Canvas orthographic camera={{ zoom: 100 }}>
      <GameScene />
    </Canvas>
  );
}
