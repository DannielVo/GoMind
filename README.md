# GoMind AI – Go Game with Artificial Intelligence

**GoMind AI** is a web-based Go game application built with **Next.js, TypeScript, and FastAPI**, allowing players to experience the traditional strategy board game Go against an AI-powered opponent.

The application focuses on a 9×9 Go board, where players can challenge an AI opponent powered by the **Minimax algorithm and Heuristic Evaluation**. GoMind AI aims to provide an accessible and engaging environment for learning Go, practicing strategic thinking, and exploring artificial intelligence in board games.

Players can configure their game preferences, learn the fundamental rules of Go, and interact with a responsive game board through an intuitive interface.

GoMind AI is designed with a modular frontend architecture and a Python-based backend to support future improvements in AI algorithms, game analysis, and performance optimization.

**Live Demo:** https://gomind.vercel.app/

## Key Features

The following features define the planned Version 1 (MVP) and are currently under development.

### Player vs AI

- **AI-Powered Opponent** – Play Go against an AI opponent using Minimax and Heuristic Evaluation
- **9×9 Go Board** – Experience Go on a fixed 9×9 board designed for accessible and relatively short matches
- **Player Color Selection** – Choose to play as Black or White, with the AI automatically assigned the opposite color
- **AI Difficulty Levels** – Select Easy, Medium, or Hard difficulty to adjust the AI challenge level
- **Turn-Based Gameplay** – Alternate turns between the human player and the AI opponent

### Go Rules & Game Mechanics

- **Stone Placement** – Place stones on empty intersections according to Go rules
- **Stone Capture** – Automatically remove opponent stones or groups that have no remaining liberties
- **Ko Rule** – Prevent illegal board repetitions according to the implemented Ko rule
- **Suicide Prevention** – Reject moves that leave the player's own group without liberties unless the move captures opposing stones
- **Pass Turn** – Allow players to pass their turn instead of placing a stone
- **Game Scoring** – Calculate the final score based on the implemented Go scoring rules
- **Game Completion** – End the game through two consecutive passes or resignation

### Game Controls & Tracking

- **Restart Game** – Start a new match with the current game configuration
- **Undo & Redo** – Navigate backward or forward through supported game states
- **Resign Game** – Allow players to surrender before the match ends
- **Turn Indicator** – Clearly display whether it is the player's turn or the AI's turn
- **Captured Stones** – Track the number of captured stones for each side
- **Move History** – Display the sequence of moves made during the match
- **Game Result** – Present the final outcome when the game ends
- **Confirmation Dialogs** – Prevent accidental actions such as restarting, resigning, or leaving an active game

### Game Customization

- **Game Setup** – Configure game preferences before starting a match
- **Board Appearance** – Choose between available board styles
- **Game Configuration** – Manage player color, AI difficulty, and visual preferences
- **Game Status Display** – View relevant information about the current match

### Go Learning Guide

- **Introduction to Go** – Learn the basic objectives and concepts of the game
- **Board Basics** – Understand intersections, stone placement, and turn order
- **Liberties & Captures** – Learn how liberties determine whether stones remain on the board
- **Special Rules** – Explore Ko, suicide moves, and passing
- **End Game & Scoring** – Understand how a match ends and how the winner is determined
- **Basic Strategies** – Discover introductory strategic concepts for beginners
- **Visual Illustrations** – Follow explanations supported by Go board diagrams

### Responsive Interface

- **Desktop Layout** – Display the Go board and game information panel side by side
- **Mobile Layout** – Prioritize the game board with vertically arranged controls and information
- **Board Themes** – Provide visual customization for the Go board
- **Reusable Components** – Organize the interface into modular and reusable React components
- **Responsive Design** – Support desktop, tablet, and mobile screen sizes
- **Language Support** – Provide English and Vietnamese interface options

## Application Workflow

GoMind AI is designed around a simple workflow for playing Go against an AI opponent:

1. **Visit Home Page** – Explore GoMind AI and navigate to the game setup or learning guide
2. **Learn Go Rules** – Review the fundamentals of Go through the Guide page
3. **Configure Game** – Select player color, AI difficulty, and board appearance
4. **Start Game** – Initialize a 9×9 Go match against the AI opponent
5. **Play Against AI** – Place stones, capture opponent groups, and alternate turns with the AI
6. **Manage Game** – Use available controls such as Undo, Redo, Pass, Restart, and Resign
7. **View Game Result** – Review the final score and match outcome

The initial version focuses on single-player gameplay against AI without requiring user authentication.

## Tech Stack

- **Frontend:** Next.js (App Router), React
- **Language:** TypeScript, Python
- **Styling:** Tailwind CSS
- **Backend:** FastAPI
- **AI Algorithm:** Minimax with Heuristic Evaluation
- **State Management:** React Hooks and Context API (when needed)
- **API Communication:** RESTful API using Fetch
- **Architecture:** Component-based frontend with a separate AI game backend
- **Deployment:** Vercel (Frontend)

## Project Structure

The frontend follows a modular Next.js App Router structure, separating application routes, reusable components, API communication, game logic utilities, and TypeScript definitions.

```text
GoMind/
├── public/
│   └── images/                     # Static images and board assets
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── favicon.ico
│   │   ├── globals.css              # Global styles and color palette
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # Home page (/)
│   │   ├── loading.tsx              # Global loading UI
│   │   ├── not-found.tsx            # 404 page
│   │   │
│   │   ├── guide/
│   │   │   └── page.tsx             # Go learning guide
│   │   │
│   │   ├── setup/
│   │   │   └── page.tsx             # Game configuration
│   │   │
│   │   └── game/
│   │       ├── page.tsx             # Game board
│   │
│   ├── api/                         # Backend API integration
│   │   ├── client.ts                # HTTP client configuration
│   │   └── game.api.ts              # Game API requests
│   │
│   ├── components/                  # Reusable React components
│   │   ├── common/                  # Shared UI components
│   │   ├── home/                    # Home page components
│   │   ├── guide/                   # Go guide components
│   │   ├── setup/                   # Game setup components
│   │   └── game/                    # Game board and controls
│   │
│   ├── hooks/                       # Custom React hooks
│   │
│   ├── context/                     # Shared React Context (optional)
│   │
│   ├── lib/
│   │   ├── constants/               # Application constants
│   │   └── game/                    # Pure game utility functions
│   │
│   ├── types/                       # TypeScript type definitions
│   │
│   └── utils/                       # General utility functions
│
├── .env.example
├── .gitignore
├── AGENTS.md
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

The FastAPI backend is planned as a separate service responsible for validating game moves, managing game rules, and executing AI algorithms.

## Getting Started

### Prerequisites

Make sure the following tools are installed:

- Node.js
- npm
- Git

Python and FastAPI will be required when running the backend AI service locally.

### 1. Clone the repository

```bash
git clone <repository-url>
cd GoMind
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 to access the application.

The backend setup and execution instructions will be documented when the FastAPI integration is completed.

## Future Improvements

GoMind AI is planned to evolve through additional development phases focused on AI optimization, explainability, and game analysis.

### Version 2 – Advanced AI & Game Analysis

- **Alpha-Beta Pruning** – Optimize Minimax search by eliminating unnecessary branches
- **AI Thinking Panel** – Display AI search information, including search depth, evaluated nodes, and execution time
- **Top 3 Best Moves** – Highlight the AI's highest-ranked candidate moves
- **Heuristic Heatmap** – Visualize board positions using heuristic evaluation scores
- **Algorithm Benchmarking** – Compare Minimax and Alpha-Beta Pruning in terms of execution time, evaluated nodes, and search performance
- **AI Performance Optimization** – Improve the efficiency and responsiveness of AI decision-making

### Long-Term Enhancements

- Additional board sizes and game configurations
- More advanced AI strategies and evaluation techniques
- Detailed post-game analysis
- Enhanced move history and game replay
- Expanded learning resources and interactive tutorials

These features are part of the planned roadmap and are not included in the Version 1 MVP.
