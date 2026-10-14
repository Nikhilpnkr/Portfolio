type GtagParams = Record<string, string | number | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", name: string, params?: GtagParams) => void;
  }
}

export type TrackEvent =
  | "whatsapp_click"
  | "email_click"
  | "resume_download"
  | "outbound_live_site";

export function track(event: TrackEvent, params?: GtagParams) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", event, params);
}
