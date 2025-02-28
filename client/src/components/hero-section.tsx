import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Gradient background với hiệu ứng như reflect.app */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute w-[800px] h-[800px] bg-primary/30 rounded-full blur-[120px] opacity-20 animate-pulse" 
             style={{
               top: '50%',
               left: '50%',
               transform: 'translate(-50%, -50%)'
             }}
        />
      </div>

      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Làm Thế Nào Để Xây 1000 Kênh,{" "}
              <br className="hidden md:block" />
              Không Lộ Mặt Bằng AI
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Bí Mật Dùng AI X10 Hiệu Suất, Cắt Giảm {">"}50%, Tăng X5 Doanh Số.
            <br />
            Hoàn Toàn Tự Động Hóa - Không Cần Lộ Mặt
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <Button 
              size="lg" 
              className="gap-2 bg-primary/90 hover:bg-primary text-lg px-8 py-6"
            >
              Tham Gia Miễn Phí <ArrowRight className="h-5 w-5" />
            </Button>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary/60" />
                <span>2h30p/ buổi học</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary/60" />
                <span>20h ngày 03-04/03/2025</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary/60" />
                <span>Online qua Zoom</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}