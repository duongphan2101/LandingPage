"use client";

import { Collapse } from "antd";
import { faqs } from "@/data/content";

export function FAQ() {
  return (
    <section id="faq" className="bg-muted/30 py-24 md:py-32">
      <div className="container-tight max-w-3xl">
        <div className="reveal mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Câu hỏi thường gặp
          </p>

          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Bạn còn <span className="text-gradient">băn khoăn?</span>
          </h2>
        </div>

        <Collapse
          accordion
          bordered={false}
          className="glass reveal overflow-hidden rounded-2xl shadow-card"
          items={faqs.map((faq, index) => ({
            key: index,
            label: (
              <span className="font-display text-base font-semibold md:text-lg text text-foreground">
                {faq.q}
              </span>
            ),
            children: (
              <p className="leading-relaxed text-muted-foreground text-foreground">
                {faq.a}
              </p>
            ),
          }))}
        />
      </div>
    </section>
  );
}