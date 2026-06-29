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
        {headerIcons.map((icon) => (
          <img src={icon.path} alt={icon.path} width={22} height={22} />
        ))}
      </div>
    </header>
  );
}
