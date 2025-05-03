'use client';

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";

const blogPost = {
  title: "The Future of AI in Software Development",
  content: `
    <p className='mb-4'>
      Artificial Intelligence is revolutionizing the way we approach software development. From automated testing to intelligent code completion, AI is becoming an integral part of the development workflow.
    </p>
    <h2 className='text-2xl font-bold mt-8 mb-4'>The Impact of AI on Development Workflows</h2>
    <p className='mb-4'>
      Modern development environments are increasingly incorporating AI-powered features that help developers write better code faster. These tools can predict common coding patterns, identify potential bugs before they make it to production, and even suggest optimizations for performance improvements.
    </p>
    <h2 className='text-2xl font-bold mt-8 mb-4'>Key Areas Where AI is Making a Difference</h2>
    <ul className='list-disc list-inside mb-4 space-y-2'>
      <li>Automated Code Review and Quality Assurance</li>
      <li>Intelligent Code Completion and Suggestions</li>
      <li>Bug Detection and Prevention</li>
      <li>Performance Optimization</li>
      <li>Natural Language Processing for Documentation</li>
    </ul>
  `,
  author: {
    name: "John Smith",
    role: "Chief Technology Officer",
    avatar: "https://via.placeholder.com/60",
  },
  date: "February 5, 2024",
  readTime: "5 min read",
  category: "Technology Trends",
  tags: ["AI", "Software Development", "Future Tech", "Innovation"],
};

const relatedPosts = [
  {
    title: "Best Practices for Scalable Cloud Architecture",
    excerpt: "Learn the key principles and patterns for building highly scalable cloud-native applications.",
    date: "February 3, 2024",
    readTime: "8 min read",
    category: "Cloud Computing",
  },
  {
    title: "Securing Your Application: A Complete Guide",
    excerpt: "A comprehensive guide to implementing security best practices in modern web applications.",
    date: "January 30, 2024",
    readTime: "10 min read",
    category: "Security",
  },
];

export default function BlogPost() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button variant="ghost" className="mb-8" onClick={() => router.push('/blog')}>
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>

            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">{blogPost.category}</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{blogPost.title}</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center"><CalendarDays className="h-4 w-4 mr-1" /> {blogPost.date}</div>
                <div className="flex items-center"><Clock className="h-4 w-4 mr-1" /> {blogPost.readTime}</div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: blogPost.content }} />

            <div className="flex items-center space-x-4 border-t pt-8">
              <img src={blogPost.author.avatar} alt={blogPost.author.name} className="h-12 w-12 rounded-full" />
              <div>
                <div className="font-medium text-gray-900">{blogPost.author.name}</div>
                <div className="text-gray-500">{blogPost.author.role}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {blogPost.tags.map((tag, index) => (
                <Badge key={index} variant="outline">{tag}</Badge>
              ))}
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t">
              <Button variant="ghost"><ArrowLeft className="mr-2 h-4 w-4" /> Previous Post</Button>
              <Button variant="ghost">Next Post <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((post, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="flex items-center text-sm text-gray-500"><CalendarDays className="h-4 w-4 mr-1" /> {post.date}</div>
                      </div>
                      <h3 className="text-xl font-semibold hover:text-primary transition-colors">{post.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center text-sm text-gray-500"><Clock className="h-4 w-4 mr-1" /> {post.readTime}</div>
                        <Link href="/blog" className="text-primary hover:text-primary/80 transition-colors">Read More</Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.article>
      </main>
    </div>
  );
}
