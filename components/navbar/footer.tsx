import React from "react";
import { Facebook, Instagram, Github, Linkedin, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Side - Contact */}
        <div className="flex flex-col space-y-2 items-center md:items-start">
          <h3 className="text-xl font-bold text-green-500 mb-2">Contact Me</h3>
          <p className="flex items-center gap-2 text-gray-300">
            <Phone className="w-5 h-5" /> +977 9860473506
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <MessageCircle className="w-5 h-5" /> WhatsApp: +977 9860473506
          </p>
        </div>

        {/* Right Side - Social Links */}
        <div className="flex flex-col space-y-2 items-center md:items-end">
          <h3 className="text-xl font-bold text-green-500 mb-2">Follow Me</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/share/17K7UEWyTb/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/asbin_stha.7?igsh=MWtvMzBnZjk1djM4eg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/https://github.com/Newar318"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/asbin-shrestha-02441b32a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Asbin Shrestha. All rights reserved.
      </div>
    </footer>
  );
}
