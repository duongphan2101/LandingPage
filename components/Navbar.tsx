"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

import { useTheme } from "@/hooks/useTheme";
import { Button } from "@mui/material";

const links = [
  { href: "#features", label: "Tính năng" },
  // { href: "#how", label: "Cách hoạt động" },
  { href: "#specs", label: "Thông số" },
  { href: "#testimonials", label: "Đánh giá" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Liên hệ" },
];

export function Navbar() {
  const { theme, toggle, mounted } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"
        }`}
    >
      <div className="container-tight">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-300 ${scrolled ? "glass shadow-card" : "bg-transparent"
            }`}
          aria-label="Chính"
        >
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
            {/* <span className="inline-block h-8 w-8 rounded-lg bg-gradient-primary shadow-glow" aria-hidden /> */}
            <span>x<span className="text-gradient"> Books</span></span>
          </a>

          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              variant="text"
              color="inherit"
              onClick={toggle}
              aria-label={
                mounted
                  ? theme === "dark"
                    ? "Chuyển sang chế độ sáng"
                    : "Chuyển sang chế độ tối"
                  : "Đổi giao diện"
              }
            >
              {!mounted ? (
                <div className="w-5 h-5" />
              ) : theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button
              sx={{
                display: { xs: "none", md: "inline-flex" },
                borderRadius: 2
              }}
              className="bg-gradient-primary hover:opacity-90"
              variant="text"
              color="inherit"
              component="a"
              href="#contact"
            >
              Đặt mua
            </Button>

            <Button
              sx={{ display: { xs: "flex", lg: "none" } }}
              onClick={() => setOpen((o) => !o)}
              aria-label="Mở menu"
              color="inherit"
              aria-expanded={open}
              variant="text"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 animate-fade-in">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
