import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground py-16 lg:py-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-4">
              Pearl Dental Studio
            </h3>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
              Modern clinical care with a calm, comfortable experience — built
              for patients who value both health and time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs font-medium uppercase tracking-[0.12em] text-primary-foreground/40 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Our Team", path: "/team" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-xs font-medium uppercase tracking-[0.12em] text-primary-foreground/40 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "General Dentistry",
                "Cosmetic Dentistry",
                "Orthodontics",
                "Dental Implants",
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs font-medium uppercase tracking-[0.12em] text-primary-foreground/40 mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-3 font-body text-sm text-primary-foreground/60">
              <li>Sector 14, Gurugram, Haryana 122001</li>
              <li>
                <a href="tel:+919876543210" className="hover:text-primary-foreground transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:hello@pearldentalstudio.in" className="hover:text-primary-foreground transition-colors">
                  hello@pearldentalstudio.in
                </a>
              </li>
              <li>Mon–Sat: 9am–7pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Pearl Dental Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
