"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    client: "RetailTech Inc.",
    description: "A fully responsive e-commerce platform with real-time inventory management and AI-powered recommendations.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Healthcare Management System",
    client: "MedCare Solutions",
    description: "Integrated healthcare management system with electronic health records and appointment scheduling.",
    technologies: ["Angular", "Python", "MongoDB", "Docker"],
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Financial Analytics Dashboard",
    client: "FinanceHub",
    description: "Real-time financial analytics dashboard with predictive modeling and reporting capabilities.",
    technologies: ["Vue.js", "Django", "TensorFlow", "GCP"],
    image: "https://via.placeholder.com/600x400",
  },
];

export default function Portfolio() {
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
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Portfolio</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our successful projects and see how we've helped businesses transform their digital presence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <p className="text-sm text-gray-500">Client: {project.client}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
