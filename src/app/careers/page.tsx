"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, BadgeDollarSign } from "lucide-react";

const jobOpenings = [
  {
    title: "Senior Full Stack Developer",
    location: "Remote / San Francisco, CA",
    type: "Full-time",
    salary: "$120K - $180K",
    description: "We're looking for an experienced Full Stack Developer to join our growing team. You'll work on challenging projects and help shape the future of our technology stack."
  },
  {
    title: "UX/UI Designer",
    location: "Remote / New York, NY",
    type: "Full-time",
    salary: "$90K - $140K",
    description: "Join our design team to create beautiful, intuitive interfaces that delight users and solve complex problems through design thinking."
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$100K - $160K",
    description: "Help us build and maintain robust infrastructure and deployment pipelines. Experience with cloud platforms and containerization required."
  },
  {
    title: "Product Manager",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$110K - $170K",
    description: "Drive product strategy and work closely with development teams to deliver high-impact solutions that meet customer needs."
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Join Our Team</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Be part of a team that's shaping the future of software development. We offer competitive benefits and a dynamic work environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{job.title}</h3>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-5 w-5 mr-2" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-5 w-5 mr-2" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <BadgeDollarSign className="h-5 w-5 mr-2" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{job.description}</p>
                      <Button className="w-full">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't see the right role?</h2>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button variant="outline">
                Send Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.section>
      </main>
      <footer className="bg-gray-50 py-8 text-center text-gray-600">
        <p>© 2024 SOFT DEAL. All rights reserved.</p>
      </footer>
    </div>
  );
}
