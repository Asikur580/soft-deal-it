"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DecorativePattern } from "@/components/illustrations/decorative-pattern";
import { BlobPattern } from "@/components/illustrations/blob-pattern";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <DecorativePattern className="text-primary/20" />
      <BlobPattern className="right-0 top-20 w-96 h-96 text-primary transform rotate-90" />
      <BlobPattern className="left-0 bottom-20 w-96 h-96 text-primary/30 transform -rotate-90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with <span className="text-primary block">Innovative Software Solutions</span>
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge software solutions that drive growth, efficiency, and success in the digital age. From custom development to cloud solutions, we're your partner in digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                "99.9% Uptime",
                "24/7 Support",
                "Enterprise Grade Security",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-600">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started">
              <Button size="lg" className="text-lg">
                Get Started
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/schedule-demo">
              <Button size="lg" variant="outline" className="text-lg">
                Schedule Demo
              </Button>
            </Link>
          </motion.div>

          {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {["client1", "client2", "client3", "client4"].map((client, index) => (
              <img key={index} src={`/logos/${client}.svg`} alt="Client Logo" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
            ))}
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}
