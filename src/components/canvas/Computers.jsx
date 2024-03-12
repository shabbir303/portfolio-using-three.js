import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
const Computer = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 568px)");
    setMobile(mediaQuery.matches)
    const handleMediaQueryChange = (event) => {
      setMobile(event.matches)
    }
    mediaQuery.addEventListener("change", handleMediaQueryChange)
    return (
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    )
  }, [])
  const computer = useGLTF('/desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.85}
        groundColor="black" />
      <pointLight intensity={1.58} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={mobile? 0.55: 0.75}
        position={mobile?[0,-2.0,-1.8]: [0, -2.85, -1.5]}
        rotation={[-0.01, -0.2, -0, 1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={CanvasLoader}>
        <OrbitControls enableZoom={false} />
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        <Computer />
      </Suspense>
      <Preload all />
    </Canvas>
  )

}

export default ComputersCanvas