import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

// New 3D animation: a rotating icosahedron
function RotatingIcosahedron() {
    const meshRef = useRef();
    useFrame(({ clock }) => {
        const elapsed = clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = elapsed * 0.3;
            meshRef.current.rotation.y = elapsed * 0.4;
        }
    });
    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry args={[3, 0]} />
            <meshBasicMaterial color="white" wireframe transparent opacity={0.5} />
        </mesh>
    );
}

// Canvas wrapper for the animation, positioned behind the heading
function TitleBackground() {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px]">
                <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [0, 0, 10] }}>
                    <ambientLight intensity={0.5} />
                    <RotatingIcosahedron />
                </Canvas>
            </div>
        </div>
    );
}

function Timeline() {
    return (
        <section className="min-h-screen bg-black py-16 px-6">
            {/* Heading with 3D Animation Background */}
            <div className="relative flex items-center justify-center mb-12">
                <TitleBackground />
                <h1 className="relative text-5xl font-bold text-white text-center">
                    Timeline
                </h1>
            </div>

            <div className="relative container mx-auto">
                {/* Vertical line in the center */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-pink-600"></div>

                {/* Timeline Event 1 */}
                <div className="mb-8 flex justify-between items-center w-full">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-6 py-4 bg-black border border-purple-600 rounded-md shadow-lg text-right">
                        <p className="mb-2 text-lg text-purple-400">January 2022</p>
                        <h4 className="mb-2 text-2xl font-bold text-white">Project Kickoff</h4>
                        <p className="text-base text-gray-300">
                            We began our journey with a grand kickoff event that set the tone for the project.
                        </p>
                    </div>
                </div>

                {/* Timeline Event 2 */}
                <div className="mb-8 flex justify-between items-center w-full flex-row-reverse">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-6 py-4 bg-black border border-purple-600 rounded-md shadow-lg text-left">
                        <p className="mb-2 text-lg text-purple-400">March 2022</p>
                        <h4 className="mb-2 text-2xl font-bold text-white">First Milestone</h4>
                        <p className="text-base text-gray-300">
                            Our team reached the first milestone with significant progress in development.
                        </p>
                    </div>
                </div>

                {/* Timeline Event 3 */}
                <div className="mb-8 flex justify-between items-center w-full">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-6 py-4 bg-black border border-purple-600 rounded-md shadow-lg text-right">
                        <p className="mb-2 text-lg text-purple-400">June 2022</p>
                        <h4 className="mb-2 text-2xl font-bold text-white">Beta Release</h4>
                        <p className="text-base text-gray-300">
                            The beta version of our product was released, attracting early adopters and valuable feedback.
                        </p>
                    </div>
                </div>

                {/* Timeline Event 4 */}
                <div className="mb-8 flex justify-between items-center w-full flex-row-reverse">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-6 py-4 bg-black border border-purple-600 rounded-md shadow-lg text-left">
                        <p className="mb-2 text-lg text-purple-400">December 2022</p>
                        <h4 className="mb-2 text-2xl font-bold text-white">Official Launch</h4>
                        <p className="text-base text-gray-300">
                            We officially launched our product, marking a new era in innovation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
