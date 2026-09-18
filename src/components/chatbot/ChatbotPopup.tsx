'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCcw, Check, Sparkles } from 'lucide-react';
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

export default function ChatbotPopup({ onClose }: { onClose: () => void }) {
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
    // 1. Add user bubble for selected choice
    const userMsgId = `user-${Date.now()}`;
    const userMsg: ChatMessage = {
      id: userMsgId,
      type: 'user',
      text: option.label,
    };

    setMessages((prev) => [...prev, userMsg]);

    // 2. Handle Actions
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
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="fixed bottom-20 right-3 z-[60] flex h-[540px] w-[350px] flex-col overflow-hidden rounded-2xl border border-border-light bg-white shadow-2xl sm:right-6 sm:w-[390px]"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-accent/20 bg-gradient-to-r from-charcoal via-charcoal-surface to-charcoal px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 bg-accent/20">
            <span className="text-sm font-bold text-accent-gold">L</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-semibold text-white">{chatbotConfig.botName}</h3>
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>
            <p className="text-[10px] text-white/70">24/7 Front Desk • Pune</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {/* Reset / Restart Button */}
          <button
            onClick={initChat}
            title="Start Over"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/15 hover:text-white"
            aria-label="Restart chat"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/15 hover:text-white"
            aria-label="Close chat"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto bg-[#FAF8F3]/60 px-4 py-4 scroll-smooth"
      >
        <div className="space-y-3.5">
          {messages.map((msg) => (
            <div key={msg.id} className="space-y-2">
              {/* User Message Bubble */}
              {msg.type === 'user' ? (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-end"
                >
                  <div className="rounded-2xl rounded-tr-sm bg-accent text-charcoal px-3.5 py-2 text-xs font-semibold shadow-xs">
                    {msg.text}
                  </div>
                </motion.div>
              ) : (
                /* Bot Message Bubble */
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-[88%]"
                >
                  <div className="rounded-2xl rounded-tl-sm border border-border-light bg-white px-4 py-3 shadow-sm">
                    <p className="whitespace-pre-line text-xs leading-relaxed text-foreground">
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

              {/* Quick Reply Buttons for this message */}
              {msg.options && msg.options.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-wrap gap-1.5 pt-1"
                >
                  {msg.options.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleOptionClick(option)}
                      className="rounded-full border border-accent/40 bg-accent-muted px-3.5 py-1.5 text-xs font-medium text-charcoal transition-all hover:bg-accent/25 hover:border-accent active:scale-95 shadow-2xs"
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

      {/* Bottom Bar — 100% Button Driven 안내 */}
      <div className="border-t border-border-light bg-white px-4 py-2.5">
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-medium">
          <Sparkles className="h-3 w-3 text-accent" />
          <span>Tap buttons above to navigate • 24/7 Support</span>
        </div>
      </div>
    </motion.div>
  );
}

