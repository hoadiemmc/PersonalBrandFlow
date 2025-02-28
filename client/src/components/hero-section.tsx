import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Master AI Technology
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Learn how to build and scale AI-powered systems with our expert-led courses. Join thousands of successful students.
          </p>
          <Button size="lg" className="gap-2">
            Browse Courses <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
