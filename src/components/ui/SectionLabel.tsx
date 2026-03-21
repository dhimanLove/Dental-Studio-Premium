interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

const SectionLabel = ({ children, className = "" }: SectionLabelProps) => (
  <span
    className={`inline-block font-body text-xs font-medium uppercase tracking-[0.12em] text-muted mb-4 ${className}`}
  >
    {children}
  </span>
);

export default SectionLabel;
