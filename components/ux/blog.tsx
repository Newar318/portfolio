import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 md:px-12 py-16"
    >
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
        Blog & Interests
      </h2>

      <div className="max-w-5xl">
        <Card className="shadow-md border-green-100 bg-green-50">
          <CardContent className="p-8 space-y-6">
            {/* Blog Content */}
            <p className="text-gray-700 text-lg leading-relaxed">
              I’m <span className="font-semibold text-gray-900">Asbin</span>, a passionate learner
              and tech enthusiast who is always eager to explore new technologies,
              frameworks, and tools. I believe that learning is a continuous journey,
              and I enjoy keeping up with the latest trends in software development.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Besides coding, I love challenging myself with both{" "}
              <span className="font-semibold text-green-700">physical</span> and{" "}
              <span className="font-semibold text-green-700">mental</span> games.
              Playing <span className="font-semibold">football</span>,{" "}
              <span className="font-semibold">badminton</span>, and{" "}
              <span className="font-semibold">volleyball</span> keeps me active and focused,
              while games like <span className="font-semibold">PUBG</span> and{" "}
              <span className="font-semibold">Clash of Clans</span> help sharpen my strategy and decision-making skills.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Through my blog, I aim to share my experiences, lessons, and thoughts
              about technology, personal growth, and teamwork. Whether it's solving
              a coding challenge or winning a match, I believe every experience teaches
              something valuable.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
