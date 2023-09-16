import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  console.log(computer);
  
    return (
      <mesh>
        <hemisphereLight intensity={2.15} groundColor="red" />
        <pointLight intensity={1} />
        <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={5} castShadow shadow-mapSize={1024} />
        <primitive object={computer.scene} scale={7.9} position={[-2, -3.25, -1.15]} rotation={[-0.01, -5.0, 0]} />
      </mesh>
    );
};

const ComputersCanvas = () => {

  return (
    <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov:27}} gl={{preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
