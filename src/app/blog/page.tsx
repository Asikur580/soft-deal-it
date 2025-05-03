"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ChevronRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of AI in Software Development",
    excerpt: "Explore how artificial intelligence is revolutionizing the way we build and maintain software applications.",
    date: "February 5, 2024",
    readTime: "5 min read",
    category: "Technology Trends",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Best Practices for Scalable Cloud Architecture",
    excerpt: "Learn the key principles and patterns for building highly scalable cloud-native applications.",
    date: "February 3, 2024",
    readTime: "8 min read",
    category: "Cloud Computing",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Securing Your Application: A Complete Guide",
    excerpt: "A comprehensive guide to implementing security best practices in modern web applications.",
    date: "January 30, 2024",
    readTime: "10 min read",
    category: "Security",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "The Rise of Edge Computing",
    excerpt: "Discover how edge computing is transforming the way we process and deliver data in real-time applications.",
    date: "January 28, 2024",
    readTime: "6 min read",
    category: "Infrastructure",
    image: "https://via.placeholder.com/600x400",
  }
];

export default function Blog() {
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
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Latest Insights</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Stay updated with the latest trends, technologies, and insights from our expert team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => {
                    const slug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    window.location.href = `/blog/${slug}`;
                  }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <CalendarDays className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <CardTitle className="text-xl hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center text-primary hover:text-primary/80 transition-colors">
                          Read More
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </div>
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