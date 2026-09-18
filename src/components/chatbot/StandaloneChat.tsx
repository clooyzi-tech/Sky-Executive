'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RotateCcw, ArrowLeft, Sparkles } from 'lucide-react';
import chatbotConfig from '@/data/chatbot-config.json';

interface ChatMessage {
  id: string;
  type: 'bot' | 'user';
  text: string;
  options?: ChatOption[];
}

interface ChatOption {
  id: string;
  label: string;
  action: string;
  message?: string;
  url?: string;
}

type MenuKey = keyof typeof chatbotConfig.menuTree;

export default function StandaloneChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const initChat = () => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages([
        {
          id: 'greeting',
          type: 'bot',
          text: chatbotConfig.greeting,
        },
        {
          id: 'main',
          type: 'bot',
          text: chatbotConfig.menuTree.main.message,
          options: chatbotConfig.menuTree.main.options.map((o) => ({
            id: o.id,
            label: o.label,
            action: 'navigate',
          })),
        },
      ]);
      setIsTyping(false);
    }, 300);
  };

  useEffect(() => {
    initChat();
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleOptionClick = (option: ChatOption) => {
    // 1. Add user message bubble
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      type: 'user',
      text: option.label,
    };

    setMessages((prev) => [...prev, userMsg]);

    // 2. Handle External Actions
    if (option.action === 'whatsapp' && option.message) {
      const url = `https://wa.me/${chatbotConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(option.message)}`;
      window.open(url, '_blank');
      return;
    }

    if (option.action === 'call') {
      window.open(`tel:${chatbotConfig.phone}`, '_self');
      return;
    }

    if (option.action === 'maps' && option.url) {
      window.open(option.url, '_blank');
      return;
    }

    // 3. Navigation between menu nodes
    const targetKey = option.id as MenuKey;
    const menuNode = chatbotConfig.menuTree[targetKey];

    if (menuNode) {
      setIsTyping(true);
      setTimeout(() => {
        const nodeOptions = (
          menuNode as {
            message: string;
            options: Array<{
              id: string;
              label: string;
              action: string;
              message?: string;
              url?: string;
            }>;
          }
        ).options;

        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            type: 'bot',
            text: menuNode.message,
            options: nodeOptions.map((o) => ({
              id: o.id,
              label: o.label,
              action: o.action,
              message: o.message,
              url: o.url,
            })),
          },
        ]);
        setIsTyping(false);
      }, 350);
    }
  };

  return (
    <div className="w-full h-screen sm:h-[86vh] sm:max-w-xl flex flex-col overflow-hidden sm:rounded-2xl border border-border-light bg-white shadow-xl">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-accent/20 bg-gradient-to-r from-charcoal via-charcoal-surface to-charcoal px-4 py-3.5">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
            title="Back to livinn.in"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 bg-accent/20">
            <span className="text-sm font-bold text-accent-gold">L</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-sm font-semibold text-white">{chatbotConfig.botName}</h1>
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>
            <p className="text-[10px] text-white/70">24/7 Front Desk • liv.inn Pune</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Start Over Button */}
          <button
            onClick={initChat}
            className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/90 transition-colors hover:bg-white/20 hover:text-white"
          >
            <RotateCcw className="h-3 w-3" />
            <span className="hidden sm:inline">Start Over</span>
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto bg-[#FAF8F3]/60 px-4 py-5 scroll-smooth"
      >
        <div className="space-y-4 max-w-lg mx-auto">
          {messages.map((msg) => (
            <div key={msg.id} className="space-y-2">
              {/* User Message */}
              {msg.type === 'user' ? (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-end"
                >
                  <div className="rounded-2xl rounded-tr-sm bg-accent text-charcoal px-4 py-2.5 text-xs sm:text-sm font-semibold shadow-xs">
                    {msg.text}
                  </div>
                </motion.div>
              ) : (
                /* Bot Message */
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-[90%]"
                >
                  <div className="rounded-2xl rounded-tl-sm border border-border-light bg-white px-4 py-3.5 shadow-sm">
                    <p className="whitespace-pre-line text-xs sm:text-sm leading-relaxed text-foreground">
                      {msg.text.split(/(\*\*.*?\*\*)/).map((part, i) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return (
                            <strong key={i} className="font-semibold text-charcoal">
                              {part.slice(2, -2)}
                            </strong>
                          );
                        }
                        return part;
                      })}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Quick Reply Action Buttons */}
              {msg.options && msg.options.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-wrap gap-2 pt-1"
                >
                  {msg.options.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleOptionClick(option)}
                      className="rounded-full border border-accent/40 bg-accent-muted px-4 py-2 text-xs sm:text-sm font-medium text-charcoal transition-all hover:bg-accent/25 hover:border-accent active:scale-95 shadow-2xs"
                    >
                      {option.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-[85%]"
            >
              <div className="inline-flex items-center gap-1.5 rounded-2xl rounded-tl-sm border border-border-light bg-white px-4 py-3 shadow-xs">
                <span
                  className="h-2 w-2 animate-bounce rounded-full bg-accent"
                  style={{ animationDelay: '0ms' }}
                />
                <span
                  className="h-2 w-2 animate-bounce rounded-full bg-accent"
                  style={{ animationDelay: '150ms' }}
                />
                <span
                  className="h-2 w-2 animate-bounce rounded-full bg-accent"
                  style={{ animationDelay: '300ms' }}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border-light bg-white px-4 py-3">
        <div className="flex items-center justify-between text-[11px] text-slate-medium">
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span>Tap buttons above to navigate</span>
          </div>
          <Link href="/" className="hover:text-accent transition-colors font-medium">
            ← Home
          </Link>
        </div>
      </div>
    </div>
  );
}
