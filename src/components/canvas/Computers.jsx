import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  console.log(computer);
  
    return (
      <mesh>
        <hemisphereLight intensity={20.15} groundColor="red" />
        <pointLight intensity={35} />
        <spotLight position={[20, 10, 50]} angle={1.12} penumbra={5} intensity={15} castShadow shadow-mapSize={1024} />
        <primitive object={computer.scene} scale={4.9} position={[-3, 1.25, -1.15]} rotation={[-0.01, 7.0, 0]} />
      </mesh>
    );
};

const ComputersCanvas = () => {

  return (
    <Canvas frameloop="demand" shadows camera={{ position: [10, 7, 5], fov:35}} gl={{preserveDrawingBuffer: true }}>
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
