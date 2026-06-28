import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/BottomNav/BottomNav";
import { MenuItem } from "../../components/Card/Card";
import { sections } from "../../consts";
import "./Mais.css";

export default function Mais() {
  const navigate = useNavigate();

  function handleItemClick(path: string) {
    if (path !== "#") navigate(path);
  }

  return (
    <div className="screen">
      {/* Page header */}
      <div className="page-header">
        <div>
          <div className="page-header__title">Mais</div>
          <div className="page-header__subtitle">Todas as funcionalidades</div>
        </div>
        <div className="page-header__avatar">R</div>
      </div>

      <div className="mais-header-line" />

      {sections.map((section) => (
        <div key={section.title} className="section-group">
          <div className="section-group__title">{section.title}</div>
          <div className="section-group__list">
            {section.items.map((item) => (
              <MenuItem
                key={item.title}
                icon={
                  <div
                    className="menu-item__icon"
                    style={{ background: item.bg }}
                  >
                    {item.icon}
                  </div>
                }
                title={item.title}
                subtitle={item.subtitle}
                badge={item.badge}
                onClick={() => handleItemClick(item.path)}
              />
            ))}
          </div>
          <div className="mais-section-gap" />
        </div>
      ))}

      <BottomNav />
    </div>
  );
}
