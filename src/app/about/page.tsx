"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-6">About SOFT DEAL</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Leading the way in innovative software solutions since 2020
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  To empower businesses with cutting-edge software solutions that drive growth,
                  efficiency, and success in the digital age. We believe in creating technology
                  that makes a difference.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
                <ul className="space-y-4 text-gray-600">
                  <li>Innovation in every solution</li>
                  <li>Customer success as our priority</li>
                  <li>Excellence in delivery</li>
                  <li>Continuous improvement</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 text-center"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our team of experts brings together decades of experience in software development,
                design, and business strategy to deliver exceptional results for our clients.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-50 py-8 text-center text-gray-600">
        <p>© 2024 SOFT DEAL. All rights reserved.</p>
      </footer>
    </div>
  );
}
