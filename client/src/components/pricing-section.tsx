import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import RegistrationForm from "./registration-form";

export default function PricingSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Glassmorphism background */}
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
          <h2 className="text-3xl font-bold mb-4">Phí Tham Gia Lớp Học</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="backdrop-blur-lg bg-card/50 border-primary/10">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <p className="text-lg text-muted-foreground mb-6">
                    Hiện Tú đang nhận cố vấn & triển khai AI cho các doanh nghiệp với mức phí 100 triệu+.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    Những kinh nghiệm, kiến thức mà Tú chia sẻ trong xuyên suốt 2 buổi học này, cũng như quà tặng mà Tú tặng bạn trong chương trình, Tú hoàn toàn có thể bán nó với giá ít nhất là 5 triệu.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8">
                    Nhưng Tú sẽ dành tặng cho bạn quyền tham gia lớp học này MIỄN PHÍ.
                  </p>
                </div>

                <div className="text-center mb-8">
                  <p className="text-xl font-semibold mb-4">Số Lượng Có Hạn</p>
                  <p className="text-6xl font-bold text-primary mb-2">500</p>
                  <p className="text-lg text-muted-foreground">Suất Tham Gia</p>
                </div>

                <div className="text-center">
                  <p className="mt-4 text-sm text-muted-foreground">
                    * Tú chỉ đăng kí gói Zoom 500 người (gói "Large Meeting"). Vậy nên nếu bạn đăng kí mà thấy thông báo "Đã đủ người tham dự" thì rất mong bạn sẽ thông cảm.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <RegistrationForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}