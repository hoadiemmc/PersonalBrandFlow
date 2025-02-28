import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

export default function NavHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6" />
          <span className="font-bold text-lg">Học Viện AI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm hover:text-primary transition-colors">
            Trang Chủ
          </Link>
          <Link href="/courses" className="text-sm hover:text-primary transition-colors">
            Khóa Học
          </Link>
        </nav>

        <Button variant="ghost" className="bg-primary/10 hover:bg-primary/20">
          Tham Gia Ngay
        </Button>
      </div>
    </header>
  );
}