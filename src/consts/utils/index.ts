import type { RefObject } from "react";

export function scrollToStory(
  id: string,
  ref: RefObject<Record<string, HTMLElement | null>>,
) {
  ref.current[id]?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export function shareStory(heading: string) {
  const text = encodeURIComponent(
    `Leia no the news: "${heading}" — ${window.location.href}`,
  );
  window.open(`https://wa.me/?text=${text}`, "_blank");
}
