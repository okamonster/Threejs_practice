import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useRef, Suspense } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import view from "../img/view.jpg";
import styled from "styled-components";

function Zenten(props: JSX.IntrinsicElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.y += 0.01));
  const texture = useLoader(TextureLoader, view);
  return (
    <mesh {...props} ref={ref}>
      <sphereBufferGeometry args={[500, 32, 32]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}

export const Three = () => {
  return (
    <Mainview className="view">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Zenten position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </Mainview>
  );
};
const Mainview = styled.div`
  height: 500px;
  width: 100%;
`;
