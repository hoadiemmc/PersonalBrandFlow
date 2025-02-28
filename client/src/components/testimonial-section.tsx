import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { type Testimonial } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function TestimonialSection() {
  const { data: testimonials = [] } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials']
  });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Glassmorphism background inspired by reflect.app */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div 
          className="absolute w-[800px] h-[800px] bg-primary/30 rounded-full blur-[120px] opacity-20"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Được Yêu Thích Bởi Các Nhà Tư Doanh
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Đây là những gì mọi người đang nói về chúng tôi
          </p>
        </motion.div>

        <div className="relative">
          {/* First row */}
          <div className="flex overflow-hidden mb-6">
            <div className="flex animate-scroll-left gap-6">
              {[...testimonials].map((testimonial, index) => (
                <motion.div
                  key={`left-${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-[400px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full backdrop-blur-lg bg-card/50 border-primary/10">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{testimonial.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Second row (reverse direction) */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-right gap-6">
              {[...testimonials].reverse().map((testimonial, index) => (
                <motion.div
                  key={`right-${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-[400px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full backdrop-blur-lg bg-card/50 border-primary/10">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{testimonial.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }
      `}</style>
    </section>
  );
}