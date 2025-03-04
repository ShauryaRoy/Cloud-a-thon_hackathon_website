import React from 'react';

function AboutUs() {
    return (
        <section className="h-[50]  py-16 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Side: Title and Text */}
                <div>
                    <h1 className="text-5xl font-bold text-purple-800 mb-6">About Us</h1>
                    <p className="text-2xl text-white leading-relaxed">
                        At CloudOps, we are a passionate community of tech enthusiasts dedicated to empowering developers and businesses with cloud computing, DevOps, and automation expertise. Our mission is to bridge the gap between infrastructure and innovation, enabling seamless deployment, scalability, and optimization of cloud-native applications.

                        As a student-led initiative at VIT Chennai, we focus on hands-on learning, workshops, and hackathons to foster a deeper understanding of cloud technologies. From CI/CD pipelines to Kubernetes orchestration, we explore cutting-edge tools that drive modern cloud operations.
                    </p>
                </div>
                {/* Right Side: Image */}
                <div className="flex justify-center">
                    <img
                        src="src/assets/vit-image.svg"
                        alt="About Us"
                        className="w-full max-w-md rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
