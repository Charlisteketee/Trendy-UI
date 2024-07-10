import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function SpinningIcon() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <SpinningSphere position={[-2, 0, 0]} />
      <SpinningBox position={[2, 0, 0]} />
    </Canvas>
  );
}

function SpinningSphere({ position }) {
  const meshRef = React.useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[10, 3, 16, 8]} />
      <meshStandardMaterial color="skyblue" />
    </mesh>
  );
}

function SpinningBox({ position }) {
  const meshRef = React.useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

export default SpinningIcon;
