import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/BottomNav/BottomNav";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { articles, indexItems, tabs } from "../../consts/pages";
import "./Edicao.css";
import { scrollToStory, shareStory } from "../../consts/utils";

export default function Edicao() {
  const [activeTab, setActiveTab] = useState(0);
  const [progressVisible, setProgressVisible] = useState(true);
  const navigate = useNavigate();
  const articleRefs = useRef<Record<string, HTMLDivElement | null>>({});

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
                scrollToStory(item.id, articleRefs);
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
