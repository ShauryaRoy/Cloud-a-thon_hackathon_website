import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function RotatingCube() {
    const meshRef = useRef();
    useFrame(({ clock }) => {
        const elapsed = clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = elapsed * 0.2;
            meshRef.current.rotation.y = elapsed * 0.3;
            // Apply a pulsating scale effect
            const scale = 1 + Math.sin(elapsed * 2) * 0.1;
            meshRef.current.scale.set(scale, scale, scale);
        }
    });
    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[4, 4, 4]} />
            <meshBasicMaterial color="white" wireframe transparent opacity={0.5} />
        </mesh>
    );
}

function TitleBackground() {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [0, 0, 10] }}>
                    <ambientLight intensity={0.5} />
                    <RotatingCube />
                </Canvas>
            </div>
        </div>
    );
}

function Prizes() {
    return (
        <section className="relative min-h-screen bg-black py-16 px-6">
            {/* Title with 3D Background behind the text */}
            <div className="relative flex items-center justify-center mb-12">
                <TitleBackground />
                <h1 className="relative z-10 text-6xl font-bold text-purple-800">
                    Prizes
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 2nd Prize (Silver) */}
                <div className="flex flex-col items-center p-4 rounded-lg shadow-lg">
                    <h2 className="text-4xl font-semibold text-white mb-4">Rs 10,000</h2>
                    <div className="relative w-[450px] h-[450px] mb-4">
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: "radial-gradient(circle, rgba(192,192,192,0.2) 0%, transparent 70%)",
                            }}
                        ></div>
                        <img
                            className="relative w-full h-full object-contain"
                            src="src/assets/silver.png"
                            alt="2nd Prize"
                        />
                    </div>
                    <p className="text-2xl font-bold text-white">2nd Prize</p>
                </div>
                {/* 1st Prize (Gold) */}
                <div className="flex flex-col items-center p-4 rounded-lg shadow-lg">
                    <h2 className="text-5xl font-semibold text-white mb-4">Rs 15,000</h2>
                    <div className="relative w-[600px] h-[600px] mb-4">
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: "radial-gradient(circle, rgba(255,215,0,0.2) 0%, transparent 70%)",
                            }}
                        ></div>
                        <img
                            className="relative w-full h-full object-contain"
                            src="src/assets/first.png"
                            alt="1st Prize"
                        />
                    </div>
                    <p className="text-2xl font-bold text-white">1st Prize</p>
                </div>
                {/* 3rd Prize (Bronze) */}
                <div className="flex flex-col items-center p-4 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold text-white mb-4">Rs 5,000</h2>
                    <div className="relative w-[450px] h-[450px] mb-4">
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: "radial-gradient(circle, rgba(205,127,50,0.2) 0%, transparent 70%)",
                            }}
                        ></div>
                        <img
                            className="relative w-full h-full object-contain"
                            src="src/assets/bronze.png"
                            alt="3rd Prize"
                        />
                    </div>
                    <p className="text-2xl font-bold text-white">3rd Prize</p>
                </div>
            </div>
        </section>
    );
}

export default Prizes;
