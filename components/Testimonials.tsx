"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { testimonials as fallback } from "@/data/content";
import { api, type Testimonial } from "@/services/api";

export function Testimonials() {
  const [items, setItems] = useState<Testimonial[]>(fallback);

  // useEffect(() => {
  //   // Ready to swap for real API — falls back silently to local data.
  //   api.getTestimonials().then(setItems).catch(() => {});
  // }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Khách hàng nói gì</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Được tin dùng bởi <span className="text-gradient">hàng ngàn gia đình.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure
              key={t.id}
              className="reveal glass rounded-2xl p-7 shadow-card flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex gap-0.5 mb-4" aria-label={`Đánh giá ${t.rating} trên 5`}>
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-base leading-relaxed flex-1">"{t.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center font-semibold text-primary-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
