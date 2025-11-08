import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function SkillSection() {
  const frontendSkills = [
    "Flutter",
    "Dart",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "UI/UX Design",
  ];

  const backendSkills = ["Node.js", "Express.js", "REST API Integration"];

  const databaseSkills = ["Firebase", "MongoDB", "MySQL"];

  const tools = [
    "Git",
    "VS Code",
    "MongoDB",
    "Vercel",
    "Postman",
    "React DevTools",
    "Chrome DevTools",
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Agile Development",
    "Documentation",
  ];

  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 md:px-12 py-16"
    >
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
        Skills
      </h2>

      {/* Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Frontend */}
        <Card className="shadow-md border-green-100">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              🎨 Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Backend */}
        <Card className="shadow-md border-green-100">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              ⚙️ Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Database */}
        <Card className="shadow-md border-green-100">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              🗄️ Database
            </h3>
            <div className="flex flex-wrap gap-2">
              {databaseSkills.map((db) => (
                <span
                  key={db}
                  className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium"
                >
                  {db}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tools & IDEs */}
        <Card className="shadow-md border-green-100">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              🧰 Tools & IDEs
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Soft Skills */}
        <Card className="shadow-md border-green-100 md:col-span-2 lg:col-span-3">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              🤝 Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
