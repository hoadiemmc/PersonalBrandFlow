import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Star, Clock } from "lucide-react";

export default function ProfileSection() {
  return (
    <section className="py-20 container mx-auto px-4 relative">
      {/* Glassmorphism background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Mr. Đặng Tú Là Ai?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mr. Đặng Tú đã đào tạo AI cho hơn 30000 học viên (cả Online và Offline), và hàng chục doanh nghiệp trong đủ các lĩnh vực trong năm nay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="backdrop-blur-lg bg-card/50 border-primary/10 hover:border-primary/20 transition-colors">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Chuyên Gia AI</h3>
              <p className="text-sm text-muted-foreground">
                Cố vấn & triển khai AI cho các doanh nghiệp với mức phí 100 triệu+
              </p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-lg bg-card/50 border-primary/10 hover:border-primary/20 transition-colors">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">30,000+ Học Viên</h3>
              <p className="text-sm text-muted-foreground">
                Đã đào tạo cho hàng chục doanh nghiệp như Angribank, HBR Holdings, BKE,...
              </p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-lg bg-card/50 border-primary/10 hover:border-primary/20 transition-colors">
            <CardContent className="p-6 text-center">
              <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Khóa Học Thực Tế</h3>
              <p className="text-sm text-muted-foreground">
                Quy trình 6 bước chi tiết giúp bạn xây dựng kênh AI không lộ mặt
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}