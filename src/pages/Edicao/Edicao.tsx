import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/BottomNav/BottomNav";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import "./Edicao.css";

const tabs = [
  { label: "the news", color: "#ffc832" },
  { label: "night", color: "#555" },
  { label: "tempo de copa", color: "#4caf50" },
  { label: "money", color: "#2196f3" },
  { label: "health", color: "#e91e63" },
];

const indexItems = [
  {
    id: "story-1",
    emoji: "🌎",
    headline: "Um tour pelas principais manchetes do Brasil e do Mundo",
  },
  {
    id: "story-2",
    emoji: "💻",
    headline:
      "A disputa entre os fundadores de um dos maiores grupos de mídia do país",
  },
  {
    id: "story-3",
    emoji: "🚚",
    headline: "A nova guerra dos e-commerces para conquistarem mais galpões",
  },
  {
    id: "story-4",
    emoji: "👴",
    headline:
      "Os idosos não estão mais ficando em casamentos vazios e divórcio vira tendência",
  },
  {
    id: "story-5",
    emoji: "🍔",
    headline:
      "Como um grupo do Reddit está salvando uma hamburgueria da falência",
  },
];

const articles = [
  {
    id: "story-1",
    tag: "🌎 manchetes",
    heading: "Um tour pelas principais manchetes do Brasil e do Mundo",
    body: "Confira as histórias mais importantes que estão movendo o noticiário nacional e internacional hoje. Da política à economia, passando por ciência e cultura — tudo o que você precisa saber em poucos minutos.",
  },
  {
    id: "story-2",
    tag: "💻 mídia",
    heading:
      "A disputa entre os fundadores de um dos maiores grupos de mídia do país",
    body: "Uma briga silenciosa que começou nos bastidores chegou aos tribunais. Os dois sócios que construíram juntos um dos grupos de comunicação mais relevantes do Brasil agora disputam o controle acionário da empresa em meio a acusações e contracontações.",
  },
  {
    id: "story-3",
    tag: "🚚 e-commerce",
    heading: "A nova guerra dos e-commerces para conquistarem mais galpões",
    body: "Mercado Livre, Amazon e Shopee travam uma corrida silenciosa por metros quadrados de armazém no Brasil. Entregar em horas — não em dias — se tornou o novo campo de batalha do varejo digital, e quem controla a logística controla o futuro.",
  },
  {
    id: "story-4",
    tag: "👴 comportamento",
    heading:
      "Os idosos não estão mais ficando em casamentos vazios e divórcio vira tendência",
    body: "O número de separações entre pessoas acima dos 60 anos cresceu significativamente na última década. Longevidade maior, independência financeira e mudança de mentalidade estão transformando o que significa envelhecer junto — ou separado.",
  },
  {
    id: "story-5",
    tag: "🍔 negócios",
    heading:
      "Como um grupo do Reddit está salvando uma hamburgueria da falência",
    body: "Um post pedindo ajuda a uma hamburgueria familiar em dificuldades viralizou no Reddit brasileiro e se transformou numa corrente de solidariedade improvável. Em menos de 72 horas, a fila na porta chegou à esquina — e o estoque acabou três vezes.",
  },
];

export default function Edicao() {
  const [activeTab, setActiveTab] = useState(0);
  const [progressVisible, setProgressVisible] = useState(true);
  const navigate = useNavigate();
  const articleRefs = useRef<Record<string, HTMLDivElement | null>>({});

  function scrollToStory(id: string) {
    articleRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function shareStory(heading: string) {
    const text = encodeURIComponent(
      `Leia no the news: "${heading}" — ${window.location.href}`,
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  }

  return (
    <div className="screen">
      <Header />

      {/* Edition tabs */}
      <div className="edition-tabs">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            className={`tab-pill ${i === activeTab ? "tab-pill--active" : "tab-pill--inactive"}`}
            onClick={() => setActiveTab(i)}
          >
            <div className="tab-pill__dot" style={{ background: tab.color }} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      {progressVisible && (
        <div className="progress-bar">
          <div className="progress-bar__stat">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
            Leitura <strong>100%</strong>
          </div>
          <div className="progress-bar__stat">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Tempo <strong>2m 42s</strong>
          </div>
          <div className="progress-bar__track">
            <div className="progress-bar__fill" style={{ width: "100%" }} />
          </div>
          <button
            className="progress-bar__toggle"
            onClick={() => setProgressVisible(false)}
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
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
      )}

      {/* Hero */}
      <div className="hero-section">
        <div className="sponsor">
          <span className="sponsor__label">powered by</span>
          <span className="sponsor__name">Revolut</span>
        </div>
        <div style={{ marginTop: 22 }}>
          <div className="hero-section__title">brilho no olhar</div>
          <p className="hero-section__intro">
            bom dia. às vezes, achamos que maturidade é aprender a empregar
            menos. mas o brilho no olhar geralmente é um sinal de que a rota
            está ajustada. que esta sexta seja de luz.
          </p>
        </div>
      </div>

      {/* Index — na edição de hoje */}
      <div className="index-section">
        <div className="index-label section-label--yellow">
          na edição de hoje
        </div>
        <div className="index-card">
          {indexItems.map((item) => (
            <a
              key={item.id}
              className="index-item"
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToStory(item.id);
              }}
            >
              <span className="index-item__emoji">{item.emoji}</span>
              <div className="index-item__text">
                <div className="index-item__headline">{item.headline}</div>
              </div>
              <span className="index-item__arrow">›</span>
            </a>
          ))}

          {/* Podcast item */}
          <a
            className="index-item index-item--podcast"
            href="/podcasts"
            onClick={(e) => {
              e.preventDefault();
              navigate("/podcasts");
            }}
          >
            <span className="index-item__emoji">🎙️</span>
            <div className="index-item__text">
              <div className="index-item__headline">
                <strong>Sem tempo para ler?</strong>
              </div>
              <span className="index-item__podcast-link">
                Ouça o podcast da edição de hoje →
              </span>
            </div>
          </a>

          {/* Ad item */}
          <div className="index-item index-item--ad">
            <span className="index-item__emoji">🎟️</span>
            <div className="index-item__text">
              <div className="index-item__headline">
                <strong>Quer impulsionar sua marca?</strong>
              </div>
              <span className="index-item__ad-cta">
                Saiba como aparecer no the news →
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz */}
      <div className="quiz-section">
        <Button variant="primary">
          <span>✦</span> Fazer o Quiz da edição
        </Button>
      </div>

      {/* Articles */}
      {articles.map((article, i) => (
        <div key={`${article.id}_${i}`}>
          <div className="article-divider" />
          <div
            id={article.id}
            className="article-anchor"
            ref={(el) => {
              articleRefs.current[article.id] = el;
            }}
          >
            <div className="article-anchor__tag">{article.tag}</div>
            <div className="article-anchor__heading">{article.heading}</div>
            <p className="article-anchor__body">{article.body}</p>
            <Button variant="share" onClick={() => shareStory(article.heading)}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              Compartilhar pelo WhatsApp
            </Button>
          </div>
        </div>
      ))}

      <div className="section-spacer" />
      <BottomNav />
    </div>
  );
}
