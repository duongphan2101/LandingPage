"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-device.webp";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "@mui/material";

export function Hero() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-hero mx-auto w-full px-6">
            <div className="container-tight relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <div className="reveal">
                        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-6">
                            <Sparkles className="h-3.5 w-3.5 text-primary" />
                            <span>Mới 2025 · Kèm S Pen · Đã có hàng</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                            Galaxy Book5 Pro 360.{" "}
                            <span className="text-gradient">Sáng tạo không giới hạn.</span>
                        </h1>

                        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                            Laptop 2-in-1 màn hình Dynamic AMOLED 2X 16" 3K 120Hz, Intel Core Ultra 7,
                            16 GB RAM, bản lề xoay 360° và S Pen đi kèm — mọi thứ bạn cần để làm việc và sáng tạo.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button
                                href="#contact"
                                className="bg-gradient-primary hover:opacity-90 border-0 shadow-elegant text-base hover:text-white"
                                variant="text"
                                color="inherit"
                                sx={{ borderRadius: 2 }}
                            >
                                <span className="flex items-center">
                                    Đặt mua ngay
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </span>
                            </Button>

                            <Button href="#demo" className="h-12 px-6 text-base" variant="outlined" color="inherit" sx={{ borderRadius: 2 }}>
                                Xem demo
                            </Button>
                        </div>

                        <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                            {[
                                ["16\"", "Dynamic AMOLED 2X"],
                                ["16 GB", "RAM LPDDR5x"],
                                ["25h", "Thời lượng pin"],
                            ].map(([v, l]) => (
                                <div key={l}>
                                    <dt className="text-2xl font-display font-bold text-gradient">{v}</dt>
                                    <dd className="text-xs text-muted-foreground mt-1">{l}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="relative reveal">

                        <div className="absolute inset-0 bg-gradient-primary rounded-[3rem] blur-3xl opacity-30 animate-pulse-glow" aria-hidden />
                        <div className="relative rounded-4xl overflow-hidden glass shadow-elegant">
                            <Image
                                // loading="eager"
                                loading="lazy"
                                src={heroImage}
                                alt="Samsung Galaxy Book5 Pro 360 16 inch màn hình AMOLED với S Pen"
                                width={420}
                                height={420}
                                sizes="(max-width:768px) 80vw, 420px"
                                fetchPriority="high"
                                decoding="async"
                                className="w-full h-auto"
                                priority
                            />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
