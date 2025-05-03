"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Shield, 
  Users, 
  Clock,
  BarChart,
  Code2,
  HeartHandshake,
  Infinity
} from "lucide-react";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Lightning Fast Performance",
    description: "Our solutions are optimized for maximum speed and efficiency, ensuring your applications run smoothly and respond instantly to user interactions."
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Enterprise-Grade Security",
    description: "State-of-the-art security measures and best practices to protect your valuable data and ensure compliance with industry standards."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "User-Centric Design",
    description: "Beautiful, intuitive interfaces crafted with your users in mind, delivering exceptional experiences across all devices."
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "24/7 Expert Support",
    description: "Round-the-clock technical support and maintenance from our dedicated team of experts, ensuring your systems run smoothly."
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "Dedicated Partnership",
    description: "We're not just a service provider; we're your strategic partner in digital transformation, committed to your long-term success."
  },
  {
    icon: <Infinity className="h-8 w-8 text-primary" />,
    title: "Scalable Solutions",
    description: "Future-proof architecture that grows with your business, designed to handle increasing demands without compromising performance."
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Advanced Analytics",
    description: "Powerful analytics and reporting capabilities that provide actionable insights to drive informed business decisions."
  },
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: "Clean & Maintainable Code",
    description: "Well-structured, documented codebase that's easy to maintain and scale, following industry best practices and standards."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose SOFT DEAL?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We combine technical excellence with innovative thinking to deliver exceptional software solutions that drive your business forward.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
