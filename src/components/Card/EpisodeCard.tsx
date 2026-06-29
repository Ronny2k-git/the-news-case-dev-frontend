interface EpisodeCardProps {
  title: string;
  date: string;
  duration: string;
  progress?: number;
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
          <img
            src="/icons/header/headphones.svg"
            alt="podcast"
            width={18}
            height={18}
          />
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
          <img
            src="/icons/player/download.svg"
            alt="baixar"
            width={15}
            height={15}
          />
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
            stroke="white"
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
          <img
            src="/icons/player/share.svg"
            alt="compartilhar"
            width={15}
            height={15}
          />
        </button>
      </div>
    </div>
  );
}
