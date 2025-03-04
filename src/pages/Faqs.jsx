import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-purple-600 rounded-lg p-4">
            <div
                className="cursor-pointer flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-2xl font-bold text-white">{question}</h2>
                <span className="text-purple-600 text-3xl">
                    {isOpen ? "−" : "+"}
                </span>
            </div>
            {isOpen && (
                <p className="mt-4 text-xl text-white">{answer}</p>
            )}
        </div>
    );
};

function RotatingIcosahedron() {
    const meshRef = useRef();
    useFrame(({ clock }) => {
        const elapsed = clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = elapsed * 0.3;
            meshRef.current.rotation.y = elapsed * 0.5;
        }
    });
    return (
        <mesh ref={meshRef}>
            {/* A dense, white icosahedron */}
            <icosahedronGeometry args={[3, 1]} />
            <meshBasicMaterial color="white" wireframe transparent opacity={0.2} />
        </mesh>
    );
}

function TitleBackground() {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px]">
                <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [0, 0, 10] }}>
                    <ambientLight intensity={0.5} />
                    <RotatingIcosahedron />
                </Canvas>
            </div>
        </div>
    );
}

function FAQs() {
    return (
        <section className="min-h-screen bg-black py-16 px-6">
            {/* Heading with 3D animation behind it */}
            <div className="relative flex items-center justify-center mb-12">
                <TitleBackground />
                <h1 className="relative text-6xl font-bold text-white text-center">
                    FAQs
                </h1>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-8">
                    <FAQItem
                        question="Question 1"
                        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id sapien vel dolor dapibus semper."
                    />
                    <FAQItem
                        question="Question 2"
                        answer="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                    />
                    <FAQItem
                        question="Question 3"
                        answer="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque."
                    />
                    <FAQItem
                        question="Question 4"
                        answer="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."
                    />
                </div>
                {/* Right Column */}
                <div className="space-y-8">
                    <FAQItem
                        question="Question 5"
                        answer="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi."
                    />
                    <FAQItem
                        question="Question 6"
                        answer="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
                    />
                    <FAQItem
                        question="Question 7"
                        answer="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />
                    <FAQItem
                        question="Question 8"
                        answer="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    />
                </div>
            </div>
        </section>
    );
}

export default FAQs;
