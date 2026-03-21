import { motion } from "framer-motion";
import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";
import SectionLabel from "@/components/ui/SectionLabel";
import PearlButton from "@/components/ui/PearlButton";

const doctors = [
  {
    name: "Dr. Priya Menon",
    role: "Orthodontist",
    experience: "14 years",
    quote: "A beautiful smile isn't just about straight teeth — it's about confidence that lasts a lifetime.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
  },
  {
    name: "Dr. Arjun Seth",
    role: "Implantologist",
    experience: "12 years",
    quote: "Every implant I place is a promise — a promise that you'll eat, laugh, and live without hesitation.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
  },
  {
    name: "Dr. Kavya Iyer",
    role: "Cosmetic Dentist",
    experience: "10 years",
    quote: "Cosmetic dentistry is as much about listening as it is about skill. I design smiles people recognise as their own.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964d31e?w=600&q=80",
  },
  {
    name: "Dr. Rahul Tomar",
    role: "Pediatric Specialist",
    experience: "9 years",
    quote: "If a child leaves my clinic smiling, I know I've done my job — not just as a dentist, but as a caregiver.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const Team = () => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
    exit={{ opacity: 0, y: -8, transition: { duration: 0.25, ease: "easeIn" } }}
  >
    <section className="pt-32 pb-24 lg:pt-44 lg:pb-36">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-24">
        <FadeInWhenVisible>
          <SectionLabel>Our Team</SectionLabel>
          <h1 className="font-display text-[clamp(42px,5vw,80px)] text-charcoal mb-4 max-w-3xl">
            The people behind your smile
          </h1>
          <p className="font-body text-base text-muted max-w-xl mb-16">
            Four specialists, one shared mission — to deliver dental care that's
            precise, personal, and genuinely kind.
          </p>
        </FadeInWhenVisible>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {doctors.map((d, i) => (
            <motion.div
              key={d.name}
              variants={itemVariants}
              className={i === 3 ? "md:col-start-1 lg:col-start-auto" : ""}
            >
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-5">
                <img
                  src={d.image}
                  alt={`Portrait of ${d.name}, ${d.role}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-2xl text-charcoal">{d.name}</h3>
              <p className="font-body text-sm text-secondary font-medium mb-1">{d.role}</p>
              <p className="font-body text-xs text-muted mb-3">{d.experience} of experience</p>
              <blockquote className="font-body text-sm text-muted italic leading-relaxed border-l-2 border-primary pl-4">
                "{d.quote}"
              </blockquote>
            </motion.div>
          ))}
        </motion.div>

        <FadeInWhenVisible className="mt-20 text-center">
          <PearlButton to="/contact">Book With Our Team</PearlButton>
        </FadeInWhenVisible>
      </div>
    </section>
  </motion.div>
);

export default Team;
