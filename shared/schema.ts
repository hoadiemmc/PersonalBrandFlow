import { pgTable, text, serial, integer, timestamp, numeric } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  price: numeric("price").notNull(),
  duration: text("duration").notNull(),
  startDate: timestamp("start_date").notNull(),
  instructor: text("instructor").notNull(),
  image: text("image").notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  content: text("content").notNull(),
  rating: integer("rating").notNull(),
});

export const enrollments = pgTable("enrollments", {
  id: serial("id").primaryKey(),
  courseId: integer("course_id").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
});

export const insertCourseSchema = createInsertSchema(courses).omit({ id: true });
export const insertTestimonialSchema = createInsertSchema(testimonials).omit({ id: true });
export const insertEnrollmentSchema = createInsertSchema(enrollments).omit({ id: true });

export type Course = typeof courses.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
export type Enrollment = typeof enrollments.$inferSelect;
export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type InsertEnrollment = z.infer<typeof insertEnrollmentSchema>;
