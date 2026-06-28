import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/BottomNav/BottomNav";
import { MenuItem } from "../../components/Card/Card";
import "./Mais.css";

// Ícones inline pra manter fidelidade visual ao HTML original
const IconStreak = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#ff4d3d">
    <path d="M12 23c-4.97 0-9-3.5-9-8.2 0-3.3 1.8-5.7 3.2-7.6.4-.5 1.1-.4 1.4.2.3.7.5 1.5.6 2.1.9-2.1 1.2-4.6.8-6.8-.1-.6.5-1 1-.7C13.5 4 16 7.6 16 11.5c.7-.6 1.2-1.4 1.5-2.3.2-.5.8-.6 1.1-.1.9 1.4 1.4 3.1 1.4 4.9 0 4.7-3.5 9-8 9z" />
  </svg>
);
const IconPodcasts = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#a78bfa"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M3 18v-6a9 9 0 0118 0v6" />
    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
  </svg>
);
const IconDiscussoes = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
    <path d="M4 4h16a1 1 0 011 1v11a1 1 0 01-1 1H9l-4 4v-4H4a1 1 0 01-1-1V5a1 1 0 011-1z" />
  </svg>
);
const IconJogos = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#c084fc"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <rect x="2" y="6" width="20" height="12" rx="4" />
    <path d="M6 12h4M8 10v4" />
    <circle cx="15" cy="11" r="1" fill="#c084fc" />
    <circle cx="18" cy="13" r="1" fill="#c084fc" />
  </svg>
);
const IconNoticias = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fb923c"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a4 4 0 01-4-4V6" />
    <line x1="9" y1="7" x2="15" y2="7" />
    <line x1="9" y1="11" x2="15" y2="11" />
    <line x1="9" y1="15" x2="13" y2="15" />
  </svg>
);
const IconEdicoes = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#94a3b8"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M19 3H5a2 2 0 00-2 2v14l4-4h12a2 2 0 002-2V5a2 2 0 00-2-2z" />
  </svg>
);
const IconAgenda = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f87171"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconComunidade = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#60a5fa"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);
const IconCopitas = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#4ade80"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    <line x1="2" y1="12" x2="22" y2="12" />
  </svg>
);
const IconBuscar = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#22d3ee"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconEvento = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fb7185"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
  </svg>
);
const IconPerfil = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#818cf8"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const IconNotif = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#fbbf24">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
  </svg>
);
const IconCupons = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#34d399"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);
const IconPresente = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f472b6"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <polyline points="20 12 20 22 4 22 4 12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
  </svg>
);
const IconBloqueados = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f87171"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
  </svg>
);
const IconOnboarding = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#a3e635"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);
const IconAjuda = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fbbf24"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const IconEmail = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#60a5fa"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconSite = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#818cf8"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);
const IconInstagram = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f472b6"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1" fill="#f472b6" />
  </svg>
);

const sections = [
  {
    title: "Para você",
    items: [
      {
        icon: <IconStreak />,
        bg: "#3a1518",
        title: "Meu Streak",
        subtitle: "leitura da edição",
        path: "/habitos",
      },
      {
        icon: <IconPodcasts />,
        bg: "#241b33",
        title: "Podcasts",
        subtitle: "biblioteca de episódios",
        badge: "NOVO",
        path: "/podcasts",
      },
      {
        icon: <IconDiscussoes />,
        bg: "#211d14",
        title: "Discussões",
        subtitle: "fórum e debates do dia",
        path: "#",
      },
      {
        icon: <IconJogos />,
        bg: "#221c33",
        title: "Jogos",
        subtitle: "Palavritas, Teia e mais",
        badge: "NOVO",
        path: "#",
      },
    ],
  },
  {
    title: "Conteúdo",
    items: [
      {
        icon: <IconNoticias />,
        bg: "#16242b",
        title: "Notícias",
        subtitle: "feed personalizado de notícias",
        path: "#",
      },
      {
        icon: <IconEdicoes />,
        bg: "#15211c",
        title: "Edições Anteriores",
        subtitle: "histórico de newsletters",
        path: "#",
      },
      {
        icon: <IconAgenda />,
        bg: "#2e1410",
        title: "Agenda",
        subtitle: "calendário de newsletters",
        badge: "NOVO",
        path: "#",
      },
    ],
  },
  {
    title: "Social & Diversão",
    items: [
      {
        icon: <IconComunidade />,
        bg: "#2c1a26",
        title: "Comunidade",
        subtitle: "feed social de livros",
        path: "#",
      },
      {
        icon: <IconCopitas />,
        bg: "#142219",
        title: "Copitas",
        subtitle: "palpita classificados e vencedores",
        path: "#",
      },
      {
        icon: <IconBuscar />,
        bg: "#1c2436",
        title: "Buscar pessoas",
        subtitle: "encontre leitores por nome ou @",
        path: "#",
      },
      {
        icon: <IconEvento />,
        bg: "#341621",
        title: "Evento seis&seis",
        subtitle: "saiba mais sobre o evento",
        path: "#",
      },
    ],
  },
  {
    title: "Conta",
    items: [
      {
        icon: <IconPerfil />,
        bg: "#16213a",
        title: "Meu Perfil",
        subtitle: "configurações da conta",
        path: "#",
      },
      {
        icon: <IconNotif />,
        bg: "#2e2410",
        title: "Notificações",
        subtitle: "central de notificações",
        path: "#",
      },
      {
        icon: <IconCupons />,
        bg: "#142420",
        title: "Cupons",
        subtitle: "descontos exclusivos para você",
        path: "#",
      },
      {
        icon: <IconPresente />,
        bg: "#241c33",
        title: "Presente",
        subtitle: "ganhe recompensas indicando amigos",
        badge: "GANHE PRÊMIOS",
        path: "#",
      },
      {
        icon: <IconBloqueados />,
        bg: "#341417",
        title: "Usuários bloqueados",
        subtitle: "gerenciar quem você bloqueou",
        path: "#",
      },
      {
        icon: <IconOnboarding />,
        bg: "#142420",
        title: "Rever Onboarding",
        subtitle: "replay do onboarding interativo",
        path: "#",
      },
    ],
  },
  {
    title: "Entre em Contato",
    items: [
      {
        icon: <IconAjuda />,
        bg: "#332410",
        title: "Ajuda",
        subtitle: "central de suporte",
        path: "#",
      },
      {
        icon: <IconEmail />,
        bg: "#16213a",
        title: "E-mail",
        subtitle: "app@thenews.com.br",
        path: "#",
      },
      {
        icon: <IconSite />,
        bg: "#191c3a",
        title: "Site The News",
        subtitle: "thenews.com.br",
        path: "#",
      },
      {
        icon: <IconInstagram />,
        bg: "#2c1a26",
        title: "Instagram",
        subtitle: "@thenewscc",
        path: "#",
      },
    ],
  },
];

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
