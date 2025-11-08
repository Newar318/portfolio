"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Skill", link: "/skill" },
    { label: "Project", link: "/project" },
    { label: "Blog", link: "/blog" },
    { label: "Contact", link: "/contact" },
  ];

  const handleNavigate = (link:string) => {
    router.push(link); // navigate to the route
    setIsOpen(false);  // close mobile menu
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Left Side: Name */}
        <h1
          className="text-2xl font-bold text-gray-900 cursor-pointer"
          onClick={() => handleNavigate("/home")}
        >
          Asbin
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="text-gray-700 hover:text-black"
              onClick={() => handleNavigate(item.link)}
            >
              {item.label}
            </Button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <div className="flex flex-col space-y-2 px-4 py-3">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full text-left text-gray-700 hover:text-black"
                onClick={() => handleNavigate(item.link)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
