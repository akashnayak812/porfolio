import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
    return (
        <mesh>
            <sphereGeometry args={[2.5, 32, 32]} />
            <meshStandardMaterial color="#4b3ba8" wireframe />
        </mesh>
    );
};

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='always'
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 0, 0.05]} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default EarthCanvas;
