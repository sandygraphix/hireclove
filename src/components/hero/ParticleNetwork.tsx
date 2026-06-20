"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const particleCount = 400;
  const maxDistance = 1.5;

  // Generate random positions for talent nodes
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = [];
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      vel.push(
        new THREE.Vector3((Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02)
      );
    }
    return [pos, vel];
  }, [particleCount]);

  useFrame(() => {
    if (!pointsRef.current || !linesRef.current) return;
    
    const positionsAttr = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const linePositions = [];
    const lineOpacities = [];

    // Animate particles (Workforce mobility)
    for (let i = 0; i < particleCount; i++) {
      positionsAttr[i * 3] += velocities[i].x;
      positionsAttr[i * 3 + 1] += velocities[i].y;
      positionsAttr[i * 3 + 2] += velocities[i].z;

      // Bounce off invisible boundaries
      if (Math.abs(positionsAttr[i * 3]) > 5) velocities[i].x *= -1;
      if (Math.abs(positionsAttr[i * 3 + 1]) > 5) velocities[i].y *= -1;
      if (Math.abs(positionsAttr[i * 3 + 2]) > 5) velocities[i].z *= -1;

      // Check connections (Connecting talent to business)
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positionsAttr[i * 3] - positionsAttr[j * 3];
        const dy = positionsAttr[i * 3 + 1] - positionsAttr[j * 3];
        const dz = positionsAttr[i * 3 + 2] - positionsAttr[j * 3];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          linePositions.push(
            positionsAttr[i * 3], positionsAttr[i * 3 + 1], positionsAttr[i * 3 + 2],
            positionsAttr[j * 3], positionsAttr[j * 3 + 1], positionsAttr[j * 3 + 2]
          );
          lineOpacities.push(1 - dist / maxDistance);
        }
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Update line geometry dynamically
    linesRef.current.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
  });

return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          {/* FIXED: Replaced array and itemSize with the args prop */}
          <bufferAttribute attach="attributes-position" args={[positions, 3]} count={particleCount} />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#E8581A" transparent opacity={0.8} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#ffffff" transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
}