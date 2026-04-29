import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Helper to create a stylized poplar leaf shape (triangular/deltoid)
function createPoplarLeafShape() {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.bezierCurveTo(0.5, 0.2, 1.2, 0.8, 1.5, 1.2);
  shape.bezierCurveTo(1.2, 1.8, 0.6, 2.2, 0, 2.5);
  shape.bezierCurveTo(-0.6, 2.2, -1.2, 1.8, -1.5, 1.2);
  shape.bezierCurveTo(-1.2, 0.8, -0.5, 0.2, 0, 0);
  return shape;
}

// Helper for Maple shape
function createMapleLeafShape() {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.bezierCurveTo(0.3, 0.1, 0.6, 0.1, 0.8, 0.4);
  shape.lineTo(0.6, 0.6);
  shape.bezierCurveTo(1.0, 0.6, 1.4, 1.0, 1.6, 1.4);
  shape.lineTo(1.2, 1.6);
  shape.bezierCurveTo(1.4, 2.0, 1.0, 2.8, 0, 3.0); // Tip
  shape.bezierCurveTo(-1.0, 2.8, -1.4, 2.0, -1.2, 1.6);
  shape.lineTo(-1.6, 1.4);
  shape.bezierCurveTo(-1.4, 1.0, -1.0, 0.6, -0.6, 0.6);
  shape.lineTo(-0.8, 0.4);
  shape.bezierCurveTo(-0.6, 0.1, -0.3, 0.1, 0, 0);
  return shape;
}

// Helper for Ginkgo shape (Fan-like)
function createGinkgoLeafShape() {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.bezierCurveTo(0.8, 0.5, 1.5, 1.5, 1.8, 2.5);
  shape.bezierCurveTo(1.0, 2.8, 0.5, 2.4, 0, 2.2); // Notch
  shape.bezierCurveTo(-0.5, 2.4, -1.0, 2.8, -1.8, 2.5);
  shape.bezierCurveTo(-1.5, 1.5, -0.8, 0.5, 0, 0);
  return shape;
}

// Helper for Oak shape (Lobed)
function createOakLeafShape() {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  // Right side lobes
  shape.bezierCurveTo(0.4, 0.2, 0.8, 0.3, 0.7, 0.6);
  shape.bezierCurveTo(1.2, 0.8, 1.3, 1.2, 0.8, 1.5);
  shape.bezierCurveTo(1.2, 1.8, 1.0, 2.4, 0.3, 2.6);
  shape.lineTo(0, 2.8); // Top
  // Left side lobes
  shape.bezierCurveTo(-1.0, 2.4, -1.2, 1.8, -0.8, 1.5);
  shape.bezierCurveTo(-1.3, 1.2, -1.2, 0.8, -0.7, 0.6);
  shape.bezierCurveTo(-0.8, 0.3, -0.4, 0.2, 0, 0);
  return shape;
}

// Helper for Linden (Heart-like)
function createLindenLeafShape() {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.bezierCurveTo(1.0, 0.5, 1.8, 1.5, 0.1, 2.8);
  shape.lineTo(0, 3.0);
  shape.bezierCurveTo(-1.8, 1.5, -1.0, 0.5, 0, 0);
  return shape;
}

// Helper for Willow (Long and narrow)
function createWillowLeafShape() {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.bezierCurveTo(0.3, 1.0, 0.3, 3.0, 0, 4.5);
  shape.bezierCurveTo(-0.3, 3.0, -0.3, 1.0, 0, 0);
  return shape;
}

// Helper for Birch (Small heart with jagged approximation)
function createBirchLeafShape() {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0.5, 0.3); shape.lineTo(0.4, 0.5);
  shape.lineTo(0.8, 0.8); shape.lineTo(0.7, 1.0);
  shape.lineTo(1.0, 1.5);
  shape.bezierCurveTo(0.8, 2.2, 0.4, 2.5, 0, 2.8);
  shape.bezierCurveTo(-0.4, 2.5, -0.8, 2.2, -1.0, 1.5);
  shape.lineTo(-0.7, 1.0); shape.lineTo(-0.8, 0.8);
  shape.lineTo(-0.4, 0.5); shape.lineTo(-0.5, 0.3);
  shape.lineTo(0, 0);
  return shape;
}

// Helper for Rowan (Elliptical)
function createRowanLeafShape() {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.bezierCurveTo(0.6, 0.5, 0.6, 1.5, 0, 2.0);
  shape.bezierCurveTo(-0.6, 1.5, -0.6, 0.5, 0, 0);
  return shape;
}

const LEAF_SHAPES = [
  createPoplarLeafShape,
  createMapleLeafShape,
  createGinkgoLeafShape,
  createOakLeafShape,
  createLindenLeafShape,
  createWillowLeafShape,
  createBirchLeafShape,
  createRowanLeafShape
];

function Leaf({ index }: { index: number }) {
  const meshRef = useRef<THREE.Group>(null);
  
  const initialX = useMemo(() => (Math.random() * 40) - 20, []);
  const initialY = useMemo(() => (Math.random() - 0.5) * 20, []);
  const initialZ = useMemo(() => (Math.random() - 0.5) * 10, []);
  const speed = useMemo(() => 0.02 + Math.random() * 0.04, []);
  const swaySpeed = useMemo(() => 0.3 + Math.random() * 0.7, []);
  const rotateSpeedX = useMemo(() => (Math.random() - 0.5) * 0.01, []);
  const rotateSpeedY = useMemo(() => (Math.random() - 0.5) * 0.02, []);
  const rotateSpeedZ = useMemo(() => (Math.random() - 0.5) * 0.015, []);
  const scale = useMemo(() => 0.12 + Math.random() * 0.25, []);

  // Randomize shape per leaf
  const leafShape = useMemo(() => {
    const creator = LEAF_SHAPES[Math.floor(Math.random() * LEAF_SHAPES.length)];
    return creator();
  }, []);

  // Detailed Seasonal logic
  const colors = useMemo(() => {
    const month = new Date().getMonth(); // 0-11
    
    let main = '#2D5A27'; // Default Green
    let emissive = '#1A3316';
    let stem = '#3E2723';

    if (month === 0 || month === 1) { // Jan, Feb: Dark Brown
      main = '#3E2723';
      emissive = '#21130D';
      stem = '#1B0F0B';
    } else if (month >= 2 && month <= 5) { // Mar - Jun: Light Green
      main = '#A2D149';
      emissive = '#5D7A2A';
      stem = '#5D7A2A';
    } else if (month >= 6 && month <= 8) { // Jul - Sep: Green
      main = '#2D5A27';
      emissive = '#1A3316';
      stem = '#3E2723';
    } else if (month === 9) { // Oct: Yellow and Orange mix
      const isYellow = Math.random() > 0.5;
      main = isYellow ? '#FFD700' : '#FF8C00';
      emissive = isYellow ? '#B8860B' : '#8B4513';
      stem = '#5D2E0C';
    } else if (month === 10) { // Nov: Orange and Brown mix
      const isOrange = Math.random() > 0.5;
      main = isOrange ? '#FF8C00' : '#8B4513';
      emissive = isOrange ? '#A0522D' : '#5D2E0C';
      stem = '#3E2723';
    } else if (month === 11) { // Dec: Brown
      main = '#8B4513';
      emissive = '#5D2E0C';
      stem = '#3E2723';
    }

    return { main, emissive, stem };
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    // Physics-inspired wind movement: Right to Left
    meshRef.current.position.x -= speed;
    
    // Reset position when off-screen to the left to maintain density
    if (meshRef.current.position.x < -25) {
      meshRef.current.position.x = 25;
      meshRef.current.position.y = (Math.random() - 0.5) * 20;
    }

    // Aerodynamic fluttering effect
    meshRef.current.position.y += Math.sin(time * swaySpeed + index) * 0.008;
    meshRef.current.position.z += Math.cos(time * 0.3 + index) * 0.004;
    
    meshRef.current.rotation.x += rotateSpeedX + Math.sin(time * 0.5) * 0.005;
    meshRef.current.rotation.y += rotateSpeedY;
    meshRef.current.rotation.z += rotateSpeedZ + Math.cos(time * 0.2) * 0.01;
  });

  return (
    <group ref={meshRef} position={[initialX, initialY, initialZ]} scale={scale}>
      {/* Detailed Leaf Blade */}
      <mesh>
        <shapeGeometry args={[leafShape]} />
        <meshStandardMaterial 
          color={colors.main} 
          side={THREE.DoubleSide}
          metalness={0.1}
          roughness={0.9}
          emissive={colors.emissive}
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Leaf Stem */}
      <mesh position={[0, -0.5, -0.01]}>
        <boxGeometry args={[0.04, 1.1, 0.02]} />
        <meshStandardMaterial color={colors.stem} metalness={0.05} roughness={0.95} />
      </mesh>
    </group>
  );
}

function LeafSystem() {
  return (
    <>
      {Array.from({ length: 50 }).map((_, i) => (
        <Leaf key={i} index={i} />
      ))}
    </>
  );
}

export default function FloatingGold() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full">
      {/* Frosted Glass Overlay with Subtle Blur */}
      <div className="absolute inset-0 backdrop-blur-[3px] bg-white/5 z-10" />
      
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#FFF1BD" />
        <spotLight position={[-10, 20, 10]} angle={0.2} penumbra={1} intensity={2.5} />
        <LeafSystem />
      </Canvas>
      
      {/* Subtle depth gradient across the frost */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-white/5 z-20 pointer-events-none" />
    </div>
  );
}
