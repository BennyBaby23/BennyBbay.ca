import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {

  // 3d model path
  const computer = useGLTF("./desktop_pc/scene.gltf");
  console.log(computer);
  
    return (
      // mesh for 3d model and properties
      <mesh>
        <hemisphereLight intensity={20.15} groundColor="red" />
        <pointLight intensity={35} />
        <spotLight position={[20, 10, 50]} angle={1.12} penumbra={5} intensity={15} castShadow shadow-mapSize={1024} />
        <primitive object={computer.scene} scale={isMobile ? -3.9 : 4.9} position={isMobile ? [-6, 0.15, -2.2] : [-3, 1.25, -1.15]} rotation={isMobile ? [0, 3.90, 3.2] : [-0.01, 7.0, 0]} />
      </mesh>
    );
};

const ComputersCanvas = () => {

  // for mobile size const
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
   const mediaQuery = window.matchMedia('(max-width: 500px)');
   setIsMobile(mediaQuery.matches);

   const handleMediaQueryChange = (event) => {
    setIsMobile(event.matches);
   }

   mediaQuery.addEventListener('change', handleMediaQueryChange);

   return () => { mediaQuery.removeEventListener('change', handleMediaQueryChange);
   }
  }, []);


  return (
    // canvas model to put 3d model on it and its properties
    <Canvas frameloop="demand" shadows camera={{ position: [10, 7, 5], fov:35}} gl={{preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* rendering the 3d model on canvas */}
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
