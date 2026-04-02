import { motion, useScroll, useTransform, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";
import SectionLabel from "@/components/ui/SectionLabel";
import PearlButton from "@/components/ui/PearlButton";

/* ─── Hero ─── */

const wordVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.08,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const imageVariants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", scale: 1.05 },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    scale: 1,
    transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
  },
};

function StatCounter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setCount(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => controls.stop();
  }, [target, reduced]);

  return (
    <div>
      <span className="font-display text-4xl lg:text-5xl text-primary font-semibold">
        {count.toLocaleString()}+
      </span>
      <p className="font-body text-sm text-muted mt-1">{label}</p>
    </div>
  );
}

function Hero() {
  const reduced = useReducedMotion();
  const headline = "Your smile, designed with precision.".split(" ");

  return (
    <section className="min-h-screen flex items-center pt-20 pb-24 lg:pb-36">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Text — 60% */}
          <div className="lg:col-span-3">
            <SectionLabel>Om Dental Clinic And Implant Centre</SectionLabel>
            <h1 className="text-[clamp(52px,6vw,96px)] leading-[1.08] font-display font-semibold text-charcoal mb-6">
              {reduced ? (
                "Your smile, designed with precision."
              ) : (
                headline.map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block mr-[0.3em]"
                  >
                    {word}
                  </motion.span>
                ))
              )}
            </h1>
            <motion.p
              className="font-body text-base lg:text-lg text-muted max-w-xl mb-8 leading-relaxed"
              initial={reduced ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Dr. Mohit Gupta combines modern clinical care with a calm,
              comfortable experience — built for patients who value both health
              and time.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={reduced ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <PearlButton to="/contact">Book an Appointment</PearlButton>
              <PearlButton to="/services" variant="ghost">
                Explore Our Services
              </PearlButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-10 lg:gap-14 mt-14 pt-8 border-t border-border"
              initial={reduced ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <StatCounter target={21} label="Years Experience" />
              <StatCounter target={4800} label="Happy Patients" />
              <StatCounter target={98} label="Satisfaction %" />
            </motion.div>
          </div>

          {/* Image — 40% */}
          <div className="lg:col-span-2">
            <motion.div
              variants={reduced ? undefined : imageVariants}
              initial="hidden"
              animate="visible"
              className="overflow-hidden rounded-lg aspect-[3/4]"
            >
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="Modern dental clinic interior with clean white surfaces and natural light"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Services Preview ─── */

const treatments = [
  { name: "General Dentistry", desc: "Comprehensive check-ups, cleanings, and preventive care for lasting oral health." },
  { name: "Cosmetic Dentistry", desc: "Whitening, veneers, and smile makeovers designed for natural-looking results." },
  { name: "Orthodontics", desc: "Braces and clear aligners tailored to your lifestyle and treatment goals." },
  { name: "Dental Implants", desc: "Permanent tooth replacement with titanium implants that look and feel natural." },
  { name: "Pediatric Care", desc: "Gentle, child-friendly dental care in a calm and reassuring environment." },
  { name: "Emergency Care", desc: "Same-day treatment for urgent dental issues — pain, fractures, and infections." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

function ServicesPreview() {
  return (
    <section className="py-24 lg:py-36">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-24">
        <FadeInWhenVisible>
          <SectionLabel>Treatments</SectionLabel>
          <h2 className="font-display text-[clamp(36px,4vw,64px)] text-charcoal mb-14">
            What we treat
          </h2>
        </FadeInWhenVisible>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {treatments.map((t) => (
            <motion.div key={t.name} variants={itemVariants}>
              <motion.div
                className="group cursor-pointer"
                whileHover={{ scale: 1.02, transition: { duration: 0.25, ease: "easeOut" } }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="font-display text-2xl text-charcoal mb-2">{t.name}</h3>
                <p className="font-body text-sm text-muted leading-relaxed mb-3">
                  {t.desc}
                </p>
                <Link
                  to="/services"
                  className="font-body text-sm text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                >
                  Learn more
                  <span className="text-lg">→</span>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── About Preview ─── */

function AboutPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="py-24 lg:py-36 bg-surface" ref={ref}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image with parallax */}
          <FadeInWhenVisible direction="left">
            <div className="overflow-hidden rounded-lg aspect-[4/5]">
              <motion.div style={reduced ? {} : { y }} className="w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80"
                  alt="Dr. Gaurav Bhalla consulting with a patient"
                  className="object-cover w-full h-full scale-110"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </FadeInWhenVisible>

          {/* Text */}
          <FadeInWhenVisible delay={0.15}>
            <SectionLabel>About Us</SectionLabel>
            <h2 className="font-display text-[clamp(36px,4vw,64px)] text-charcoal mb-6">
              Care built on trust, not just technique
            </h2>
            <p className="font-body text-base text-muted leading-relaxed mb-4">
              Dr. Mohit Gupta is a trusted name in dental care in Gurugram, known for
              his gentle approach, clear communication, and commitment to making every
              patient feel at ease. At OM Dental Clinic Implant Centre, we believe
              great dentistry starts with trust.
            </p>
            <p className="font-body text-base text-muted leading-relaxed mb-8">
              From routine checkups to complex implants and root canals, every procedure
              is carried out with precision, strict hygiene, and genuine care. Our
              patients leave not just treated, but confident. That is why we have earned
              over 118 five-star reviews from families across Sector 7 and beyond.
            </p>
            <PearlButton to="/about" variant="ghost">
              Our Story
            </PearlButton>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */

const testimonials = [
  {
    quote: "Amazing dentist with abundant knowledge and long experience. Highly recommend Dr. Mohit to everyone.",
    name: "Google Review",
    treatment: "General Dentistry",
    rating: 5,
  },
  {
    quote: "He insisted my tooth could be saved and started treatment. Over the course of 1.5 months, he worked tirelessly to preserve it.",
    name: "Ekant Kumar",
    treatment: "Tooth Restoration",
    rating: 5,
  },
  {
    quote: "He is a gem of a person. My friend was suffering from severe toothache at the airport — Dr. Mohit helped him out with a prescription, free of cost.",
    name: "Amy Plays Groove",
    treatment: "Emergency Care",
    rating: 5,
  },
  {
    quote: "Amazing Dr. Mohit with expertise in all tooth issues. Treated my wife well with the best support. Strongly recommended.",
    name: "Rohit Thakur",
    treatment: "General Dentistry",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="py-24 lg:py-36">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-24">
        <FadeInWhenVisible>
          <SectionLabel>Patient Stories</SectionLabel>
          <h2 className="font-display text-[clamp(36px,4vw,64px)] text-charcoal mb-14">
            What our patients say
          </h2>
        </FadeInWhenVisible>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={itemVariants} className={i === 3 ? "md:col-start-2 lg:col-start-auto" : ""}>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-primary text-sm">★</span>
                ))}
              </div>
              <blockquote className="font-body text-base text-charcoal leading-relaxed mb-5">
                "{t.quote}"
              </blockquote>
              <p className="font-body text-sm font-medium text-charcoal">{t.name}</p>
              <p className="font-body text-xs text-muted">{t.treatment}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─── */

function CTABanner() {
  return (
    <section className="py-24 lg:py-36 bg-surface">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-24 text-center">
        <FadeInWhenVisible>
          <h2 className="font-display text-[clamp(36px,4vw,64px)] text-charcoal mb-6">
            Ready for a healthier smile?
          </h2>
          <p className="font-body text-base text-muted mb-2 max-w-md mx-auto">
            Schedule your visit today and experience dental care the way it should be.
          </p>
          <p className="font-body text-sm text-muted mb-2">
            Shop No. 3, Opposite Huda Market, Sector 7 Extension, Gurugram, Haryana 122001
          </p>
          <p className="font-body text-sm text-muted mb-2">
            🕐 Mon–Sat: 10:00 AM – 2:00 PM &amp; 5:00 PM onwards
          </p>
          <p className="font-body text-sm text-muted mb-8">
            📞 +91 99110 98695
          </p>
          <PearlButton to="/contact">Book an Appointment</PearlButton>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

/* ─── Page ─── */

const Home = () => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
    exit={{ opacity: 0, y: -8, transition: { duration: 0.25, ease: "easeIn" } }}
  >
    <Hero />
    <ServicesPreview />
    <AboutPreview />
    <Testimonials />
    <CTABanner />
  </motion.div>
);

export default Home;