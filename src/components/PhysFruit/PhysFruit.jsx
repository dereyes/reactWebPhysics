import { RigidBody } from "@react-three/rapier";
export function PhysFruit() {
  return (
    <RigidBody mass={1} position={[0, 5, 0]}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="hotpink" />
      </mesh>
    </RigidBody>
  );
}
