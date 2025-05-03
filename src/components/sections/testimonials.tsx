"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "SOFT DEAL transformed our business with their innovative solutions. Their team's expertise and dedication are unmatched.",
    author: "John Smith",
    position: "CEO, TechCorp",
  },
  {
    quote: "Working with SOFT DEAL was a game-changer. They delivered beyond our expectations and provided exceptional support.",
    author: "Sarah Johnson",
    position: "CTO, InnovateX",
  },
  {
    quote: "The level of professionalism and technical expertise at SOFT DEAL is outstanding. They're our trusted technology partner.",
    author: "Michael Brown",
    position: "Director, FutureTech",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Don't just take our word for it
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
