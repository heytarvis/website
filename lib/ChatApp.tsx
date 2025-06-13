'use client';
import { useChat, ChatUI } from '@tarvis/react'

export default function ChatApp() {
  const { chatApp } = useChat({
    endpoint: 'http://localhost:3001/chat'
  })

  return <>
    <div className="max-w-[1000px] max-h-[1000px] mx-auto border-4 border-gray-200 rounded-xl overflow-hidden">
      <ChatUI ChatUIApp={chatApp} />
    </div>
  </>
}
