import { motion } from "framer-motion";
import { type Course } from "@shared/schema";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden backdrop-blur-lg bg-card/50">
        <CardHeader>
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-48 object-cover rounded-lg"
          />
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(course.startDate).toLocaleDateString()}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <span className="text-lg font-bold">${Number(course.price).toFixed(2)}</span>
          <Button>Enroll Now</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
