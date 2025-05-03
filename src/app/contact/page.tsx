"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import Contact from "@/components/sections/contact";

export default function ContactPage() {
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
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get in touch with our team to discuss your software needs
              </p>
            </div>
          </div>
        </motion.section>
        <Contact />
      </main>
      <footer className="bg-gray-50 py-8 text-center text-gray-600">
        <p>© 2024 SOFT DEAL. All rights reserved.</p>
      </footer>
    </div>
  );
}
