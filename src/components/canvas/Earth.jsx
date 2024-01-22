import {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = () => {
  // importing the 3d model
  const earth = useGLTF('./planet/scene.gltf')

  return (
    // to hold the object
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  )
}

const EarthCanvas = () => {
  return (
    // view properties of the canvas
    <Canvas shadows frameloop='demand' gl={{preserveDrawingBuffer:true}} camera={{fov: 45, near: 0.1, far:200, position:[-4, 3, 6]}}> 

    {/* loading the canvas to put 3d model on it */}
    <Suspense fallback={<CanvasLoader />}> 

    {/* oribatl control to rotate the 3d model */}
      <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>

      {/* rendering the earth model */}
      <Earth />

      </Suspense>
    </Canvas>
  )
}
export default EarthCanvas;