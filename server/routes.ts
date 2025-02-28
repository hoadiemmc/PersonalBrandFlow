import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertCourseSchema, insertEnrollmentSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  // Get all courses
  app.get("/api/courses", async (_req, res) => {
    const courses = await storage.getAllCourses();
    res.json(courses);
  });

  // Get all testimonials
  app.get("/api/testimonials", async (_req, res) => {
    const testimonials = await storage.getAllTestimonials();
    res.json(testimonials);
  });

  // Enroll in a course
  app.post("/api/enroll", async (req, res) => {
    const enrollment = insertEnrollmentSchema.parse(req.body);
    const result = await storage.createEnrollment(enrollment);
    res.json(result);
  });

  const httpServer = createServer(app);
  return httpServer;
}
