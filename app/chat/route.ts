import { NextRequest } from 'next/server'
import type { OnChunkCallback, OnCompleteCallback, OnErrorCallback } from '@tarvis/server'
import { TarvisClient } from '@tarvis/server'
import { mockModelClient } from "../../lib/mock-models/gpt35mock";

const tarvis = new TarvisClient({
  availableModels: [
    {
      name: 'Mock GPT-3.5',
      description: 'Mock model simulating GPT-3.5 capabilities',
      id: 'mock-gpt-3.5',
      ModelInstance: mockModelClient
    },
    {
      name: 'Mock Claude Sonnet',
      description: 'Mock model simulating Claude Sonnet capabilities',
      id: 'mock-claude-sonnet',
      ModelInstance: mockModelClient
    },
    {
      name: 'Mock Llama',
      description: 'Mock Llama',
      id: 'llama',
      ModelInstance: mockModelClient
    }
  ]
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    return new Response(await tarvis.streamChatResponse(body));
  } catch (error) {
    console.error('Error handling chat request:', error)
    return new Response(
      JSON.stringify({ type: 'error', error: 'Internal server error' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
}
