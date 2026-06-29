import { useState } from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
import { EpisodeCard } from "../../components/Card/EpisodeCard";
import SectionLabel from "../../components/SectionLabel/SectionLabel";
import "./Podcasts.css";

const tabs = [
  { label: "the news", color: "#ffc832", active: true },
  { label: "Tá Podendo Falar? ☎️", color: "#8a8aa8", active: false },
  { label: "SLOGAN", color: "#e0483e", active: false },
];

const weekEpisodes = [
  {
    id: "2",
    title: "Pressão contra bets na Copa, quem ganha com isso",
    date: "25 jun",
    duration: "16 min",
    progress: 100,
    done: true,
  },
  {
    id: "3",
    title: "PF mira banco de Edir Macedo, Elon Musk e o futuro do X no Brasil",
    date: "24 jun",
    duration: "22 min",
    progress: 60,
    done: false,
  },
  {
    id: "4",
    title: "Calote de R$ 100 mi nas bets, China e as tarifas de Trump",
    date: "23 jun",
    duration: "19 min",
    progress: 0,
    done: false,
  },
];

const episodesSemanaPassada = [
  {
    id: "5",
    title: "Hacker invade sistema da Defesa e vaza documentos",
    date: "22 jun",
    duration: "19 min",
    progress: 0,
    done: false,
  },
  {
    id: "6",
    title: "A taxa de analfabetismo em mínima histórica no Brasil",
    date: "20 jun",
    duration: "17 min",
    progress: 0,
    done: false,
  },
];

export default function Podcasts() {
  const [semanaOpen, setSemanaOpen] = useState(true);
  const [semanaPassadaOpen, setSemanaPassadaOpen] = useState(false);
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set(["hero"]));

  function toggleSave(id: string) {
    setSavedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function focusSearch() {
    document
      .getElementById("search-bar")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="screen">
      {/* Page header */}
      <div className="page-header">
        <div>
          <div className="page-header__title">Podcasts</div>
          <div className="page-header__subtitle">
            o resumo do dia, na sua voz favorita
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="episode-tabs">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`episode-tab ${tab.active ? "episode-tab--active" : ""}`}
          >
            <span
              className="episode-tab__dot"
              style={{ background: tab.color }}
            />
            {tab.label}
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="search-wrap">
        <div className="search-bar" id="search-bar">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span>Buscar episódio...</span>
        </div>
      </div>

      {/* Hero — episódio de hoje */}
      <SectionLabel title="Episódio de hoje" />
      <div className="hero-wrap">
        <div className="hero-card">
          <span className="hero-card__badge">★ episódio de hoje</span>
          <div className="hero-card__top">
            <div className="hero-card__cover">
              the
              <br />
              news
            </div>
            <div className="hero-card__info">
              <div className="hero-card__title">
                Crise na família Bolsonaro, terremotos na Venezuela e bônus de
                CEOs
              </div>
              <div className="hero-card__meta">26 de jun · 17:50 · 14 min</div>
            </div>
            <button className="btn--play-small" aria-label="Reproduzir">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </button>
          </div>

          {/* Hero actions */}
          <div className="ep-item__actions" style={{ marginTop: 12 }}>
            <button className="ep-item__action-btn" aria-label="Baixar">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>
            <button
              className={`ep-item__action-btn ${savedIds.has("hero") ? "ep-item__action-btn--saved" : ""}`}
              onClick={() => toggleSave("hero")}
              aria-label="Salvar"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={savedIds.has("hero") ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
              </svg>
            </button>
            <button className="ep-item__action-btn" aria-label="Compartilhar">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Esta semana */}
      <div className="episode-group">
        <div
          className="episode-group__header"
          onClick={() => setSemanaOpen((o) => !o)}
        >
          <div className="episode-group__header-left">
            <span className="episode-group__title">Esta semana</span>
            <span className="episode-group__badge">{weekEpisodes.length}</span>
          </div>
          <span
            className={`episode-group__chevron ${semanaOpen ? "episode-group__chevron--open" : ""}`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </div>
        <div
          className={`episode-group__items ${semanaOpen ? "" : "episode-group__items--collapsed"}`}
        >
          {weekEpisodes.map((ep) => (
            <EpisodeCard
              key={ep.id}
              title={ep.title}
              date={ep.date}
              duration={ep.duration}
              progress={ep.progress}
              done={ep.done}
              saved={savedIds.has(ep.id)}
              onSave={() => toggleSave(ep.id)}
            />
          ))}
        </div>
      </div>

      {/* Semana passada */}
      <div className="episode-group">
        <div
          className="episode-group__header"
          onClick={() => setSemanaPassadaOpen((o) => !o)}
        >
          <div className="episode-group__header-left">
            <span className="episode-group__title">Semana passada</span>
            <span className="episode-group__badge">
              {episodesSemanaPassada.length}
            </span>
          </div>
          <span
            className={`episode-group__chevron ${semanaPassadaOpen ? "episode-group__chevron--open" : ""}`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </div>
        <div
          className={`episode-group__items ${semanaPassadaOpen ? "" : "episode-group__items--collapsed"}`}
        >
          {episodesSemanaPassada.map((ep) => (
            <EpisodeCard
              key={ep.id}
              title={ep.title}
              date={ep.date}
              duration={ep.duration}
              progress={ep.progress}
              done={ep.done}
              saved={savedIds.has(ep.id)}
              onSave={() => toggleSave(ep.id)}
            />
          ))}
        </div>
      </div>

      {/* Mais antigos */}
      <div className="episode-group">
        <div className="episode-group__header" onClick={focusSearch}>
          <div className="episode-group__header-left">
            <span className="episode-group__title">Mais antigos</span>
            <span className="episode-group__badge">142 episódios</span>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <p className="archive-note">
          Use a busca acima para encontrar episódios antigos
        </p>
      </div>

      {/* Mini player */}
      <div className="mini-player">
        <div className="mini-player__cover" />
        <div className="mini-player__info">
          <div className="mini-player__title">
            Crise na família Bolsonaro, terremotos na Venezuela...
          </div>
          <div className="mini-player__progress">
            <div
              className="mini-player__progress-fill"
              style={{ width: "38%" }}
            />
          </div>
        </div>
        <div className="mini-player__controls">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
