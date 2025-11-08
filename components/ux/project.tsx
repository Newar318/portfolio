import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function ProjectSection() {
  const projects = [
    {
      title: "🚌 Bus Ticketing System",
      description:
        "A web application that allows users to book and manage bus tickets with real-time seat availability and payment options.",
      link: "https://github.com/yourusername/bus-ticketing-system", // replace with your link
    },
    {
      title: "🛍️ E-commerce Website",
      description:
        "A modern online store built for seamless shopping experiences — featuring product search, cart, and secure checkout.",
      link: "https://github.com/yourusername/ecommerce-website", // replace with your link
    },
    {
      title: "🏫 Inventory Management System (IMS)",
      description:
        "A management system for tracking product stocks, suppliers, and sales — built with role-based authentication.",
      link: "https://github.com/yourusername/ims-project", // replace with your link
    },
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-green-50 flex flex-col items-center justify-center px-6 md:px-12 py-16"
    >
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
        Projects
      </h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="shadow-md hover:shadow-lg transition-all border-green-100 bg-white"
          >
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {project.description}
              </p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-white w-full"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
