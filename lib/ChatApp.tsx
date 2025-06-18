'use client';
import { ChatUI, useChat } from '@tarvis/react'

export default function ChatApp() {
  const { chatApp, chatAppContext } = useChat({
    endpoint: 'http://localhost:3000/chat',
    model: 'mock-gpt-3.5',
    availableModels: [
      {
        name: 'Mock GPT-3.5',
        description: 'Mock model simulating GPT-3.5 capabilities',
        id: 'mock-gpt-3.5',
      },
      {
        name: 'Mock Claude Sonnet',
        description: 'Mock model simulating Claude Sonnet capabilities',
        id: 'mock-claude-sonnet',
      },
      {
        name: 'Mock Llama',
        description: 'Mock Llama',
        id: 'llama',
      }
    ]
  })

  return <>
    <div className="max-w-[1000px] max-h-[1000px] mx-auto border-4 border-gray-200 rounded-xl overflow-hidden">
      <ChatUI ChatUIApp={chatApp} />
    </div>
  </>
}
