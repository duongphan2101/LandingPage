export function DemoVideo() {
  return (
    <section id="demo" className="py-24 md:py-32 bg-muted/30">
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
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/rwxposMAV-w?si=JfhgmoINu7o3tjRx"
              title="Samsung Galaxy Book5 Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}