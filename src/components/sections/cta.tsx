"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { WavePattern } from "@/components/illustrations/wave-pattern";

export default function CTA() {
  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      <WavePattern className="text-white transform scale-y-[-1]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Join hundreds of successful businesses that trust SOFT DEAL for their software needs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              variant="secondary"
              className="text-primary hover:text-primary/90"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}