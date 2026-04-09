import { motion } from "framer-motion";
import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";
import SectionLabel from "@/components/ui/SectionLabel";
import PearlButton from "@/components/ui/PearlButton";

const facilities = [
  "Laser Dentistry",
  "Wheelchair Accessible Entrance & Exit",
  "Advanced Sterilization Protocol",
  "Private Consultation Rooms",
  "Comfortable Waiting Lounge",
  "Digital Dental Care",
];

const milestones = [
  {
    year: "Founded",
    title: "Hope Dental Hospital Established",
    desc: "Hope Dental Hospital & Wellness Centre was founded with a mission to deliver compassionate, modern, and affordable dental care to every patient.",
  },
  {
    year: "Patient First",
    title: "Building Trust",
    desc: "Known for its caring approach, the clinic quickly earned the trust of patients across Lucknow through honest advice and quality treatments.",
  },
  {
    year: "Excellence",
    title: "5-Star Rated Care",
    desc: "Achieved a 5.0/5 rating with 120+ satisfied patients, reflecting exceptional service, cleanliness, and patient satisfaction.",
  },
  {
    year: "Today",
    title: "Modern Dental Experience",
    desc: "Continuing to provide advanced dental treatments with a focus on comfort, transparency, and patient education.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const About = () => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
    exit={{ opacity: 0, y: -8, transition: { duration: 0.25, ease: "easeIn" } }}
  >
    {/* Philosophy */}
    <section className="pt-32 pb-24 lg:pt-44 lg:pb-36">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-24">
        <FadeInWhenVisible>
          <SectionLabel>Our Philosophy</SectionLabel>
          <h1 className="font-display text-[clamp(42px,5vw,80px)] text-charcoal mb-12 max-w-4xl">
            Compassionate dental care focused on your comfort, trust, and confidence
          </h1>
        </FadeInWhenVisible>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <FadeInWhenVisible delay={0.1}>
            <p className="font-body text-base text-muted leading-relaxed">
              Hope Dental Hospital & Wellness Centre is built on a patient-first approach. Under the care of Dr. Himangi Dubey, every treatment is delivered with precision, empathy, and clarity — ensuring patients feel comfortable and confident at every step.
            </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.2}>
            <p className="font-body text-base text-muted leading-relaxed">
              Located in Lucknow, our clinic offers a clean, modern, and welcoming environment. We are proud to be a women-owned and LGBTQ+ friendly space where every patient is respected and cared for with the highest standards of hygiene and professionalism.
            </p>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>

    {/* Facilities */}
    <section className="py-24 lg:py-36 bg-surface">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-24">
        <FadeInWhenVisible>
          <SectionLabel>Our Facilities</SectionLabel>
          <h2 className="font-display text-[clamp(36px,4vw,64px)] text-charcoal mb-14">
            Advanced care in a comfortable environment
          </h2>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          <div className="md:col-span-2 aspect-[16/10] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=100"
              alt="Modern dental clinic"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex-1 overflow-hidden rounded-lg" style={{ minHeight: "160px" }}>
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80"
                alt="Reception area"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1 overflow-hidden rounded-lg" style={{ minHeight: "160px" }}>
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80"
                alt="Dental consultation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {facilities.map((f) => (
            <motion.div key={f} variants={itemVariants} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
              <span className="font-body text-sm text-charcoal">{f}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-24 lg:py-36">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-24">
        <FadeInWhenVisible>
          <SectionLabel>Our Journey</SectionLabel>
          <h2 className="font-display text-[clamp(36px,4vw,64px)] text-charcoal mb-14">
            Built on trust and patient satisfaction
          </h2>
        </FadeInWhenVisible>

        <motion.div
          className="space-y-12 lg:space-y-16 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="absolute left-[22px] lg:left-[28px] top-2 bottom-2 w-[1px] bg-border" />

          {milestones.map((m, i) => (
            <motion.div key={i} variants={itemVariants} className="flex gap-8 lg:gap-12 relative">
              <div className="flex flex-col items-center flex-shrink-0">
                <span className="w-[10px] h-[10px] rounded-full bg-primary relative z-10" />
              </div>
              <div>
                <span className="font-body text-xs text-muted uppercase tracking-[0.12em]">
                  {m.year}
                </span>
                <h3 className="font-display text-2xl text-charcoal mt-1 mb-2">
                  {m.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed max-w-lg">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <FadeInWhenVisible className="mt-16">
          <PearlButton to="/contact" variant="ghost">
            Contact Us
          </PearlButton>
        </FadeInWhenVisible>
      </div>
    </section>
  </motion.div>
);

export default About;
