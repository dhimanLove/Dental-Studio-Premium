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
                  OM DENTAL CLINIC AND IMPLANT CENTRE<br />
                  Shop No. 3, Opposite Huda Market, Sector 7 Extension,<br />
                  Gurugram, Haryana 122001
                </p>
              </div>
              <div>
                <h3 className="font-body text-xs font-medium uppercase tracking-[0.12em] text-muted mb-2">
                  Phone
                </h3>
                <a href="tel:+919911098695" className="font-body text-base text-charcoal hover:text-primary transition-colors">
                  +91 99110 98695
                </a>
              </div>
              <div>
                <h3 className="font-body text-xs font-medium uppercase tracking-[0.12em] text-muted mb-2">
                  Hours
                </h3>
                <p className="font-body text-base text-charcoal">
                  Mon – Sat: 10:00 AM – 2:00 PM<br />
                  Mon – Sat: 5:00 PM onwards<br />
                  Sunday: Closed
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
          title="Dr. Gaurav Bhalla's Dental Clinic Location"
           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d379297.3374289952!2d76.51244647449374!3d28.4792732490939!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17acd4eea2bd%3A0x6e26483b601460e5!2sOM%20Dental%20Clinic%20Implant%20Centre%20Dr.%20Mohit%20Gupta!5e0!3m2!1sen!2sin!4v1775109347295!5m2!1sen!2sin"
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