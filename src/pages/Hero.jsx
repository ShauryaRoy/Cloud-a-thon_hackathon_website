import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { Canvas, useFrame } from "@react-three/fiber";

function RotatingSphere() {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = elapsed * 0.2;
      meshRef.current.rotation.x = elapsed * 0.15;
    }
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[12, 32, 32]} /> {/* Reduced sphere size */}
      <meshBasicMaterial color="white" wireframe transparent opacity={0.1} />
    </mesh>
  );
}

function Hero() {
  const calculatetimeleft = () => {
    const difference = new Date("2025-03-10T23:59:59") - new Date();
    if (difference <= 0)
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeleft, setTimeLeft] = useState(calculatetimeleft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculatetimeleft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />
      <section className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 px-4"> {/* Added padding and responsive height */}
        <div className="relative flex items-center justify-center w-full max-w-6xl">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Canvas className="w-full h-[400px] md:h-[400px]" camera={{ position: [0, 0, 20] }}>
              <ambientLight intensity={0.5} />
              <RotatingSphere />
            </Canvas>
          </div>
          <h1 className="relative z-10 text-sky-50 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center px-4">
            Cloud-A-Thon
          </h1>
        </div>

        <h3 className="font-rubik-doodle font-bold text-white mt-6 md:mt-10 text-xl md:text-2xl text-center">
          Build IT. Deploy IT. Repeat
        </h3>

        <p className="font-rubik-doodle text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-6 md:mt-8 text-sky-50 flex flex-wrap justify-center gap-4 md:gap-8">
          <span>{timeleft.days}D</span>
          <span>{timeleft.hours}H</span>
          <span>{timeleft.minutes}M</span>
          <span>{timeleft.seconds}S</span>
        </p>

        <div className="mt-8 md:mt-12 px-4 w-full flex justify-center">
          <img
            className="w-full max-w-[400px] md:max-w-[500px]"
            src="src/assets/toxi-logo.png"
            alt="Logo"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;