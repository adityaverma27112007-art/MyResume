import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as THREE from 'three';

// Simple particle field component
const ParticleField = () => {
  const points = useRef();
  const count = 3000;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30; // x
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30; // y
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30; // z
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  // Subtle rotation animation
  useFrame(() => {
    if (points.current) {
      points.current.rotation.x += 0.0003;
      points.current.rotation.y += 0.0003;
    }
  });

  return (
    <Points ref={points} positions={positions} stride={3} limit={count}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const BackgroundScene = () => (
  <Canvas
    camera={{ position: [0, 0, 15], fov: 75 }}
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: -1 }}
  >
    <color attach="background" args={['#0d0d0d']} />
    <ParticleField />
    <Preload all />
  </Canvas>
);

export default BackgroundScene;
