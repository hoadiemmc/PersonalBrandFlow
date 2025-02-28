import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />

      {/* Animated circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Làm Thế Nào Để Xây 1000 Kênh, Không Lộ Mặt Bằng AI
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Bí Mật Dùng AI X10 Hiệu Suất, Cắt Giảm {">"}50%, Tăng X5 Doanh Số
          </p>

          <div className="space-y-4">
            <Button size="lg" className="gap-2 bg-primary/90 hover:bg-primary">
              Tham Gia Miễn Phí <ArrowRight className="h-4 w-4" />
            </Button>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div>🕒 2h30p/ buổi học</div>
              <div>📅 20h ngày 03-04/03/2025</div>
              <div>💻 Online qua Zoom</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}