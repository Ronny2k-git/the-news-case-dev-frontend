import type { ReactNode } from "react";
import "./Card.css";

/* ─────────────────────────────────────────
   EPISODE CARD (Podcasts)
───────────────────────────────────────── */

interface EpisodeCardProps {
  title: string;
  date: string;
  duration: string;
  progress?: number; // 0-100, undefined = not started
  done?: boolean;
  onPlay?: () => void;
  onDownload?: () => void;
  onSave?: () => void;
  onShare?: () => void;
  saved?: boolean;
}

export function EpisodeCard({
  title,
  date,
  duration,
  progress,
  done = false,
  onPlay,
  onDownload,
  onSave,
  onShare,
  saved = false,
}: EpisodeCardProps) {
  return (
    <div className="ep-item">
      <div className="ep-item__top">
        {/* Cover */}
        <div className="ep-item__cover">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6b6b74"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M3 18v-6a9 9 0 0118 0v6" />
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
          </svg>
        </div>

        {/* Info */}
        <div className="ep-item__body">
          <p className="ep-item__title">{title}</p>
          <div className="ep-item__meta">
            <span>{date}</span>
            <span>·</span>
            <span>{duration}</span>
            {progress !== undefined && progress > 0 && !done && (
              <>
                <span>·</span>
                <div className="ep-item__progress-mini">
                  <div
                    className="ep-item__progress-mini-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Play / Done */}
        {done ? (
          <span className="ep-item__done-check">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
        ) : (
          <button
            className="ep-item__play-btn"
            onClick={onPlay}
            aria-label="Reproduzir"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </button>
        )}
      </div>

      {/* Actions */}
      <div className="ep-item__actions">
        <button
          className="ep-item__action-btn"
          onClick={onDownload}
          aria-label="Baixar"
        >
          <svg
            width="15"
            height="15"
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
          className={`ep-item__action-btn ${saved ? "ep-item__action-btn--saved" : ""}`}
          onClick={onSave}
          aria-label="Salvar"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill={saved ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
          </svg>
        </button>

        <button
          className="ep-item__action-btn"
          onClick={onShare}
          aria-label="Compartilhar"
        >
          <svg
            width="15"
            height="15"
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
  );
}

/* ─────────────────────────────────────────
   MENU ITEM CARD (Mais)
───────────────────────────────────────── */

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
