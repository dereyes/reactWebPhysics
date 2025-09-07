import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";

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
      <mesh ref={planeRef}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="hotpink" />
      </mesh>
    </>
  );
}
