import { useQuery } from "@tanstack/react-query";
import { type Course } from "@shared/schema";
import CourseCard from "@/components/course-card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Courses() {
  const { data: courses, isLoading } = useQuery<Course[]>({ 
    queryKey: ['/api/courses']
  });

  if (isLoading) {
    return (
      <div className="container mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-[400px] w-full rounded-xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-12 text-center">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses?.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
