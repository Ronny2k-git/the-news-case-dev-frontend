import { Link } from "react-router-dom";
import { headerIcons } from "../../consts/components";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        <div className="header__logo-dot" />
        the news
      </a>

      <div className="header__icons">
        {headerIcons.map((icon, i) => (
          <Link key={`${icon.path}_${i}`} to={icon.path!}>
            <img
              key={i}
              src={icon.imagePath}
              alt={icon.path}
              width={22}
              height={22}
            />
          </Link>
        ))}
      </div>
    </header>
  );
}
