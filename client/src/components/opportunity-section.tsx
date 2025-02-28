import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, DollarSign } from "lucide-react";

export default function OpportunitySection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(0,0,0,0))]" />
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
                <h3 className="text-xl font-semibold mb-4">Trong Quá Khứ...</h3>
                <p className="text-muted-foreground mb-6">
                  Để tăng trưởng doanh số, kiếm thêm thu nhập, bạn đều cần rất nhiều nguồn lực, bỏ rất nhiều thời gian, và công sức, thậm chí là phải thuê một tá nhân lực, tiền thuê văn phòng,...
                </p>
                <p className="text-muted-foreground">
                  Vấn đề ở đây là kể cả khi bạn đầu tư tiền bạc, công sức ra rồi...Bạn cũng có thể mất trắng, mà không nhận lại được thành quả gì.
                </p>
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
                <h3 className="text-xl font-semibold mb-4">Với AI...</h3>
                <p className="text-muted-foreground mb-6">
                  Chỉ cần có 1 ý tưởng kinh doanh, bán hàng, marketing nào đó. AI sẽ giúp bạn thực hiện:
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
