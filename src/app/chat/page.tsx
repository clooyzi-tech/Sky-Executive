import type { Metadata } from 'next';
import StandaloneChat from '@/components/chatbot/StandaloneChat';

export const metadata: Metadata = {
  title: 'Chat with Front Desk | Hotel Sky Executive Pune',
  description:
    'Chat with Hotel Sky Executive Front Desk Assistant. Instant info on rooms, rates, dining, location, and stay policies with simple button navigation.',
};

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F3] flex flex-col justify-center items-center sm:p-4">
      <StandaloneChat />
    </main>
  );
}
