import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useNavScroll } from "@/hooks/useNavScroll";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import PearlButton from "@/components/ui/PearlButton";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const scrolled = useNavScroll(60);
  const reduced = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navVariants = {
    top: { backgroundColor: "rgba(247,244,240,0)", height: 72 },
    scrolled: {
      backgroundColor: "rgba(247,244,240,0.92)",
      height: 56,
      backdropFilter: "blur(12px)",
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" },
    }),
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 xl:px-24"
        variants={navVariants}
        animate={scrolled ? "scrolled" : "top"}
        transition={reduced ? { duration: 0 } : { duration: 0.3, ease: "easeOut" }}
        style={{ backdropFilter: scrolled ? "blur(12px)" : "none" }}
      >
        <Link to="/" className="font-display text-xl font-semibold text-charcoal">
          Pearl Dental Studio
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link font-body text-sm font-medium text-charcoal ${
                location.pathname === link.path ? "opacity-100" : "opacity-70 hover:opacity-100"
              } transition-opacity duration-200`}
            >
              {link.label}
            </Link>
          ))}
          <PearlButton to="/contact" variant="primary">
            Book Now
          </PearlButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-6 h-[1.5px] bg-charcoal origin-center"
            animate={mobileOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="block w-6 h-[1.5px] bg-charcoal"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            className="block w-6 h-[1.5px] bg-charcoal origin-center"
            animate={mobileOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
        </button>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg flex flex-col items-start justify-center px-10 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                custom={i}
                variants={reduced ? undefined : menuItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Link
                  to={link.path}
                  className="font-display text-4xl text-charcoal"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              custom={navLinks.length}
              variants={reduced ? undefined : menuItemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <PearlButton to="/contact" onClick={() => setMobileOpen(false)}>
                Book Now
              </PearlButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
