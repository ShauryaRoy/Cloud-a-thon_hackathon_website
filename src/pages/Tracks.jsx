import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function RotatingTorus() {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = elapsed * 0.1;
      meshRef.current.rotation.y = elapsed * 0.15;
    }
  });
  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[4, 1, 16, 100]} />
      <meshBasicMaterial color="white" wireframe transparent opacity={0.15} />
    </mesh>
  );
}

function TitleWithBackground() {
  return (
    <div className="relative flex items-center justify-center w-full">
      {/* 3D Background behind the title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          <Canvas
            style={{ width: "100%", height: "100%" }}
            camera={{ position: [0, 0, 10] }}
          >
            <ambientLight intensity={0.5} />
            <RotatingTorus />
          </Canvas>
        </div>
      </div>
      <h1 className="relative z-10 text-5xl md:text-6xl lg:text-7xl font-bold text-white font-serif">
        Tracks
      </h1>
    </div>
  );
}

function Tracks() {
  const trackContainerRef = useRef(null);

  useEffect(() => {
    const tracks = trackContainerRef.current.children;
    gsap.fromTo(
      tracks,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: trackContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="min-h-screen bg-black py-16 px-6">
      <TitleWithBackground />

      <div className="relative max-w-4xl mx-auto mt-12">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>

        <div ref={trackContainerRef} className="space-y-12 ml-8 mt-40">
          <div className="p-6 rounded-md shadow-md max-w-md">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Healthcare
            </h2>
            <p className="text-gray-300 mt-2">
              Innovating medical solutions using advanced technology to improve patient care and healthcare delivery.
            </p>
          </div>
          <hr className="border-t border-dotted border-gray-600 w-1/4 ml-8" />

          {/* Education */}
          <div className="p-6 rounded-md shadow-md max-w-md">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-yellow-400 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-gray-300 mt-2">
              Enhancing learning experiences with innovative EdTech solutions that foster creativity and critical thinking.
            </p>
          </div>
          <hr className="border-t border-dotted border-gray-600 w-1/4 ml-8" />

          {/* Finance */}
          <div className="p-6 rounded-md shadow-md max-w-md">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Finance
            </h2>
            <p className="text-gray-300 mt-2">
              Revolutionizing payments, banking, and fintech with secure and efficient digital financial services.
            </p>
          </div>
          <hr className="border-t border-dotted border-gray-600 w-1/4 ml-8" />

          {/* Environment Sustainability */}
          <div className="p-6 rounded-md shadow-md max-w-md">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Environment Sustainability
            </h2>
            <p className="text-gray-300 mt-2">
              Developing tech-driven solutions for renewable energy, waste reduction, and environmental preservation.
            </p>
          </div>
          <hr className="border-t border-dotted border-gray-600 w-1/4 ml-8" />

          {/* Blockchain and DApps */}
          <div className="p-6 rounded-md shadow-md max-w-md">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Blockchain and DApps
            </h2>
            <p className="text-gray-300 mt-2">
              Creating decentralized applications and smart contracts to enhance transparency and efficiency across industries.
            </p>
          </div>
          <hr className="border-t border-dotted border-gray-600 w-1/4 ml-8" />

          {/* Open Innovation */}
          <div className="p-6 rounded-md shadow-md max-w-md">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Open Innovation
            </h2>
            <p className="text-gray-300 mt-2">
              Fostering creative projects beyond traditional tracks that inspire collaboration and drive breakthrough innovations.
            </p>
          </div>
          <hr className="border-t border-dotted border-gray-600 w-1/4 ml-8" />
        </div>
      </div>
    </section>
  );
}

export default Tracks;
