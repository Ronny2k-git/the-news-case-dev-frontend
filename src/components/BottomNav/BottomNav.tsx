import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../consts/components/bottomNav";
import Icon, { type IconName } from "../Icon";
import "./BottomNav.css";

export default function BottomNav() {
  const { pathname } = useLocation();

  return (
    <nav className="bottom-nav">
      {navItems.map(({ path, label, icon }) => {
        const isActive = pathname === path;

        return (
          <Link
            key={path}
            to={path}
            className={`bottom-nav__item ${isActive ? "bottom-nav__item--active" : ""}`}
          >
            <Icon name={icon as IconName} size={24} />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
