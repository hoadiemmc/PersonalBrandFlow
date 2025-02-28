import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { type Testimonial } from "@shared/schema";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialSection() {
  const { data: testimonials } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials']
  });

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Hear from our successful students who have transformed their careers with our courses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials?.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full backdrop-blur-lg bg-card/50">
              <CardHeader>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
              <CardFooter>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
