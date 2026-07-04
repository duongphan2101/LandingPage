"use client";

import { useState } from "react";
import { z } from "zod";
import { Loader2, CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { Button, TextField } from "@mui/material";
import { api } from "@/services/api";
import { useEmail } from "@/hooks/useEmail";

type Status = "idle" | "loading" | "success" | "error";

const newsletterSchema = z.object({
    email: z.string().trim().email({ message: "Email không hợp lệ" }).max(255),
});

const contactSchema = z.object({
    name: z.string().trim().min(2, "Vui lòng nhập tên").max(100),
    email: z.string().trim().email("Email không hợp lệ").max(255),
    message: z.string().trim().min(10, "Nội dung tối thiểu 10 ký tự").max(1000),
});

const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
        backgroundColor: "var(--input-bg, rgba(150, 150, 150, 0.05))",
        color: "inherit",
        "& fieldset": {
            borderColor: "var(--input-border, rgba(150, 150, 150, 0.3))",
        },
        "&:hover fieldset": {
            borderColor: "var(--input-border-hover, rgba(150, 150, 150, 0.6))",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#8b5cf6",
        },
    },
    "& .MuiInputLabel-root": {
        color: "var(--input-label, rgba(150, 150, 150, 0.8))",
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "#8b5cf6",
    },
    "& .MuiInputBase-input::placeholder": {
        color: "inherit",
        opacity: 0.5,
    },
};

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
        <div className="reveal glass rounded-3xl p-8 md:p-10 shadow-card text-foreground dark:text-white">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-primary shadow-glow mb-5">
                <Mail className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">Nhận tin sản phẩm</h3>
            <p className="text-muted-foreground dark:text-gray-300 mb-6">
                Cập nhật tính năng mới, ưu đãi độc quyền và bí quyết tự động hoá — mỗi tháng một lần.
            </p>

            <form onSubmit={onSubmit} className="space-y-4">
                <div className="flex flex-col gap-5">

                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="ban@example.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (status === "error") setStatus("idle");
                        }}
                        disabled={status === "loading"}
                        error={status === "error" && error !== null}
                        helperText={status === "error" ? error : ""}
                        sx={textFieldStyles}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        disabled={status === "loading"}
                        className="w-full bg-gradient-primary border-0 py-3 shadow-none hover:shadow-lg transition-all text-white"
                    >
                        {status === "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Đăng ký
                    </Button>

                    {status === "success" && (
                        <StatusLine status={status} error={null} successMsg="Đã đăng ký thành công!" />
                    )}

                </div>
            </form>
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


    const { sendEmail, loading } = useEmail();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const ok = await sendEmail(form.name, form.email);

        if (ok) {
            console.log(`Đã gửi email to ${form.email}`);
        } else {
            console.log("That bai!");
        }
    };

    return (
        <div className="reveal glass rounded-3xl p-8 md:p-10 shadow-card text-foreground dark:text-white">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">Liên hệ với chúng tôi</h3>
            <p className="text-muted-foreground dark:text-gray-300 mb-6">
                Có câu hỏi về sản phẩm hoặc muốn đặt số lượng lớn? Đội ngũ của chúng tôi sẽ phản hồi trong 24 giờ.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-5">
                    <TextField
                        fullWidth
                        label="Họ và tên"
                        variant="outlined"
                        value={form.name}
                        onChange={update("name")}
                        disabled={status === "loading"}
                        sx={textFieldStyles}
                    />

                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        placeholder="ban@example.com"
                        value={form.email}
                        onChange={update("email")}
                        disabled={status === "loading"}
                        sx={textFieldStyles}
                    />

                    <TextField
                        fullWidth
                        label="Nội dung"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={form.message}
                        onChange={update("message")}
                        disabled={status === "loading"}
                        sx={textFieldStyles}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        loading={loading}
                        disabled={status === "loading"}
                        className="w-full bg-gradient-primary border-0 py-3 shadow-none hover:shadow-lg transition-all text-white"
                    >
                        {status === "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Gửi tin nhắn
                    </Button>

                    <StatusLine
                        status={status}
                        error={error}
                        successMsg="Đã gửi. Cảm ơn bạn đã liên hệ!"
                    />
                </div>
            </form>
        </div>
    );
}

function StatusLine({ status, error, successMsg }: { status: Status; error: string | null; successMsg: string }) {
    if (status === "success") {
        return (
            <p className="flex items-center gap-2 text-sm text-primary mt-2" role="status">
                <CheckCircle2 className="h-4 w-4" /> {successMsg}
            </p>
        );
    }
    if (status === "error" && error) {
        return (
            <p className="flex items-center gap-2 text-sm text-destructive mt-2" role="alert">
                <AlertCircle className="h-4 w-4" /> {error}
            </p>
        );
    }
    return null;
}