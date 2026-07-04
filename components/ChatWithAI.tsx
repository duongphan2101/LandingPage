"use client";

import React, { useState, useRef, useEffect } from "react";
import './ChatWithAI.css';
import icon from "@/assets/Robot.png";
import Image from "next/image";
import { SYSTEM_PROMPT } from "@/lib/prompts";
import { SendOutlined } from "@mui/icons-material";
import { ai } from "@/lib/gemini";

type Message = {
  sender: "user" | "ai";
  text?: string;
  pro?: {
    id: number;
    title: string;
    desc: string;
  }[];
};

const ChatWithAI: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "👋 Xin chào! Tôi là xBooks Assistant. Hãy hỏi tôi về sản phẩm Samsung Galaxy Book5 pro 360.",
    },
  ]);

  const [loading, setLoading] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement | null>(null);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const handleSend = async () => {
    if (!message.trim()) return;

    const input = message;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: input,
      },
    ]);

    setMessage("");
    setLoading(true);

    const prompt = `
      ${SYSTEM_PROMPT}

      Câu hỏi:
      ${input}
      `;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: response.text,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Xin lỗi, hiện tại tôi không thể kết nối tới AI.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, loading]);

  return (
    <div className="chat-with-ai-container">

      <button className="chat-ai-button" onClick={toggleChat}>
        <Image src={icon} alt="AI Icon" className="ai-icon" />
      </button>

      {isChatOpen && (
        <div className="chat-box flex flex-col justify-between">
          <div className="chat-box-header bg-hero">
            <span>xBooks AI</span>
            <button className="close-btn" onClick={toggleChat}>×</button>
          </div>

          <div className="chat-box-body" ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender === "user" ? "message-user" : "message-ai"}`}>
                {msg.text && <div>{msg.text}</div>}
                {msg.pro && msg.pro.length > 0 && (
                  <div className="chatbot-job-list">
                    {msg.pro.map((p) => (
                      <div key={p.id} className="chatbot-job-item" onClick={() => window.open(`#`, "_blank")}>
                        <strong>{p.title}</strong>
                        <p>{p.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="message message-ai">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>

          <div className="chat-box-bottom flex items-center justify-between">

            <input
              placeholder="Nhập nội dung ... "
              className="inputMessage"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button className="btn-send" onClick={handleSend}>
              <SendOutlined color="primary" />
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWithAI;
