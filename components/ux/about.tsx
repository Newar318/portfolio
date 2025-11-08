import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-16 bg-green-50"
    >
      {/* Left Side - Image */}
      <div className="flex-1 flex justify-center mb-10 md:mb-0">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
          <img
            src="/asbin.jpeg" // replace this with your actual image path
            alt="Asbin"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Side - About Text */}
      <div className="flex-1 text-left space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          About Me
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Hi, I’m <span className="font-semibold text-gray-800">Asbin</span>, a
          dedicated <span className="text-green-600 font-medium">Flutter Developer</span> 
          who loves creating elegant and functional mobile applications. My focus
          is on delivering smooth user experiences with clean and efficient code.
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          I’m passionate about learning new technologies, improving my craft, and
          building innovative digital solutions that make an impact. Whether it’s
          designing UI, integrating APIs, or optimizing performance — I enjoy
          every step of the process.
        </p>
      </div>
    </section>
  );
}
