import { motion } from "framer-motion";
import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";
import SectionLabel from "@/components/ui/SectionLabel";
import PearlButton from "@/components/ui/PearlButton";

const facilities = [
  "Digital X-ray Imaging",
  "Advanced Sterilization Protocol",
  "Private Consultation Rooms",
  "Intraoral Camera Technology",
  "CBCT Scanner",
  "Comfortable Waiting Lounge",
];

const milestones = [
  { year: "2010", title: "Qualified", desc: "Dr. Mohit Gupta completes his dental degree and begins his journey dedicated to providing compassionate, high-quality dental care." },
  { year: "2010", title: "Founded", desc: "OM Dental Clinic Implant Centre opens its doors in Sector 7 Extension, Gurugram, with a vision to make advanced dental care accessible and comfortable." },
  { year: "2015", title: "Growing Trust", desc: "Built a loyal patient base across Gurugram through honest, patient-first care and a strong word-of-mouth reputation." },
  { year: "2019", title: "Implant Specialisation", desc: "Expanded expertise in dental implants and complex restorative procedures, becoming a trusted name for implant care in Gurgaon." },
  { year: "2025", title: "118 Five-Star Reviews", desc: "A milestone built entirely on patient trust — over 118 five-star Google reviews from families across Sector 7 and Gurugram." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
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
            Dental care that respects your comfort, your time, and your trust
          </h1>
        </FadeInWhenVisible>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <FadeInWhenVisible delay={0.1}>
            <p className="font-body text-base text-muted leading-relaxed">
              OM Dental Clinic Implant Centre was founded on a simple belief: every
              patient deserves to feel heard, comfortable, and confident in their
              treatment. Dr. Mohit Gupta brings precision, patience, and genuine care
              to every procedure — from a routine cleaning to a full dental implant.
            </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.2}>
            <p className="font-body text-base text-muted leading-relaxed">
              Located in Sector 7 Extension, Gurugram, our clinic is designed to put
              patients at ease from the moment they walk in. We explain every procedure
              clearly, maintain the highest standards of hygiene and sterilization, and
              ensure that no patient ever leaves with unanswered questions.
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
            Built for precision and comfort
          </h2>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          <div className="md:col-span-2 aspect-[16/10] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=100"
              alt="Dental operatory with modern equipment and overhead lighting"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex-1 overflow-hidden rounded-lg" style={{ minHeight: "160px" }}>
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80"
                alt="Reception area with warm lighting and comfortable seating"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1 overflow-hidden rounded-lg" style={{ minHeight: "160px" }}>
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80"
                alt="Dr. Mohit Gupta reviewing digital X-ray with patient"
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
            <motion.div
              key={f}
              variants={itemVariants}
              className="flex items-center gap-3"
            >
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
            Milestones that shaped us
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
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex gap-8 lg:gap-12 relative"
            >
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
          <PearlButton to="/team" variant="ghost">
            Meet Our Team
          </PearlButton>
        </FadeInWhenVisible>
      </div>
    </section>
  </motion.div>
);

export default About;