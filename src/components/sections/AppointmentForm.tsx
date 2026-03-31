import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PearlButton from "@/components/ui/PearlButton";

const services = [
  "Teeth Whitening",
  "Braces & Aligners",
  "Dental Implants",
  "Root Canal Treatment",
  "Veneers",
  "Wisdom Tooth Extraction",
  "Pediatric Dentistry",
  "Emergency Care",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  service?: string;
}

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  date: "",
  service: "",
  message: "",
};

const AppointmentForm = () => {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const validate = useCallback(
    (field: keyof FormData, value: string): string | undefined => {
      switch (field) {
        case "name":
          return value.trim().length < 2 ? "Name must be at least 2 characters" : undefined;
        case "email":
          return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ? "Please enter a valid email"
            : undefined;
        case "phone":
          return !/^[6-9]\d{9}$/.test(value)
            ? "Enter a valid 10-digit Indian mobile number"
            : undefined;
        case "date":
          return !value ? "Please select a date" : undefined;
        case "service":
          return !value ? "Please select a service" : undefined;
        default:
          return undefined;
      }
    },
    []
  );

  const handleBlur = (field: keyof FormData) => {
    setTouched((p) => ({ ...p, [field]: true }));
    setErrors((p) => ({ ...p, [field]: validate(field, data[field]) }));
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setData((p) => ({ ...p, [field]: value }));
    if (touched[field]) {
      setErrors((p) => ({ ...p, [field]: validate(field, value) }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fields: (keyof FormData)[] = ["name", "email", "phone", "date", "service"];
    const newErrors: FormErrors = {};
    let hasError = false;
    fields.forEach((f) => {
      const err = validate(f, data[f]);
      if (err) { newErrors[f] = err; hasError = true; }
    });
    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true, date: true, service: true });
    if (!hasError) setSubmitted(true);
  };

  const fieldClass =
    "w-full bg-transparent border-b border-border py-2 font-body text-sm text-charcoal outline-none focus:border-primary transition-colors duration-200";

  const labelClass =
    "block font-body text-xs font-medium uppercase tracking-[0.12em] text-muted mb-1";

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-16"
        >
          <h3 className="font-display text-3xl text-charcoal mb-3">Thank you!</h3>
          <p className="font-body text-muted">
            We've received your appointment request. Dr. Bhalla's clinic will reach
            out within 24 hours to confirm your booking.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="space-y-8"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div>
              <label htmlFor="name" className={labelClass}>Full Name</label>
              <input
                id="name"
                type="text"
                value={data.name}
                onChange={(e) => handleChange("name", e.target.value)}
                onBlur={() => handleBlur("name")}
                className={fieldClass}
                placeholder="Raj Sharma"
              />
              {touched.name && errors.name && (
                <p className="mt-1 font-body text-xs text-muted border-l-2 border-primary pl-2">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelClass}>Email Address</label>
              <input
                id="email"
                type="email"
                value={data.email}
                onChange={(e) => handleChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                className={fieldClass}
                placeholder="raj@email.com"
              />
              {touched.email && errors.email && (
                <p className="mt-1 font-body text-xs text-muted border-l-2 border-primary pl-2">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className={labelClass}>Phone Number</label>
              <input
                id="phone"
                type="tel"
                value={data.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                onBlur={() => handleBlur("phone")}
                className={fieldClass}
                placeholder="98XXXXXXXX"
              />
              {touched.phone && errors.phone && (
                <p className="mt-1 font-body text-xs text-muted border-l-2 border-primary pl-2">{errors.phone}</p>
              )}
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className={labelClass}>Preferred Date</label>
              <input
                id="date"
                type="date"
                min={today}
                value={data.date}
                onChange={(e) => handleChange("date", e.target.value)}
                onBlur={() => handleBlur("date")}
                className={fieldClass}
              />
              {touched.date && errors.date && (
                <p className="mt-1 font-body text-xs text-muted border-l-2 border-primary pl-2">{errors.date}</p>
              )}
            </div>
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className={labelClass}>Service</label>
            <select
              id="service"
              value={data.service}
              onChange={(e) => handleChange("service", e.target.value)}
              onBlur={() => handleBlur("service")}
              className={fieldClass + " cursor-pointer"}
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {touched.service && errors.service && (
              <p className="mt-1 font-body text-xs text-muted border-l-2 border-primary pl-2">{errors.service}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className={labelClass}>Message (optional)</label>
            <textarea
              id="message"
              value={data.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={3}
              className={fieldClass + " resize-none"}
              placeholder="Any additional details or concerns..."
            />
          </div>

          <PearlButton type="submit" variant="primary">
            Request Appointment
          </PearlButton>
        </motion.form>
      )}
    </AnimatePresence>
  );
};

export default AppointmentForm;