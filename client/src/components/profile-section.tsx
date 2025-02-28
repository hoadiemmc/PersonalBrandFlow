import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Star } from "lucide-react";

export default function ProfileSection() {
  return (
    <section className="py-20 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet Your Instructor</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Đặng Tú is a leading expert in AI technology with over a decade of experience
            in training and implementing AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="backdrop-blur-lg bg-card/50">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Expert Instructor</h3>
              <p className="text-sm text-muted-foreground">
                10+ years of experience in AI and machine learning
              </p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-lg bg-card/50">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">30,000+ Students</h3>
              <p className="text-sm text-muted-foreground">
                Trained thousands of successful students worldwide
              </p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-lg bg-card/50">
            <CardContent className="p-6 text-center">
              <Star className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Industry Leader</h3>
              <p className="text-sm text-muted-foreground">
                Partnered with top companies including Angribank and HBR Holdings
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
