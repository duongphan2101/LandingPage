"use client";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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

        <div className="glass reveal overflow-hidden rounded-2xl shadow-card">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              disableGutters
              elevation={0}
              sx={{
                background: "transparent",
                color: "inherit",
                boxShadow: "none",
                borderBottom:
                  index !== faqs.length - 1
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "inherit" }} />}
              >
                <span className="font-display text-base font-semibold md:text-lg text-foreground">
                  {faq.q}
                </span>
              </AccordionSummary>

              <AccordionDetails>
                <p className="leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}