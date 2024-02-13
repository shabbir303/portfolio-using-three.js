import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../../Component/Loader";
import Island from "../../Component/models/Island";


const Home = () => {
    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.1, 4.7, 0];
        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];

        }
        else {
            screenScale = [1, 1, 1];
        }
        return [screenScale, screenPosition, rotation]
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    return (
        <div>
            <section className="w-full h-screen relative">
                <Canvas className="full h-screen relative"
                 camera={{near:0.1, far: 1000}}
                >
                    <Suspense fallback={Loader}>
                        <directionalLight/>
                        <ambientLight/>
                        <pointLight/>
                        <spotLight/>
                        <hemisphereLight/>

                        <Island
                          scale = {islandScale}
                          position = {islandPosition}
                          rotation = {islandRotation}
                        />
                    </Suspense>
                    
                </Canvas>
            </section>
        </div>
    );
};

export default Home;