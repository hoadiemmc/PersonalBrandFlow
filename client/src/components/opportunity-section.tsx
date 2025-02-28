import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, DollarSign, Bot, Sparkles } from "lucide-react";

export default function OpportunitySection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background inspired by reflect.app */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] opacity-20"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Tại Sao A.I Sẽ Là Cơ Hội Lớn Nhất Thế Kỉ 21?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full backdrop-blur-lg bg-card/50 border-primary/10 hover:border-primary/20 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-primary" />
                  Trong Quá Khứ...
                </h3>
                <p className="text-muted-foreground mb-6">
                  Để tăng trưởng doanh số, kiếm thêm thu nhập, bạn đều cần rất nhiều nguồn lực, bỏ rất nhiều thời gian, và công sức:
                </p>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1">•</span>
                    <span>Thuê nhiều nhân sự để sản xuất nội dung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">•</span>
                    <span>Chi phí thuê văn phòng, thiết bị đắt đỏ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">•</span>
                    <span>Thời gian training nhân sự kéo dài</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full backdrop-blur-lg bg-card/50 border-primary/10 hover:border-primary/20 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Bot className="h-6 w-6 text-primary" />
                  Với AI...
                </h3>
                <p className="text-muted-foreground mb-6">
                  Chỉ cần có 1 ý tưởng kinh doanh, AI sẽ giúp bạn:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>Nhanh Chóng (Gấp 10 Lần Bình Thường)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <span>Tốn Rất Ít Tiền (Bằng 1/10 Bình Thường)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span>Hoàn Toàn Tự Động (Không Cần Thuê Nhân Sự)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="gap-2 bg-primary/90 hover:bg-primary">
            Tham Gia Ngay <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}