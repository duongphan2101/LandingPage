// Central service layer. Swap BASE_URL and endpoints when connecting to a real backend.
// All calls return typed data; components use react-query or local state for UX.

export const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
    ...init,
  });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json() as Promise<T>;
}

export interface NewsletterPayload {
  email: string;
  name?: string;
}
export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export const api = {
  subscribeNewsletter: (payload: NewsletterPayload) =>
    request<{ ok: boolean }>("/api/newsletter", { method: "POST", body: JSON.stringify(payload) }),

  submitContact: (payload: ContactPayload) =>
    request<{ ok: boolean }>("/api/contact", { method: "POST", body: JSON.stringify(payload) }),

  getTestimonials: () => request<Testimonial[]>("/api/testimonials"),
  getSpecs: () => request<Spec[]>("/api/specs"),
  getNews: () => request<NewsItem[]>("/api/news"),
};

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  quote: string;
  rating: number;
}
export interface Spec {
  label: string;
  value: string;
}
export interface NewsItem {
  id: string;
  title: string;
  url: string;
  date: string;
}
