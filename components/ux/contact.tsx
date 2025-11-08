import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-green-50 flex flex-col items-center justify-center px-6 md:px-12 py-16"
    >
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
        Contact Me
      </h2>

      {/* Contact Card */}
      <Card className="w-full max-w-3xl shadow-md border-green-100 bg-white">
        <CardContent className="p-8">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="border-gray-300 focus-visible:ring-green-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="border-gray-300 focus-visible:ring-green-500"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Write your message here..."
                rows={5}
                className="border-gray-300 focus-visible:ring-green-500 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
              >
                Send Message
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <div className="text-center mt-8 text-gray-700">
        <p>You can also reach me at:</p>
        <p className="font-semibold text-green-700">asbin@example.com</p>
      </div>
    </section>
  );
}
