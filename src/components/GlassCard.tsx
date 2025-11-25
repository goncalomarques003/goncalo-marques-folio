import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const GlassCard = ({ children, className, delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "rounded-2xl border-2 border-card-border bg-card backdrop-blur-sm",
        "shadow-card hover:shadow-card-hover",
        "hover:scale-[1.02] transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
