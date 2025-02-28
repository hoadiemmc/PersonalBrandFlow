import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Xây Dựng Nền Tảng",
    description: "Học cách sử dụng AI để tạo nội dung chất lượng cao một cách tự động",
  },
  {
    title: "Tối Ưu Hóa",
    description: "Áp dụng các chiến lược tối ưu để tăng tương tác và phát triển kênh",
  },
  {
    title: "Tự Động Hóa",
    description: "Thiết lập hệ thống tự động để quản lý nhiều kênh cùng lúc",
  },
  {
    title: "Mở Rộng Quy Mô",
    description: "Nhân rộng mô hình thành công trên nhiều nền tảng khác nhau",
  },
  {
    title: "Tối Ưu Thu Nhập",
    description: "Xây dựng chiến lược kiếm tiền hiệu quả từ các kênh",
  },
  {
    title: "Phát Triển Bền Vững",
    description: "Duy trì và phát triển hệ thống kênh dài hạn",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Quy Trình 6 Bước Chi Tiết
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Xây 1000 Kênh Không Lộ Mặt Bằng AI (Hoàn Toàn Tự Động)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full backdrop-blur-lg bg-card/50 border-primary/10 hover:border-primary/20 transition-all hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="gap-2 bg-primary/90 hover:bg-primary">
            Khám Phá Ngay <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
