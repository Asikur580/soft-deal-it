"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code, LineChart, Shield, Smartphone, Cloud, Database, Bot, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your business needs. From web applications to enterprise systems, we ensure scalability and maintainability.",
    features: ["Full-stack Development", "API Integration", "Legacy System Modernization"]
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "ECommerce Website Development",
    description: "We create responsive, mobile-optimized eCommerce websites that provide excellent user experiences and drive growth for your business.",
    features: ["iOS & Android Development", "Cross-platform Solutions", "Mobile UI/UX Design"]
  },
  {
    icon: <Cloud className="h-8 w-8 text-primary" />,
    title: "API Development & Integration",
    description: "We provide cloud solutions that enable seamless API integrations, improving scalability, flexibility, and system performance.",
    features: ["Cloud Migration", "DevOps", "API Integration"]
  },
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: "Multi-Auth & User Management System",
    description: "We build secure and scalable user management systems with multi-authentication methods to improve data security and user experience.",
    features: ["User Authentication", "Role-Based Access", "Data Protection"]
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Bug Fixing & Performance Optimization",
    description: "We fix critical bugs and optimize your system’s performance to ensure smooth and reliable operation, improving user satisfaction.",
    features: ["Bug Fixes", "Performance Tuning", "System Monitoring"]
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "SaaS (Software as a Service) Development",
    description: "We build innovative SaaS solutions, enabling businesses to automate processes, improve efficiency, and scale operations.",
    features: ["Subscription-Based Models", "Cloud-Native Solutions", "Scalable Architecture"]
  }
];


export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of software solutions to help your business thrive
              in the digital landscape. Our expertise spans across multiple domains and technologies.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" variant="outline">
            View All Services
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}