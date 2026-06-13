# SpellMaster Pro

A lightweight spelling practice application built for children. No frameworks, no dependencies — just a single HTML file.

[![HTML](https://img.shields.io/badge/HTML-100%25-orange)]()
[![CSS](https://img.shields.io/badge/CSS-100%25-blue)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)]()
[![License](https://img.shields.io/badge/License-Proprietary-lightgrey)]()

## Overview

SpellMaster Pro helps children learn to spell through interactive listening exercises, quizzes, and games. Supports Swahili translations for bilingual learners.

## Features

- **8 Game Modes** — Listen, Sentence Completion, Fill in the Blanks, Word Matching, Speed Round, Quiz, Flashcards, and Pronunciation Practice
- **120+ Words** across 7 categories with difficulty levels
- **Swahili Translations** for every word
- **Parent Dashboard** — track progress, accuracy, and practice time
- **Trophy System** — 15 achievements to unlock
- **Dark Mode**
- **Responsive Design** — works on desktop and mobile
- **Offline Support** — word database cached locally after first load
- **License Key System** — configurable expiration for distribution control

## Getting Started

### Option 1: Run Locally

1. Clone the repository
   ```bash
   git clone https://github.com/galaxymushi-lang/spellmaster-pro.git
   ```
2. Open `index.html` in any modern browser
3. Enter a valid license key when prompted

### Option 2: Download

1. Go to the [Releases](https://github.com/galaxymushi-lang/spellmaster-pro/releases) page
2. Download the latest ZIP
3. Extract and open `index.html`

## Usage

1. Launch `index.html` in your browser
2. Enter your license key (provided by your administrator)
3. Enter your name and select an avatar
4. Choose a game mode and start practicing

## Project Structure

```
spellmaster-pro/
├── index.html    # Complete application (HTML + CSS + JS)
└── README.md
```

## Technical Details

- **No build step** — single-file application
- **No external dependencies** — pure vanilla JavaScript
- **Web Audio API** for sound effects (no audio files)
- **Speech Synthesis API** for word pronunciation
- **Web Speech API** for pronunciation validation
- **localStorage** for data persistence
- **Datamuse API** for online word fetching (optional)

## Browser Support

| Browser | Status |
|---------|--------|
| Chrome | Supported |
| Firefox | Supported |
| Safari | Supported |
| Edge | Supported |

## License

Proprietary software. Unauthorized distribution is prohibited.

## Author

**Galaxy Mushi** — [GitHub](https://github.com/galaxymushi-lang)
