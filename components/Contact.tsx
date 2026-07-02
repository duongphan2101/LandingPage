"use client";

import { useState } from "react";
import { z } from "zod";
import { Loader2, CheckCircle2, AlertCircle, Mail } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";

import { Button, Form, Input } from "antd";

import { api } from "@/services/api";
import TextArea from "antd/es/input/TextArea";

type Status = "idle" | "loading" | "success" | "error";

const newsletterSchema = z.object({
    email: z.string().trim().email({ message: "Email không hợp lệ" }).max(255),
});
const contactSchema = z.object({
    name: z.string().trim().min(2, "Vui lòng nhập tên").max(100),
    email: z.string().trim().email("Email không hợp lệ").max(255),
    message: z.string().trim().min(10, "Nội dung tối thiểu 10 ký tự").max(1000),
});

export function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32">
            <div className="container-tight grid lg:grid-cols-2 gap-10">
                <NewsletterCard />
                <ContactCard />
            </div>
        </section>
    );
}

function NewsletterCard() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        const parsed = newsletterSchema.safeParse({ email });
        if (!parsed.success) {
            setError(parsed.error.issues[0].message);
            setStatus("error");
            return;
        }
        setStatus("loading");
        try {
            await api.subscribeNewsletter(parsed.data as { email: string });
            setStatus("success");
            setEmail("");
        } catch {
            setStatus("error");
            setError("Không gửi được. Vui lòng thử lại.");
        }
    };

    return (
        <div className="reveal glass rounded-3xl p-8 md:p-10 shadow-card">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-primary shadow-glow mb-5">
                <Mail className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">Nhận tin sản phẩm</h3>
            <p className="text-muted-foreground mb-6">
                Cập nhật tính năng mới, ưu đãi độc quyền và bí quyết tự động hoá — mỗi tháng một lần.
            </p>

            <Form
                layout="vertical"
                onFinish={onSubmit}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập email!",
                        },
                        {
                            type: "email",
                            message: "Email không hợp lệ!",
                        },
                    ]}
                >
                    <Input
                        placeholder="ban@example.com"
                        size="large"
                    />
                </Form.Item>

                <Button
                    htmlType="submit"
                    type="primary"
                    loading={status === "loading"}
                    className="w-full bg-gradient-primary border-0"
                >
                    Đăng ký
                </Button>
            </Form>
        </div>
    );
}

function ContactCard() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState<string | null>(null);

    const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((f) => ({ ...f, [k]: e.target.value }));
        setStatus("idle");
        setError(null);
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        const parsed = contactSchema.safeParse(form);
        if (!parsed.success) {
            setError(parsed.error.issues[0].message);
            setStatus("error");
            return;
        }
        setStatus("loading");
        try {
            await api.submitContact(parsed.data as { name: string; email: string; message: string });
            setStatus("success");
            setForm({ name: "", email: "", message: "" });
        } catch {
            setStatus("error");
            setError("Gửi không thành công. Vui lòng thử lại sau.");
        }
    };

    return (
        <div className="reveal glass rounded-3xl p-8 md:p-10 shadow-card">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">Liên hệ với chúng tôi</h3>
            <p className="text-muted-foreground mb-6">
                Có câu hỏi về sản phẩm hoặc muốn đặt số lượng lớn? Đội ngũ của chúng tôi sẽ phản hồi trong 24 giờ.
            </p>
            <Form
                layout="vertical"
                onFinish={onSubmit}
                className="space-y-4"
            >
                <Form.Item
                    label="Họ và tên"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập họ và tên!",
                        },
                    ]}
                >
                    <Input size="large" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập email!",
                        },
                        {
                            type: "email",
                            message: "Email không hợp lệ!",
                        },
                    ]}
                >
                    <Input
                        size="large"
                        placeholder="ban@example.com"
                    />
                </Form.Item>

                <Form.Item
                    label="Nội dung"
                    name="message"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập nội dung!",
                        },
                    ]}
                >
                    <Input.TextArea rows={4} />
                </Form.Item>

                <Button
                    htmlType="submit"
                    loading={status === "loading"}
                    type="primary"
                    className="w-full bg-gradient-primary border-0"
                >
                    Gửi tin nhắn
                </Button>

                <StatusLine
                    status={status}
                    error={error}
                    successMsg="Đã gửi. Cảm ơn bạn đã liên hệ!"
                />
            </Form>
        </div>
    );
}

function StatusLine({ status, error, successMsg }: { status: Status; error: string | null; successMsg: string }) {
    if (status === "success") {
        return (
            <p className="flex items-center gap-2 text-sm text-primary" role="status">
                <CheckCircle2 className="h-4 w-4" /> {successMsg}
            </p>
        );
    }
    if (status === "error" && error) {
        return (
            <p className="flex items-center gap-2 text-sm text-destructive" role="alert">
                <AlertCircle className="h-4 w-4" /> {error}
            </p>
        );
    }
    return null;
}
