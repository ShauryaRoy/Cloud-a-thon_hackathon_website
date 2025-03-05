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
      <meshBasicMaterial color="black" wireframe transparent opacity={0.6} />
    </mesh>
  );
}

function TitleWithBackground() {
  return (
    <div className="relative flex items-center justify-center w-full h-[400px]">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Canvas className="w-full h-full" camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={1} />
          <RotatingTorus />
        </Canvas>
      </div>
      <h1 className="relative z-10 text-5xl md:text-6xl lg:text-7xl font-bold text-white font-serif text-center">
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
    <section className="min-h-screen bg-black flex flex-col items-center py-16 px-6">
      <TitleWithBackground />

      <div className="relative w-full max-w-4xl">
        {/* Vertical Timeline Line */}
        <div className="absolute left-[20%] md:left-[25%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />

        <div ref={trackContainerRef} className="ml-[25%] md:ml-[30%] space-y-16 mt-40">
          {[
            {
              title: "Healthcare",
              gradient: "from-blue-500 to-green-500",
              content: "Innovating medical solutions using advanced technology to improve patient care and healthcare delivery."
            },
            {
              title: "Education",
              gradient: "from-rose-400 to-yellow-400",
              content: "Enhancing learning experiences with innovative EdTech solutions that foster creativity and critical thinking."
            },
            {
              title: "Finance",
              gradient: "from-purple-400 to-pink-400",
              content: "Revolutionizing payments, banking, and fintech with secure and efficient digital financial services."
            },
            {
              title: "Environment Sustainability",
              gradient: "from-green-400 to-teal-400",
              content: "Developing tech-driven solutions for renewable energy, waste reduction, and environmental preservation."
            },
            {
              title: "Blockchain and DApps",
              gradient: "from-cyan-400 to-blue-400",
              content: "Creating decentralized applications and smart contracts to enhance transparency and efficiency across industries."
            },
            {
              title: "Open Innovation",
              gradient: "from-indigo-400 to-blue-400",
              content: "Fostering creative projects beyond traditional tracks that inspire collaboration and drive breakthrough innovations."
            }
          ].map((track, index) => (
            <div key={index} className="relative group">
              {/* Timeline Dot */}
              {/* <div className="absolute -left-[calc(25%+14px)] top-6 w-3 h-3 rounded-full bg-purple-500 z-10" /> */}

              <div className="p-6 rounded-md shadow-md relative w-full max-w-md transition-all duration-300 hover:translate-x-4">
                <h2 className={`text-3xl font-bold bg-gradient-to-r ${track.gradient} bg-clip-text text-transparent`}>
                  {track.title}
                </h2>
                <p className="text-gray-300 mt-2">{track.content}</p>
              </div>
              <hr className="border-t border-dotted border-gray-600 w-1/4 mt-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tracks;