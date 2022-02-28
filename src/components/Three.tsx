import * as THREE from "three";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";

function Zenten(props: JSX.IntrinsicElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.y += 0.01));

  return (
    <mesh {...props} ref={ref}>
      <sphereBufferGeometry args={[500, 32, 32]} />
      <meshLambertMaterial color="#808080" side={THREE.DoubleSide} />
    </mesh>
  );
}

ReactDOM.render(
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />

    <Zenten position={[0, 0, 0]} />
  </Canvas>,
  document.getElementById("root")
);

export const Three = () => {
  return <></>;
};
