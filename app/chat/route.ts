import { NextRequest } from 'next/server'
import type { OnChunkCallback, OnCompleteCallback, OnErrorCallback } from '@tarvis/server'
import { handleChatKitClientInput } from '@tarvis/server'

export async function POST(req: NextRequest) {
  const encoder = new TextEncoder()
  const stream = new TransformStream()
  const writer = stream.writable.getWriter()

  const sendChunk = async (data: any) => {
    await writer.write(encoder.encode(`${JSON.stringify(data)}\n\n`))
  }

  try {
    // Parse the request body
    const body = await req.json()

    await handleChatKitClientInput(
      body,
      ((chunk) => {
        sendChunk(chunk)
      }) as OnChunkCallback,
      ((complete) => {
        sendChunk(complete)
        writer.close()
      }) as OnCompleteCallback,
      ((error: Error) => {
        sendChunk({ type: 'error', error: error.message })
        writer.close()
      }) as OnErrorCallback
    )

    return new Response(stream.readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
      },
    })
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
