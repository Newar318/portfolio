import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Github, Linkedin } from "lucide-react";

export default function HomePage() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-6 md:px-12 py-10 mt-16">
      {/* Left Side */}
      <div className="flex-1 flex flex-col items-start text-left space-y-6">
        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
          Asbin shrestha
        </h1>

        {/* Role */}
        <h2 className="text-xl md:text-xl text-gray-600">
          Flutter Developer
        </h2>

        {/* Social Icons */}
        <div className="flex space-x-5 mt-2">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 transition"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-700 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Download Resume Button */}
       <a
  href="/AsbinStha.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="mt-6 bg-green-600 hover:bg-green-700 text-white">
    Download Resume
  </Button>
</a>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-green-50 rounded-full flex items-center justify-center shadow-inner">
          <img
            src="/asbin.jpeg" // replace with your image path
            alt="Asbin"
            className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
