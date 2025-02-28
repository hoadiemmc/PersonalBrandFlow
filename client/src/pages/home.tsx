import HeroSection from "@/components/hero-section";
import ProfileSection from "@/components/profile-section";
import OpportunitySection from "@/components/opportunity-section";
import ProcessSection from "@/components/process-section";
import InstructorSection from "@/components/instructor-section";
import TestimonialSection from "@/components/testimonial-section";
import VideoTestimonials from "@/components/video-testimonials";
import PricingSection from "@/components/pricing-section";
import FaqSection from "@/components/faq-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroSection />
      <OpportunitySection />
      <ProfileSection />
      <ProcessSection />
      <InstructorSection />
      <TestimonialSection />
      <VideoTestimonials />
      <PricingSection />
      <FaqSection />
    </div>
  );
}