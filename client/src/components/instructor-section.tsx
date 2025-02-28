import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "@/components/ui/image";

const achievements = [
  {
    title: "30,000+ Học Viên",
    description: "Đào tạo cả Online và Offline",
    image: "https://source.unsplash.com/random/800x600/?classroom"
  },
  {
    title: "Doanh Nghiệp Lớn",
    description: "Angribank, HBR Holdings, BKE, Gein Academy",
    image: "https://source.unsplash.com/random/800x600/?business"
  },
  {
    title: "Chuyên Gia AI",
    description: "Cố vấn & triển khai AI cho doanh nghiệp",
    image: "https://source.unsplash.com/random/800x600/?artificial-intelligence"
  }
];

export default function InstructorSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mr. Đặng Tú Là Ai?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mr. Đặng Tú đã đào tạo AI cho hơn 30000 học viên và hàng chục doanh nghiệp trong đủ các lĩnh vực trong năm nay.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full backdrop-blur-lg bg-card/50 border-primary/10 hover:border-primary/20 transition-all hover:scale-105">
                <CardContent className="p-6">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Hình ảnh học viên */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="aspect-video rounded-lg overflow-hidden backdrop-blur-lg bg-card/50 border border-primary/10"
          >
            <img 
              src="/path-to-image1.jpg" // Thay thế bằng link ảnh thực tế
              alt="Học viên tham gia khóa học"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="aspect-video rounded-lg overflow-hidden backdrop-blur-lg bg-card/50 border border-primary/10"
          >
            <img 
              src="/path-to-image2.jpg" // Thay thế bằng link ảnh thực tế
              alt="Đào tạo doanh nghiệp"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-video rounded-lg overflow-hidden backdrop-blur-lg bg-card/50 border border-primary/10"
          >
            <img 
              src="/path-to-image3.jpg" // Thay thế bằng link ảnh thực tế
              alt="Workshop AI"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
