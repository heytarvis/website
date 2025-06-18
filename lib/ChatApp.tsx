'use client';
import { ChatUI, useChat } from '@tarvis/react'
import {useEffect} from "react";

export default function ChatApp() {
  const host = process.env.NEXT_PUBLIC_HOSTNAME || 'http://localhost:3000';

  const { chatApp, chatAppContext } = useChat({
    endpoint: `${host}/chat`,
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
    ],
    threads: [
      {
        "id": "s0aiybdfk7",
        "title": "Exploring the Concept of Love",
        "messages": [
          {
            "id": "system-sk7tfg69p5",
            "type": "system",
            "content": [
              "You are a helpful assistant. Please format all your responses using markdown."
            ],
            "timestamp": new Date("2025-06-18T21:53:02.933Z")
          },
          {
            "id": "s1fcld5yag",
            "content": [
              "what is love?"
            ],
            "type": "user",
            "timestamp": new Date("2025-06-18T21:54:15.976Z")
          },
          {
            "id": "s1eq221o9s",
            "content": [
              "Love is a complex and multifaceted emotion that can manifest in various forms such as romantic love, familial love, or platonic love. It involves feelings of affection, care, compassion, and attachment towards someone or something. Love can bring joy, fulfillment, and connection to our lives, and it plays a significant role in our relationships and overall well-being.",
              "Love is a complex and multifaceted emotion that can manifest in various forms such as romantic love, familial love, or platonic love. It involves feelings of affection, care, compassion, and attachment towards someone or something. Love can bring joy, fulfillment, and connection to our lives, and it plays a significant role in our relationships and overall well-being."
            ],
            "type": "assistant",
            "timestamp": new Date("2025-06-18T21:54:15.978Z"),
            "currentlySelectedVersionIndex": 0,
            "usage_metadata": {
              "input_tokens": 105,
              "output_tokens": 72,
              "total_tokens": 177,
            }
          },
          {
            "id": "sl9uysq11t",
            "content": [
              "baby don't hurt me..."
            ],
            "type": "user",
            "timestamp": new Date("2025-06-18T21:54:29.421Z")
          },
          {
            "id": "shvffalodb",
            "content": [
              "I see you're referencing the lyrics from the song \"What is Love\" by Haddaway. It's a catchy tune that became popular in the 1990s and is often associated with the movie \"A Night at the Roxbury.\"",
              ""
            ],
            "type": "assistant",
            "timestamp": new Date("2025-06-18T21:54:29.422Z"),
            "currentlySelectedVersionIndex": 0,
            "usage_metadata": {
              "input_tokens": 119,
              "output_tokens": 49,
              "total_tokens": 168,
            }
          }
        ],
        "createdAt": new Date("2025-06-18T21:53:02.933Z")
      },
      {
        "id": "s95i0m7vs3",
        "title": "AI Chat in JavaScript",
        "messages": [
          {
            "id": "system-syqmxfethm",
            "type": "system",
            "content": [
              "You are a helpful assistant. Please format all your responses using markdown."
            ],
            "timestamp": new Date("2025-06-18T21:52:26.847Z")
          },
          {
            "id": "ssbmjwzujr",
            "content": [
              "can i program an AI chat in javascript?"
            ],
            "type": "user",
            "timestamp": new Date("2025-06-18T21:52:42.320Z")
          },
          {
            "id": "sfib7rg5si",
            "content": [
              "Yes, you can program an AI chat using JavaScript. There are various libraries and frameworks available that can help you create AI chatbots in JavaScript, such as TensorFlow.js, Dialogflow, or RiveScript. You can also build a chatbot from scratch using JavaScript and libraries like React or Node.js."
            ],
            "type": "assistant",
            "timestamp": new Date("2025-06-18T21:52:42.321Z"),
            "currentlySelectedVersionIndex": 0,
            "usage_metadata": {
              "input_tokens": 38,
              "output_tokens": 61,
              "total_tokens": 99,
            }
          }
        ],
        "createdAt": new Date("2025-06-18T21:52:26.847Z")
      },
      {
        "id": "shmx0eqwo5",
        "title": "Fascinating Facts About Sweden",
        "messages": [
          {
            "id": "system-s7k4cfrlzc",
            "type": "system",
            "content": [
              "You are a helpful assistant. Please format all your responses using markdown."
            ],
            "timestamp": new Date("2025-06-18T21:51:55.604Z")
          },
          {
            "id": "sskweviw48",
            "content": [
              "tell me a few interesting facts about sweden"
            ],
            "type": "user",
            "timestamp": new Date("2025-06-18T21:52:12.103Z")
          },
          {
            "id": "stq1wd1c5n",
            "content": [
              "Sure! Here are a few interesting facts about Sweden:\n\n1. **Midnight Sun:** In the northern part of Sweden, during the summer months, the sun never fully sets, creating the phenomenon known as the Midnight Sun.\n\n2. **Allemansrätten:** Sweden has a unique concept called \"Allemansrätten,\" which translates to \"the freedom to roam.\" This allows people to freely explore and camp in nature, as long as they respect the environment.\n\n3. **Nobel Prize:** The Nobel Prizes, including the Nobel Peace Prize, were established by the Swedish inventor Alfred Nobel.\n\n4. **Gender Equality:** Sweden is known for its strong commitment to gender equality. It was the first country to introduce paid parental leave for both parents.\n\n5. **High Quality of Life:** Sweden consistently ranks high in quality of life indices, with a strong welfare system, high life expectancy, and excellent healthcare and education systems.\n\nI hope you find these facts about Sweden interesting!"
            ],
            "type": "assistant",
            "timestamp": new Date("2025-06-18T21:52:12.104Z"),
            "currentlySelectedVersionIndex": 0,
            "usage_metadata": {
              "input_tokens": 38,
              "output_tokens": 200,
              "total_tokens": 238,
            }
          },
          {
            "id": "sqcqkxb0r5",
            "content": [
              "ok, now about denmark"
            ],
            "type": "user",
            "timestamp": new Date("2025-06-18T21:52:21.314Z")
          },
          {
            "id": "s3iimtlxqh",
            "content": [
              "Of course! Here are a few interesting facts about Denmark:\n\n1. **Happiest Country:** Denmark is often ranked as one of the happiest countries in the world, with a high quality of life, strong social support systems, and a focus on work-life balance.\n\n2. **LEGO:** The popular toy company LEGO was founded in Denmark in 1932. The name \"LEGO\" comes from the Danish words \"leg godt,\" which means \"play well.\"\n\n3. **Biking Culture:** Denmark is known for its biking culture, with many people choosing to commute by bicycle. Copenhagen, the capital city, is particularly bike-friendly with dedicated bike lanes and paths.\n\n4. **Hygge:** The Danish concept of \"hygge\" (pronounced hoo-ga) is all about coziness, comfort, and enjoying the simple things in life. It's a key part of Danish culture, especially during the long winter months.\n\n5. **Green Energy:** Denmark is a global leader in renewable energy. It aims to be carbon-neutral by 2050 and has made significant investments in wind power, with wind turbines dotting the landscape.\n\nI hope you find these facts about Denmark interesting!"
            ],
            "type": "assistant",
            "timestamp": new Date("2025-06-18T21:52:21.315Z"),
            "currentlySelectedVersionIndex": 0,
            "usage_metadata": {
              "input_tokens": 252,
              "output_tokens": 244,
              "total_tokens": 496,
            }
          }
        ],
        "createdAt": new Date("2025-05-18T21:51:55.604Z")
      }
    ]
  })

  useEffect(() => {
    // Simulate loading state for the chat app
    chatAppContext.isLoading.value = true

    setTimeout(() => {
      chatAppContext.isLoading.value = false
    }, 1800)
  }, []);

  return <>
    <div className="max-w-[1000px] max-h-[1000px] mx-auto border-4 border-gray-200 rounded-xl overflow-hidden">
      <ChatUI ChatUIApp={chatApp} />
    </div>
  </>
}
