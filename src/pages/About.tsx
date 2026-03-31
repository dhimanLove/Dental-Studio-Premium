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
  { year: "2004", title: "Qualified", desc: "Dr. Gaurav Bhalla completes BDS from Dr. B.R. Ambedkar Institute of Dental Sciences & Hospital, Patna." },
  { year: "2004", title: "Founded", desc: "Dr. Gaurav Bhalla's Dental Clinic & Smile Design Centre opens its doors in Sector 40D, Chandigarh, with a vision to reimagine dental care." },
  { year: "2010", title: "Growing Trust", desc: "Built a loyal patient base across Chandigarh through honest, patient-first dental care and word-of-mouth reputation." },
  { year: "2018", title: "Digital Upgrade", desc: "Introduced advanced imaging and digital diagnostics to deliver more precise and comfortable treatment." },
  { year: "2025", title: "21 Years & Counting", desc: "Over two decades of dedicated dental care, with thousands of happy patients and a 4.2★ Google rating." },
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
              Dr. Gaurav Bhalla's Dental Clinic & Smile Design Centre was built on a
              simple belief: every patient deserves unhurried attention, honest
              guidance, and treatment that truly fits their life. With over 21 years
              of experience, Dr. Bhalla has built a practice where clinical excellence
              is a given — not a selling point.
            </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.2}>
            <p className="font-body text-base text-muted leading-relaxed">
              Located in the heart of Sector 40D, Chandigarh, our clinic is designed
              to make every visit calm and comfortable. We will always attempt to
              answer your questions thoroughly so that you never have to worry
              needlessly — and we explain complicated things clearly and simply.
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

        {/* Image grid — plain divs, no FadeInWhenVisible wrapper interfering with height */}
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
                alt="Dr. Gaurav Bhalla reviewing digital X-ray with patient"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
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