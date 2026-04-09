import { motion } from "framer-motion";
import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";
import SectionLabel from "@/components/ui/SectionLabel";
import PearlButton from "@/components/ui/PearlButton";

const services = [
  {
    name: "Teeth Whitening",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4C12 4 9 7 9 11c0 4 1 8 3 12s3 5 4 5 2-1 4-5 3-8 3-12c0-4-3-7-7-7z" />
        <path d="M13 12h6M16 9v6" />
      </svg>
    ),
    desc: "Professional-grade whitening treatments that brighten your smile by several shades in a single session. Safe, effective, and lasting results.",
    price: "₹8,000",
  },
  {
    name: "Braces & Aligners",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="12" width="20" height="8" rx="4" />
        <circle cx="11" cy="16" r="1.5" />
        <circle cx="16" cy="16" r="1.5" />
        <circle cx="21" cy="16" r="1.5" />
      </svg>
    ),
    desc: "From traditional metal braces to invisible clear aligners, we offer orthodontic solutions tailored to your lifestyle, age, and treatment goals.",
    price: "₹35,000",
  },
  {
    name: "Dental Implants",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4v8M13 12h6M14 12l-1 16h6l-1-16" />
        <path d="M13 18h6M13 22h6" />
      </svg>
    ),
    desc: "Titanium implants that fuse naturally with your jawbone, providing a permanent, stable foundation for crowns that look and feel like real teeth.",
    price: "₹25,000",
  },
  {
    name: "Root Canal Treatment",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4c-2 3-3 7-3 11s1 8 3 13" />
        <path d="M20 4c2 3 3 7 3 11s-1 8-3 13" />
        <path d="M16 6v20" />
      </svg>
    ),
    desc: "Painless endodontic treatment that saves damaged teeth. Advanced rotary instruments and apex locators ensure precision and comfort throughout.",
    price: "₹5,000",
  },
  {
    name: "Veneers",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 8c0-2 2-4 6-4s6 2 6 4v4c0 6-3 12-6 16-3-4-6-10-6-16V8z" />
        <path d="M13 10c0-1 1-2 3-2s3 1 3 2v2c0 3-1.5 6-3 8-1.5-2-3-5-3-8v-2z" />
      </svg>
    ),
    desc: "Ultra-thin porcelain shells custom-crafted to cover imperfections. Chips, gaps, discolouration — transformed in just two appointments.",
    price: "₹12,000",
  },
  {
    name: "Wisdom Tooth Extraction",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 6c-1 0-3 2-3 6s1 8 3 14c1-6 2-10 5-10s4 4 5 10c2-6 3-10 3-14s-2-6-3-6" />
        <path d="M19 10l4-4M19 6l4 4" />
      </svg>
    ),
    desc: "Safe, controlled extraction of impacted or problematic wisdom teeth. Minimally invasive technique with rapid recovery protocols.",
    price: "₹3,500",
  },
  {
    name: "Pediatric Dentistry",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="14" r="8" />
        <path d="M13 13.5c0 0 1.5 2.5 3 2.5s3-2.5 3-2.5" />
        <circle cx="13" cy="12" r="1" fill="currentColor" />
        <circle cx="19" cy="12" r="1" fill="currentColor" />
        <path d="M12 22l-2 6M20 22l2 6" />
      </svg>
    ),
    desc: "Child-friendly dental care in a warm, reassuring environment. From first visits to sealants and fillings — designed to build lifelong habits.",
    price: "₹1,500",
  },
  {
    name: "Emergency Care",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4v10M16 28v-8M4 16h10M28 16h-8" />
        <circle cx="16" cy="16" r="12" />
      </svg>
    ),
    desc: "Same-day treatment for dental emergencies — severe pain, broken teeth, knocked-out teeth, swelling, and infections. Call us anytime.",
    price: "₹2,000",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const Services = () => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
    exit={{ opacity: 0, y: -8, transition: { duration: 0.25, ease: "easeIn" } }}
  >
    <section className="pt-32 pb-24 lg:pt-44 lg:pb-36">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-24">
        <FadeInWhenVisible>
          <SectionLabel>What We Offer</SectionLabel>
          <h1 className="font-display text-[clamp(42px,5vw,80px)] text-charcoal mb-4 max-w-3xl">
            Comprehensive dental services
          </h1>
          <p className="font-body text-base text-muted max-w-xl mb-16">
            From routine check-ups to advanced restorative work, every treatment
            at Hope Dental Hospital & Wellness Centre is delivered with precision, care, and
            transparency.
          </p>
        </FadeInWhenVisible>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((s) => (
            <motion.div
              key={s.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
              className="p-8 rounded-lg border border-border bg-bg hover:bg-surface transition-colors duration-300 cursor-pointer"
            >
              <div className="text-secondary mb-4">{s.icon}</div>
              <h3 className="font-display text-2xl text-charcoal mb-2">{s.name}</h3>
              <p className="font-body text-sm text-muted leading-relaxed mb-4">
                {s.desc}
              </p>
              <p className="font-body text-xs text-primary font-medium uppercase tracking-[0.08em]">
                Starting from {s.price}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <FadeInWhenVisible className="mt-16 text-center">
          <p className="font-body text-base text-muted mb-6">
            Not sure which treatment you need? We'll help you find the right plan.
          </p>
          <PearlButton to="/contact">Schedule a Consultation</PearlButton>
        </FadeInWhenVisible>
      </div>
    </section>
  </motion.div>
);

export default Services;