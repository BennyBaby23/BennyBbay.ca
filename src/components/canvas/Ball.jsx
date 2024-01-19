import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture} from '@react-three/drei';

import CanvasLoader from '../Loader';


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  
  return (
    
    //properties of the ball
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.70} />
      <directionalLight position={[0, 0, 0.05]} />

{/* the 3d model istelf and its properties */}
      <mesh castShadow receiveShadow scale={2.75}> 
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#5D1049" polygonOffset polygonOffsetFactor={0} flatShading/>

      <Decal position={[0, 0, 1]} rotation={[2* Math.PI, 0, 6.25]} flatShading map={decal} />

      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return(
    <div>

     {/* // canvas model to put 3d ball model on it and its properties */}
     <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>

     <Suspense fallback={<CanvasLoader />}>
       <OrbitControls enableZoom={false} />

       {/* rendering the 3d model on canvas */}
       <Ball imgUrl={icon} />
     </Suspense>

     <Preload all />
   </Canvas></div>
  )
}
export default BallCanvas