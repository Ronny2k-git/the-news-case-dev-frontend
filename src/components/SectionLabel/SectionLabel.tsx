import "./SectionLabel.css";

interface SectionLabelProps {
  title: string;
  count?: string;
  variant?: "default" | "yellow";
}

export default function SectionLabel({
  title,
  count,
  variant = "default",
}: SectionLabelProps) {
  return (
    <div
      className={`section-label ${variant === "yellow" ? "section-label--yellow" : ""}`}
    >
      <h2 className="section-label__title">{title}</h2>
      {count && <span className="section-label__count">{count}</span>}
    </div>
  );
}
