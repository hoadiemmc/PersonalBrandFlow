import { motion } from "framer-motion";

const testimonialVideos = [
  {
    title: "MR LÊ CHÍ LINH - CEO & FOUNDER DILI GROUP",
    vimeoId: "1046087780",
    vimeoHash: "0265d3ef6a",
  },
  {
    title: "X10 HIỆU SUẤT nhờ ABM - Thầy TRẦN VIỆT QUÂN - Sáng lập Trường Tuệ Đức & Học Viện Bách Khoa",
    vimeoId: "1046087886",
    vimeoHash: "28b0202f72",
  },
  {
    title: "CẢM NHẬN CỦA THẦY GIÁO TIKTOK TẠ CÔNG BẰNG - TIKMETA",
    vimeoId: "1046087904",
    vimeoHash: "d7b190dc07",
  },
  {
    title: "MS HOA NGUYỄN - QUẢN LÝ - CHUỖI 7 ELEVENT",
    vimeoId: "1046087769",
    vimeoHash: "d4cc8101a8",
  },
  {
    title: "ỨNG DỤNG A.I TRONG MARKETING & TRUYỀN THÔNG THƯƠNG HIỆU cho Trường Đào tạo Doanh nhân HBR",
    vimeoId: "1046087744",
    vimeoHash: "26415fb1e1",
  },
  {
    title: "DŨNG KIỀU - NHÀ ĐÀO TẠO TẠI PDCA - CẢM NHẬN VỀ AI BUSINESS MASTER",
    vimeoId: "1046089406",
    vimeoHash: "d610bda0e2",
  },
];

export default function VideoTestimonials() {
  return (
    <section className="py-20 container mx-auto px-4 relative">
      {/* Glassmorphism background effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background pointer-events-none" />
        <div 
          className="absolute w-[800px] h-[800px] bg-primary/30 rounded-full blur-[120px] opacity-20"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Cảm Nhận Của Học Viên</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hãy nghe những chia sẻ từ học viên đã tham gia khóa học và đạt được thành công.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialVideos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden backdrop-blur-lg bg-card/50 border border-primary/10">
                <iframe
                  src={`https://player.vimeo.com/video/${video.vimeoId}?h=${video.vimeoHash}`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="mt-4 text-sm text-center text-muted-foreground">{video.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
