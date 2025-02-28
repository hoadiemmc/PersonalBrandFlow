import HeroSection from "@/components/hero-section";
import ProfileSection from "@/components/profile-section";
import TestimonialSection from "@/components/testimonial-section";
import FaqSection from "@/components/faq-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <ProfileSection />
      <TestimonialSection />
      <FaqSection />
    </div>
  );
}
