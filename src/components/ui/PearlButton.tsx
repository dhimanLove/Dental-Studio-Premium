import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface PearlButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost";
  to?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const PearlButton = ({
  children,
  variant = "primary",
  to,
  href,
  type = "button",
  onClick,
  className = "",
  disabled = false,
}: PearlButtonProps) => {
  const reduced = useReducedMotion();

  const base =
    "inline-flex items-center justify-center font-body text-sm font-medium tracking-wide rounded-pill px-7 py-3 transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost:
      "bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  const motionProps = reduced
    ? {}
    : {
        whileHover: {
          y: -2,
          boxShadow: "0 10px 30px rgba(107,87,68,0.15)",
        },
        whileTap: { y: 0, scale: 0.98 },
        transition: { duration: 0.2 },
      };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={cls}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a href={href} className={cls} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={cls}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
};

export default PearlButton;
