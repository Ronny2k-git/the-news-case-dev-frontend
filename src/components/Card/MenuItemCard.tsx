import type { ReactNode } from "react";
import "./Card.css";

interface MenuItemProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  badge?: string;
  onClick?: () => void;
}

export function MenuItem({
  icon,
  title,
  subtitle,
  badge,
  onClick,
}: MenuItemProps) {
  return (
    <div className="menu-item" onClick={onClick}>
      <div className="menu-item__icon">{icon}</div>

      <div className="menu-item__body">
        <p className="menu-item__title">{title}</p>
        <p className="menu-item__subtitle">{subtitle}</p>
      </div>

      {badge && <span className="menu-item__badge">{badge}</span>}

      <span className="menu-item__chevron">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </span>
    </div>
  );
}
