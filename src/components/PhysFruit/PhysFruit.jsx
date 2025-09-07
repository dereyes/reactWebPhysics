import { RigidBody, BallCollider } from "@react-three/rapier";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function PhysFruit({ isDropped }) {
  const rigidBodyRef = useRef();

  // Update the square's position when in 'follow' mode
  useFrame(({ pointer }) => {
    if (!isDropped) {
      rigidBodyRef.current.setNextKinematicTranslation(
        {
          x: pointer.x * 5,
          y: 4,
          z: 0,
        },
        true
      );
    }
  });

  return (
    <RigidBody
      ref={rigidBodyRef}
      mass={1}
      position={[0, 4, 0]}
      type={isDropped ? "dynamic" : "kinematicPosition"}
    >
      <mesh>
        <circleGeometry args={[0.5, 32]} />
        <meshBasicMaterial color="hotpink" />
      </mesh>
      <BallCollider args={[0.5]} />
    </RigidBody>
  );
}
