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
  { year: "2012", title: "Founded", desc: "Pearl Dental Studio opens its doors in Sector 14, Gurugram, with a vision to reimagine dental care." },
  { year: "2015", title: "Expanded Team", desc: "Grew to a team of four specialists covering orthodontics, implantology, cosmetic, and pediatric dentistry." },
  { year: "2018", title: "Digital Upgrade", desc: "Introduced CBCT scanning, digital impressions, and a fully paperless patient experience." },
  { year: "2021", title: "4,000+ Patients", desc: "Crossed the milestone of 4,000 patients treated with a 98% satisfaction rate." },
  { year: "2024", title: "Studio Redesign", desc: "Completed a full clinic renovation focused on patient comfort, natural light, and state-of-the-art operatories." },
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
            Dental care that respects your time, your comfort, and your trust
          </h1>
        </FadeInWhenVisible>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <FadeInWhenVisible delay={0.1}>
            <p className="font-body text-base text-muted leading-relaxed">
              Pearl Dental Studio was born from a simple observation: most dental
              clinics prioritize throughput over people. We set out to build
              something different — a space where patients aren't rushed, where
              treatment plans are discussed honestly, and where clinical
              excellence is a given, not a selling point.
            </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.2}>
            <p className="font-body text-base text-muted leading-relaxed">
              Our team of four specialists brings together decades of focused
              expertise. But beyond credentials, what unites us is a shared
              belief: that the best dentistry happens when patients feel heard,
              informed, and genuinely cared for. Every decision we make — from
              clinic design to treatment protocols — starts with this principle.
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

        {/* Image grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          <FadeInWhenVisible className="md:col-span-2 aspect-[16/10] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1629909615957-be38d6ed6e9a?w=900&q=80"
              alt="Dental operatory with modern equipment and overhead lighting"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </FadeInWhenVisible>
          <div className="flex flex-col gap-4">
            <FadeInWhenVisible delay={0.1} className="flex-1 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80"
                alt="Reception area with warm lighting and comfortable seating"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2} className="flex-1 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80"
                alt="Dentist reviewing digital X-ray with patient"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </FadeInWhenVisible>
          </div>
        </div>

        {/* Feature list */}
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
          {/* Vertical line */}
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
