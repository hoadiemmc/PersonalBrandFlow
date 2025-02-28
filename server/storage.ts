import { users, type User, type InsertUser } from "@shared/schema";
import { courses, type Course, type InsertCourse } from "@shared/schema";
import { testimonials, type Testimonial, type InsertTestimonial } from "@shared/schema";
import { enrollments, type Enrollment, type InsertEnrollment } from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Course operations
  getAllCourses(): Promise<Course[]>;
  getCourse(id: number): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;

  // Testimonial operations
  getAllTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;

  // Enrollment operations
  createEnrollment(enrollment: InsertEnrollment): Promise<Enrollment>;
  getEnrollment(id: number): Promise<Enrollment | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private courses: Map<number, Course>;
  private testimonials: Map<number, Testimonial>;
  private enrollments: Map<number, Enrollment>;
  private currentUserId: number;
  private currentCourseId: number;
  private currentTestimonialId: number;
  private currentEnrollmentId: number;

  constructor() {
    this.users = new Map();
    this.courses = new Map();
    this.testimonials = new Map();
    this.enrollments = new Map();
    this.currentUserId = 1;
    this.currentCourseId = 1;
    this.currentTestimonialId = 1;
    this.currentEnrollmentId = 1;

    // Add some sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    const sampleCourse: InsertCourse = {
      title: "AI Mastery Course",
      description: "Learn how to build and scale AI-powered systems",
      price: "0",
      duration: "2.5 hours",
      startDate: new Date("2025-03-03"),
      instructor: "Đặng Tú",
      image: "https://source.unsplash.com/random/800x600/?artificial-intelligence",
    };
    this.createCourse(sampleCourse);

    const sampleTestimonial: InsertTestimonial = {
      name: "John Doe",
      role: "AI Engineer",
      content: "This course transformed my understanding of AI technology.",
      rating: 5,
    };
    this.createTestimonial(sampleTestimonial);
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Course operations
  async getAllCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async getCourse(id: number): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async createCourse(course: InsertCourse): Promise<Course> {
    const id = this.currentCourseId++;
    const newCourse = { ...course, id };
    this.courses.set(id, newCourse);
    return newCourse;
  }

  // Testimonial operations
  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const newTestimonial = { ...testimonial, id };
    this.testimonials.set(id, newTestimonial);
    return newTestimonial;
  }

  // Enrollment operations
  async createEnrollment(enrollment: InsertEnrollment): Promise<Enrollment> {
    const id = this.currentEnrollmentId++;
    const newEnrollment = { ...enrollment, id };
    this.enrollments.set(id, newEnrollment);
    return newEnrollment;
  }

  async getEnrollment(id: number): Promise<Enrollment | undefined> {
    return this.enrollments.get(id);
  }
}

export const storage = new MemStorage();