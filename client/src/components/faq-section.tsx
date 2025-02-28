import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long are the courses?",
    answer: "Each course consists of 2 sessions, each lasting 2.5 hours. The sessions are conducted live via Zoom."
  },
  {
    question: "What are the prerequisites?",
    answer: "Our courses are designed for all skill levels. Basic computer knowledge is recommended."
  },
  {
    question: "Is there a certificate upon completion?",
    answer: "Yes, you will receive a certificate of completion after successfully finishing the course."
  },
  {
    question: "How can I enroll in a course?",
    answer: "You can enroll by clicking the 'Enroll Now' button on any course page and following the registration process."
  }
];

export default function FaqSection() {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about our courses and learning process.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
