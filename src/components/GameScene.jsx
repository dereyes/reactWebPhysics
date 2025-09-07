import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";

import { Physics, CuboidCollider } from "@react-three/rapier";
import { PhysFruit } from "./PhysFruit/PhysFruit";

export function GameScene() {
  const planeRef = useRef();

  // Rotate the plane on each frame
  useFrame(() => {
    if (planeRef.current) {
      planeRef.current.rotation.z += 0.01;
    }
  });

  return (
    <>
      <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={100} />

      {/* A simple plane to serve as a 2D element */}
      {/* <mesh ref={planeRef}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="hotpink" />
      </mesh> */}
      <Physics gravity={[0, -9.81, 0]} debug>
        <PhysFruit />
        {/* A static ground plane created using a CuboidCollider */}
        <CuboidCollider
          position={[0, -4, 0]}
          args={[10, 0.5, 10]}
          type="fixed"
        />
      </Physics>
    </>
  );
}
