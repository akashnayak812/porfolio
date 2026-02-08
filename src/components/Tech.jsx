import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";

import CanvasLoader from "./Loader";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Ball = (props) => {
    // Placeholder texture logic since we don't have real icons yet
    // We'll just render a color for now
    // const [decal] = useTexture([props.imgUrl]);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                {/* <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        /> */}
                {/* Temporary Label */}
                <mesh position={[0, 0, 1.1]}>
                    <boxGeometry args={[0.5, 0.5, 0.1]} />
                    <meshStandardMaterial color={props.color || "violet"} />
                </mesh>
            </mesh>
        </Float>
    );
};

const BallCanvas = ({ icon }) => {
    return (
        <Canvas
            frameloop='always'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Ball imgUrl={icon} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

const Tech = () => {
    // Generate some random colors for placeholders
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"];

    return (
        <div className='flex flex-row flex-wrap justify-center gap-10'>
            {technologies.map((technology, index) => (
                <div className='w-28 h-28' key={technology.name}>
                    {/* <BallCanvas icon={technology.icon} /> */}
                    <div className="w-full h-full rounded-full bg-tertiary border-2 border-white-100 flex justify-center items-center relative overflow-hidden group hover:border-[#915eff] transition-colors">
                        <span className="z-10 text-[10px] text-center p-1">{technology.name}</span>
                        {/* <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity" style={{backgroundColor: colors[index % colors.length]}}></div> */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SectionWrapper(Tech, "");
