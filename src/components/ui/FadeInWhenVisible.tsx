import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { ReactNode } from "react";

interface FadeInWhenVisibleProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

const FadeInWhenVisible = ({
  children,
  delay = 0,
  direction = "up",
  className,
}: FadeInWhenVisibleProps) => {
  const reduced = useReducedMotion();

  const yOffset = direction === "up" ? 32 : direction === "down" ? -32 : 0;
  const xOffset = direction === "left" ? 32 : direction === "right" ? -32 : 0;

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
