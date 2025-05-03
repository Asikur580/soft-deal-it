"use client";

import { motion } from "framer-motion";
import { Users, Building2, Award, Globe2, Stars, Timer, Code, Cpu } from "lucide-react";

const stats = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    number: "10+",
    label: "Happy Clients",
    description: "Trusted by businesses worldwide"
  },
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    number: "20+",
    label: "Projects Delivered",
    description: "Across various industries"
  },
  {
    icon: <Timer className="h-8 w-8 text-primary" />,
    number: "99.9%",
    label: "Uptime Guaranteed",
    description: "Reliable and stable solutions"
  },
  {
    icon: <Globe2 className="h-8 w-8 text-primary" />,
    number: "5+",
    label: "Countries Served",
    description: "Global reach and expertise"
  },
  {
    icon: <Stars className="h-8 w-8 text-primary" />,
    number: "0",
    label: "Industry Awards",
    description: "Recognition for excellence"
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    number: "2M+",
    label: "Lines of Code",
    description: "Powering digital solutions"
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    number: "5+",
    label: "Tech Experts",
    description: "Skilled professionals"
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    number: "5+",
    label: "Years Experience",
    description: "Industry expertise"
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A track record of success, delivering innovative solutions and exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-medium text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}