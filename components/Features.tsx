import * as Icons from "lucide-react";
import { features } from "@/data/content";

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container-tight">
        <div className="max-w-2xl reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Tính năng</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Được thiết kế cho <span className="text-gradient">người sáng tạo.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sáu điểm nhấn giúp Galaxy Book5 Pro 360 trở thành cỗ máy 2-in-1 hoàn hảo cho công việc và sáng tạo.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = (Icons[f.icon as keyof typeof Icons] as Icons.LucideIcon) ?? Icons.Sparkles;
            return (
              <article
                key={f.title}
                className="reveal group glass rounded-2xl p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-primary shadow-glow mb-5">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
