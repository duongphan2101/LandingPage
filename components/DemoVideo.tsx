"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export function DemoVideo() {
  return (
    <section id="demo" className="bg-muted/30 py-24 md:py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center reveal">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Xem demo
          </p>

          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Trải nghiệm Galaxy Book5{" "}
            <span className="text-gradient">trong hành động.</span>
          </h2>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl shadow-elegant">
          <LiteYouTubeEmbed
            id="rwxposMAV-w"
            title="Samsung Galaxy Book5 Demo"
            poster="maxresdefault"
            noCookie
          />
        </div>
      </div>
    </section>
  );
}