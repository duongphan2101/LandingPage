"use client";

import { specs } from "@/data/content";

export function Specs() {
  return (
    <section id="specs" className="py-24 md:py-32">
      <div className="container-tight">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Thông số kỹ thuật</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Sức mạnh <span className="text-gradient">nằm trong từng chi tiết.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Từ Intel Core Ultra 7 đến màn hình AMOLED 3K — Galaxy Book5 Pro 360 mang tới
              hiệu năng flagship trong thân máy chỉ 12.8mm, nặng 1.69 kg.
            </p>
          </div>

          <div className="reveal">
            <dl className="glass rounded-2xl divide-y divide-border overflow-hidden shadow-card">
              {specs.map((s) => (
                <div key={s.label} className="flex items-center justify-between p-5">
                  <dt className="text-sm font-medium text-muted-foreground">{s.label}</dt>
                  <dd className="font-display font-semibold text-right">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

      </div>
    </section>
  );
}