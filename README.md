# InterviewGPT


# 🎤 InterviewGPT – AI Mock Interview Platform

InterviewGPT is an AI-powered mock interview platform that simulates real interview experiences using voice interaction.

It helps users practice technical, HR, and behavioral interviews with real-time feedback powered by AI.

Built with **Python + LiveKit (backend)** and  **Next.js (frontend)** .

---

## 🚀 Features

* 🎙️ Real-time voice-based interview simulation
* 🧠 AI-powered interviewer (role-based & experience-based)
* 🧩 Supports Technical, HR, Behavioral & Mixed interviews
* 🔁 Dynamic follow-up questions
* 📊 Post-interview feedback & evaluation
* 🌐 Web-based UI with live audio streaming

---

## 🧱 Tech Stack

### Backend

* Python
* LiveKit Agents
* Google Gemini (LLM)
* Deepgram (Speech-to-Text)
* Murf (Text-to-Speech)
* WebSockets

### Frontend

* Next.js (App Router)
* React
* Tailwind CSS
* LiveKit Client SDK
* TypeScript

---

## 📂 Project Structure

<pre class="overflow-visible! px-0!" data-start="1116" data-end="1349"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>InterviewGPT/
├── backend
│   ├── KMS
│   │   └── logs
│   ├── pyproject.toml
│   ├── src
│   │   ├── agent.py
│   │   ├── agent_starter_python.egg-info
│   │   │   ├── dependency_links.txt
│   │   │   ├── PKG-INFO
│   │   │   ├── requires.txt
│   │   │   ├── SOURCES.txt
│   │   │   └── top_level.txt
│   │   └── __init__.py
│   └── uv.lock
└── frontend
    ├── app
    │   ├── (app)
    │   │   ├── layout.tsx
    │   │   ├── opengraph-image.tsx
    │   │   └── page.tsx
    │   ├── api
    │   │   └── connection-details
    │   │       └── route.ts
    │   ├── favicon.ico
    │   ├── layout.tsx
    │   └── ui
    │       ├── layout.tsx
    │       └── page.tsx
    ├── app-config.ts
    ├── components
    │   ├── app
    │   │   ├── app.tsx
    │   │   ├── chat-transcript.tsx
    │   │   ├── preconnect-message.tsx
    │   │   ├── session-provider.tsx
    │   │   ├── session-view.tsx
    │   │   ├── theme-toggle.tsx
    │   │   ├── tile-layout.tsx
    │   │   ├── view-controller.tsx
    │   │   └── welcome-view.tsx
    │   └── livekit
    │       ├── agent-control-bar
    │       │   ├── agent-control-bar.tsx
    │       │   ├── chat-input.tsx
    │       │   ├── hooks
    │       │   │   ├── use-input-controls.ts
    │       │   │   └── use-publish-permissions.ts
    │       │   ├── track-device-select.tsx
    │       │   ├── track-selector.tsx
    │       │   └── track-toggle.tsx
    │       ├── alert-toast.tsx
    │       ├── alert.tsx
    │       ├── button.tsx
    │       ├── chat-entry.tsx
    │       ├── scroll-area
    │       │   ├── hooks
    │       │   │   └── useAutoScroll.ts
    │       │   └── scroll-area.tsx
    │       ├── select.tsx
    │       ├── shimmer-text.tsx
    │       ├── toaster.tsx
    │       └── toggle.tsx
    ├── components.json
    ├── eslint.config.mjs
    ├── fonts
    │   ├── CommitMono-400-Italic.otf
    │   ├── CommitMono-400-Regular.otf
    │   ├── CommitMono-700-Italic.otf
    │   └── CommitMono-700-Regular.otf
    ├── hooks
    │   ├── useChatMessages.ts
    │   ├── useConnectionTimout.tsx
    │   ├── useDebug.ts
    │   └── useRoom.ts
    ├── lib
    │   └── utils.ts
    ├── next-env.d.ts
    ├── next.config.ts
    ├── package.json
    ├── pnpm-lock.yaml
    ├── postcss.config.mjs
    ├── public
    │   ├── commit-mono-400-regular.woff
    │   ├── everett-light.woff
    │   ├── lk-logo-dark.svg
    │   ├── lk-logo.svg
    │   ├── lk-wordmark.svg
    │   └── opengraph-image-bg.png
    ├── renovate.json
    ├── styles
    │   └── globals.css
    └── tsconfig.json

</span></span></code></div></div></pre>

---

# ⚙️ Prerequisites

Before starting, make sure you have:

* **Python 3.10+**
* **Node.js 18+**
* **Git**
* **pip & npm**
* A **LiveKit Cloud account**
* API keys for:
  * Google Gemini
  * Deepgram
  * Murf AI

---

# 🧩 Step-by-Step Setup Guide

---

## 1️⃣ Clone the Repository

<pre class="overflow-visible! px-0!" data-start="1637" data-end="1723"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>git </span><span>clone</span><span> https://github.com/JatinKevlani/InterviewGPT.git
</span><span>cd</span><span> InterviewGPT
</span></span></code></div></div></pre>

---

## 2️⃣ Backend Setup (Python)

### Step 1: Move into backend folder

<pre class="overflow-visible! px-0!" data-start="1798" data-end="1820"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>cd</span><span> backend
</span></span></code></div></div></pre>

### Step 2: Install UV (Python package manager)

<pre class="overflow-visible! px-0!" data-start="1870" data-end="1896"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>pip install uv
</span></span></code></div></div></pre>

### Step 3: Install dependencies

<pre class="overflow-visible! px-0!" data-start="1931" data-end="1950"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>uv </span><span>sync</span><span>
</span></span></code></div></div></pre>

---

### Step 4: Create `.env` file

Create a file named `.env` inside `backend/`:

<pre class="overflow-visible! px-0!" data-start="2036" data-end="2271"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-env"><span>LIVEKIT_URL=ws://127.0.0.1:7880
LIVEKIT_API_KEY=your_livekit_api_key
LIVEKIT_API_SECRET=your_livekit_api_secret

GOOGLE_API_KEY=your_google_gemini_api_key
DEEPGRAM_API_KEY=your_deepgram_api_key
MURF_API_KEY=your_murf_api_key
</span></code></div></div></pre>

> ⚠️ Never commit `.env` to GitHub.

---

### Step 5: Run the backend server

<pre class="overflow-visible! px-0!" data-start="2351" data-end="2382"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>uv run python src/agent.py dev
</span></span></code></div></div></pre>

If everything is correct, your AI agent will start and connect to LiveKit.

---

## 3️⃣ Frontend Setup (Next.js)

### Step 1: Go to frontend folder

<pre class="overflow-visible! px-0!" data-start="2533" data-end="2559"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>cd</span><span> ../frontend
</span></span></code></div></div></pre>

### Step 2: Install PNPM (recommended)

<pre class="overflow-visible! px-0!" data-start="2600" data-end="2631"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm install -g pnpm
</span></span></code></div></div></pre>

### Step 3: Install dependencies

<pre class="overflow-visible! px-0!" data-start="2666" data-end="2690"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>pnpm install
</span></span></code></div></div></pre>

---

### Step 4: Create `.env.local`

<pre class="overflow-visible! px-0!" data-start="2730" data-end="2977"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-env"><span># LiveKit connection
NEXT_PUBLIC_LIVEKIT_URL=wss://<your-livekit-project>.livekit.cloud

# Backend (optional for future APIs)
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000

# Internal configs
NEXT_PUBLIC_APP_CONFIG_ENDPOINT=
SANDBOX_ID=
</span></code></div></div></pre>

---

### Step 5: Run the frontend

<pre class="overflow-visible! px-0!" data-start="3014" data-end="3034"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>pnpm dev
</span></span></code></div></div></pre>

App will be available at:

<pre class="overflow-visible! px-0!" data-start="3063" data-end="3092"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>http:</span><span>//localhost:3000</span><span>
</span></span></code></div></div></pre>

---

## 🎯 How the App Works

1. User opens the web app
2. Connects microphone & camera
3. Selects:
   * Role (e.g. Frontend Developer)
   * Experience level
   * Interview type
4. AI interviewer starts asking questions
5. Responses are evaluated in real-time
6. Feedback is generated at the end

---

## 🔐 Environment Variables Summary

### Backend

<pre class="overflow-visible! px-0!" data-start="3445" data-end="3553"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-env"><span>LIVEKIT_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
GOOGLE_API_KEY=
DEEPGRAM_API_KEY=
MURF_API_KEY=
</span></code></div></div></pre>

### Frontend

<pre class="overflow-visible! px-0!" data-start="3568" data-end="3640"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-env"><span>NEXT_PUBLIC_LIVEKIT_URL=
NEXT_PUBLIC_BACKEND_URL=
SANDBOX_ID=
</span></code></div></div></pre>

---

## 🧠 Future Enhancements

* Resume upload & analysis
* Interview scoring dashboard
* Interview recording & playback
* Multi-language support
* User authentication & profiles
