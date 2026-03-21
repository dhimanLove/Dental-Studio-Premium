import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PearlButton from "@/components/ui/PearlButton";
import { useReducedMotion } from "@/hooks/useReducedMotion";

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
  const reduced = useReducedMotion();

  const today = new Date().toISOString().split("T")[0];

  const validate = useCallback(
    (field: keyof FormData, value: string): string | undefined => {
      switch (field) {
        case "name":
          return value.trim().length < 2 ? "Name must be at least 2 characters" : undefined;
        case "email":
          return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid email" : undefined;
        case "phone":
          return !/^[6-9]\d{9}$/.test(value) ? "Enter a valid 10-digit Indian mobile number" : undefined;
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
    const err = validate(field, data[field]);
    setErrors((p) => ({ ...p, [field]: err }));
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setData((p) => ({ ...p, [field]: value }));
    if (touched[field]) {
      const err = validate(field, value);
      setErrors((p) => ({ ...p, [field]: err }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fields: (keyof FormData)[] = ["name", "email", "phone", "date", "service"];
    const newErrors: FormErrors = {};
    let hasError = false;
    fields.forEach((f) => {
      const err = validate(f, data[f]);
      if (err) {
        newErrors[f] = err;
        hasError = true;
      }
    });
    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true, date: true, service: true });
    if (!hasError) {
      setSubmitted(true);
    }
  };

  const labelVariants = {
    resting: { y: 14, scale: 1, color: "hsl(20 4% 46%)" },
    floating: { y: -6, scale: 0.82, color: "hsl(28 24% 34%)" },
  };

  const FloatingField = ({
    field,
    label,
    type = "text",
  }: {
    field: keyof FormData;
    label: string;
    type?: string;
  }) => {
    const [focused, setFocused] = useState(false);
    const isActive = focused || data[field].length > 0;

    return (
      <div className="relative">
        <motion.label
          className="absolute left-0 origin-top-left pointer-events-none font-body text-sm"
          variants={reduced ? undefined : labelVariants}
          animate={isActive ? "floating" : "resting"}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.label>
        <input
          type={type}
          min={type === "date" ? today : undefined}
          value={data[field]}
          onChange={(e) => handleChange(field, e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
            handleBlur(field);
          }}
          className="w-full bg-transparent border-b border-border pb-2 pt-4 font-body text-sm text-charcoal outline-none focus:border-primary transition-colors duration-200"
        />
        {touched[field] && errors[field] && (
          <p className="mt-1 font-body text-xs text-muted border-l-2 border-primary pl-2">
            {errors[field]}
          </p>
        )}
      </div>
    );
  };

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
            We've received your appointment request. Our team will reach out within 24 hours to
            confirm your booking.
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
            <FloatingField field="name" label="Full Name" />
            <FloatingField field="email" label="Email Address" type="email" />
            <FloatingField field="phone" label="Phone Number" type="tel" />
            <FloatingField field="date" label="Preferred Date" type="date" />
          </div>

          {/* Service select */}
          <div className="relative">
            <label className="block font-body text-xs text-muted mb-2 uppercase tracking-[0.12em]">
              Service
            </label>
            <select
              value={data.service}
              onChange={(e) => handleChange("service", e.target.value)}
              onBlur={() => handleBlur("service")}
              className="w-full bg-transparent border-b border-border pb-2 font-body text-sm text-charcoal outline-none focus:border-primary transition-colors duration-200 appearance-none cursor-pointer"
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {touched.service && errors.service && (
              <p className="mt-1 font-body text-xs text-muted border-l-2 border-primary pl-2">
                {errors.service}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="relative">
            <label className="block font-body text-xs text-muted mb-2 uppercase tracking-[0.12em]">
              Message (optional)
            </label>
            <textarea
              value={data.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={3}
              className="w-full bg-transparent border-b border-border pb-2 font-body text-sm text-charcoal outline-none focus:border-primary transition-colors duration-200 resize-none"
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
