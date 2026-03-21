import { motion } from "framer-motion";
import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";
import SectionLabel from "@/components/ui/SectionLabel";
import AppointmentForm from "@/components/sections/AppointmentForm";

const Contact = () => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
    exit={{ opacity: 0, y: -8, transition: { duration: 0.25, ease: "easeIn" } }}
  >
    <section className="pt-32 pb-24 lg:pt-44 lg:pb-36">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-24">
        <FadeInWhenVisible>
          <SectionLabel>Get in Touch</SectionLabel>
          <h1 className="font-display text-[clamp(42px,5vw,80px)] text-charcoal mb-16 max-w-3xl">
            We'd love to hear from you
          </h1>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info */}
          <FadeInWhenVisible delay={0.1}>
            <div className="space-y-8">
              <div>
                <h3 className="font-body text-xs font-medium uppercase tracking-[0.12em] text-muted mb-2">
                  Address
                </h3>
                <p className="font-body text-base text-charcoal">
                  Pearl Dental Studio<br />
                  Sector 14, Gurugram<br />
                  Haryana 122001
                </p>
              </div>
              <div>
                <h3 className="font-body text-xs font-medium uppercase tracking-[0.12em] text-muted mb-2">
                  Phone
                </h3>
                <a href="tel:+919876543210" className="font-body text-base text-charcoal hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div>
                <h3 className="font-body text-xs font-medium uppercase tracking-[0.12em] text-muted mb-2">
                  Email
                </h3>
                <a href="mailto:hello@pearldentalstudio.in" className="font-body text-base text-charcoal hover:text-primary transition-colors">
                  hello@pearldentalstudio.in
                </a>
              </div>
              <div>
                <h3 className="font-body text-xs font-medium uppercase tracking-[0.12em] text-muted mb-2">
                  Hours
                </h3>
                <p className="font-body text-base text-charcoal">
                  Mon – Sat: 9:00 AM – 7:00 PM<br />
                  Sunday: 10:00 AM – 2:00 PM
                </p>
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Form */}
          <FadeInWhenVisible delay={0.2}>
            <AppointmentForm />
          </FadeInWhenVisible>
        </div>
      </div>
    </section>

    {/* Map */}
    <section className="pb-0">
      <FadeInWhenVisible>
        <iframe
          title="Pearl Dental Studio Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0!2d77.02!3d28.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSector+14%2C+Gurugram!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </FadeInWhenVisible>
    </section>
  </motion.div>
);

export default Contact;
