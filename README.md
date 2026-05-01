# RobinHub

A lightweight, modern Windows desktop AI assistant with a bubble-shaped interface, multi-provider support, and a full suite of power-user features.

![Platform](https://img.shields.io/badge/Platform-Windows%2010%2F11-blue)
![.NET](https://img.shields.io/badge/.NET-8.0-purple)

---

## What is RobinHub?

RobinHub is a Windows desktop app that puts AI at your fingertips via a sleek, bubble-shaped interface that lives in your system tray. Switch between five AI providers, attach files, fetch URLs, chain prompt templates with live input, and save every response — all without leaving your workflow.

---

## Features

### Interface & Window

- **Bubble Design** — Rounded, frameless window with drop shadow and glass morphism effect
- **Three Window Sizes** — Cycle between Minimal, Compact (default), and Extended with `Ctrl+1/2/3` or a button
- **Draggable** — Grab the header and place the window anywhere
- **Stay on Top** — Pin above all other windows (`Ctrl+T`)
- **Window Memory** — Remembers position and size between launches
- **Dark & Light Themes** — Switch themes live; preference is saved
- **Sound Notification** — Optional pop sound when a response completes

### AI Providers

| Provider | Notes |
|---|---|
| **OpenRouter** | 100+ models, credits display and refresh |
| **OpenAI** | GPT-4, GPT-4o, o1-preview and more |
| **Anthropic (Claude)** | Claude 3.5 Sonnet, Haiku, and variants |
| **Google Gemini** | Gemini 1.5 Pro, Flash, and more |
| **Ollama / Custom** | Local models (Llama, Mistral, etc.) via configurable endpoint |

- Enable or disable providers individually
- API keys encrypted with Windows DPAPI
- Dynamic model list fetched from each provider's API
- Model list caching to reduce API calls
- API key validation before saving
- Credits display for OpenRouter and OpenAI

### Model Selection

- Browse all models available for the active provider
- Filter to show favorites only
- Star any model to mark as favorite
- Last-used model remembered and pre-selected
- Media capability indicators — 🖼️ image, 🎬 video — shown per model

### Chat & Context

- **Conversation continuity** — Keep the last N messages as context (0 to unlimited)
- **Context slider** — Adjust depth from the main UI without opening settings
- **New Session** — One click to clear history and start fresh
- **Session persistence** — Sessions saved to disk with provider, model, and message metadata
- **Mid-conversation provider switch** — Automatically starts a new session

### Input

- **Text input** — Type directly or paste
- **Drag & drop files** — Drop multiple files; each shown with a remove button
- **Drag & drop text** — Drop selected text from any app
- **URL fetching** — Paste a URL to pull page content as input
- **Two-part prompt system** — A prompt template (from a file) combined with your live input
- **`Ctrl+Enter`** — Send without reaching for the mouse

### Prompt Templates (Skills)

- Point RobinHub at any folder of `.txt`, `.md`, or `.prompt` files
- Select a template from the dropdown; it becomes Part 1 of the prompt
- Refresh the list without restarting
- System prompt file for persistent AI behavior across all requests

Example template folder:
```
prompts/
  ├── summarize.txt      → "Summarize the following:"
  ├── translate.txt      → "Translate to French:"
  ├── code-review.txt    → "Review this code for bugs:"
  └── explain.txt        → "Explain in simple terms:"
```

### Output & History

- **Result panel** — Live output display, toggleable with `Ctrl+R`
- **Markdown rendering** — Full markdown → HTML via Markdig; toggle to plain text
- **History sidebar** — Browse all saved responses with timestamps and model info
- **Auto-save** — Responses saved to a configurable directory automatically
- **File naming patterns** — Variables: `{timestamp}`, `{model}`, `{num}`
- **Subfolder patterns** — Organize by date, model, or session
- **Session folder reuse** — All responses from one session land in one folder
- **Save inputs** — Optionally archive prompts alongside responses
- **Save attachments** — Optionally copy dropped files into the response folder
- **Delete from history** — Remove individual entries
- **Detachable result window** — Drag the output panel independently

### Image & Video Generation

- Image and video output for models that support it (via OpenRouter)
- Toggle image/video generation per request with dedicated buttons
- Model capability icons shown in the model selector

### Security

- **DPAPI encryption** — All API keys encrypted with Windows Data Protection API
- **Master password** — Optional additional encryption layer; prompted on each launch if enabled
- **Strong password enforcement** — 12+ characters, mixed case, digit, and symbol required
- **Change master password** — Supported without re-entering all API keys

### System Integration

- **System tray** — Minimize to tray; left-click to restore; right-click for menu (Show, Settings, Exit)
- **Windows startup** — Optional auto-launch on login
- **Global hotkey** — Customizable shortcut (e.g., `Ctrl+Shift+Space`) to summon the window from anywhere
- **Single instance** — Mutex prevents duplicate processes
- **Taskbar presence** — Shows in taskbar even with frameless window

### Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl+1` | Minimal window |
| `Ctrl+2` | Compact window (default) |
| `Ctrl+3` | Extended window |
| `Ctrl+Enter` | Send prompt |
| `Ctrl+T` | Toggle stay on top |
| `Ctrl+R` | Toggle result panel |
| *Custom* | Global hotkey (configurable in settings) |

### Settings

- **Window** — Size, stay-on-top, minimize to tray, startup, position memory
- **Appearance** — Theme, sound notification
- **Output** — Response directory, file naming pattern, subfolder pattern, auto-save, save inputs, save attachments
- **Providers** — Enable/disable, API keys, base URLs, key validation, credits
- **Security** — Master password enable/disable/change
- **Hotkey** — Global shortcut key combination

### Logging & Diagnostics

- Rotating daily log files at `%APPDATA%\RobinHub\logs\log_YYYYMMDD.txt`
- Errors, warnings, and network failures logged with context
- Response duration and token usage tracked per request
- User-friendly error messages with status codes

---

## Configure
1. Click ⚙️ to open Settings
2. Enable your preferred AI providers
3. Paste your API keys
4. Set an output directory for saved responses

---

## Configuration

```
%APPDATA%\RobinHub\settings.json   ← all settings
%APPDATA%\RobinHub\keys.dat        ← encrypted API keys
%APPDATA%\RobinHub\logs\           ← daily log files
```

### File Naming Variables
| Variable | Expands To |
|---|---|
| `{timestamp}` | `yyyyMMdd_HHmmss` |
| `{model}` | Model name (sanitized) |
| `{num}` | Sequential number |

Example: `{timestamp}_{model}` → `20240115_143022_gpt-4o.md`

---

## API Keys

| Provider | Where to get a key |
|---|---|
| OpenRouter | https://openrouter.ai/keys |
| OpenAI | https://platform.openai.com/api-keys |
| Anthropic | https://console.anthropic.com/settings/keys |
| Google | https://aistudio.google.com/app/apikey |
| Ollama | No key needed (local) |


## Acknowledgments

- [CommunityToolkit.Mvvm](https://github.com/CommunityToolkit/dotnet)
- [Hardcodet.NotifyIcon.Wpf](https://github.com/hardcodet/wpf-notifyicon)
- [Markdig](https://github.com/xoofx/markdig)
