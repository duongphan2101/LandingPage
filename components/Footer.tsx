"use client";

import { GithubOutlined, LinkedinOutlined, YoutubeOutlined } from "@ant-design/icons";

const columns = [
    {
        title: "Sản phẩm",
        links: [
            { label: "Tính năng", href: "#features" },
            { label: "Thông số", href: "#specs" },
            { label: "Demo", href: "#demo" },
            { label: "Đặt hàng", href: "#contact" },
        ],
    },
    {
        title: "Công ty",
        links: [
            { label: "Về chúng tôi", href: "#" },
            { label: "Tuyển dụng", href: "#" },
            { label: "Báo chí", href: "#" },
            { label: "Blog", href: "#" },
        ],
    },
    {
        title: "Hỗ trợ",
        links: [
            { label: "Trung tâm trợ giúp", href: "#faq" },
            { label: "Liên hệ", href: "#contact" },
            { label: "Bảo hành", href: "#" },
            { label: "Tài liệu API", href: "#" },
        ],
    },
];

const social = [
    {
        title: "Youtube",
        icon: YoutubeOutlined,
        link: "https://youtu.be/rwxposMAV-w?si=8cXfYf9fR6z2yWLR"
    },
    {
        title: "Linked",
        icon: LinkedinOutlined,
        link: "https://www.linkedin.com/in/phan-nguyen-dai-duong-1a2138309"
    },
    {
        title: "Github",
        icon: GithubOutlined,
        link: "https://github.com/duongphan2101/LandingPage.git"
    }
]

export function Footer() {
    return (
        <footer className="border-t border-border bg-muted/20">
            <div className="container-tight py-16">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg mb-4">
                            {/* <span className="inline-block h-8 w-8 rounded-lg bg-gradient-primary shadow-glow" aria-hidden /> */}
                            <span>x<span className="text-gradient"> Books</span></span>
                        </a>
                        <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                            Samsung Galaxy Book5 Pro 360 — laptop 2-in-1 màn hình AMOLED,
                            đồng bộ liền mạch với hệ sinh thái Galaxy.
                        </p>
                        <div className="flex gap-2 mt-5">
                            {social.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <a
                                        key={index}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={item.title}
                                        className="h-9 w-9 rounded-lg glass flex items-center justify-center hover:shadow-glow transition-shadow"
                                    >
                                        <Icon />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {columns.map((col) => (
                        <div key={col.title}>
                            <h4 className="font-display font-semibold mb-4">{col.title}</h4>
                            <ul className="space-y-2.5 text-sm">
                                {col.links.map((l) => (
                                    <li key={l.label}>
                                        <a href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                                            {l.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} SmartHome Inc. Tất cả quyền được bảo lưu.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-foreground">Điều khoản</a>
                        <a href="#" className="hover:text-foreground">Bảo mật</a>
                        <a href="#" className="hover:text-foreground">Cookie</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
