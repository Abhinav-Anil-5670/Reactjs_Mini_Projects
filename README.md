# ⚛️ React.js Mini Projects Collection

[![React 19](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x%20%2F%208.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Recharts](https://img.shields.io/badge/Recharts-v3-22b5bf)](https://recharts.org/)
[![Projects](https://img.shields.io/badge/Total_Projects-17-success)](#-all-17-projects-showcase)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A curated collection of **17 modular React mini-projects** built from the ground up using **React 19** and **Vite**. This repository covers core frontend fundamentals, intermediate UI patterns, custom hooks, algorithmic game logic, asynchronous REST API integrations, and full multi-page applications with global state and charts.

---

## 📑 Table of Contents

- [Overview & Learning Path](#-overview--learning-path)
- [Quick Project Matrix](#-quick-project-matrix)
- [All 17 Projects Showcase](#-all-17-projects-showcase)
  - [01. Stopwatch (`useRef`)](#01-stopwatch-useref)
  - [02. Crypto Tracker](#02-crypto-tracker)
  - [03. Multi & Single Accordion](#03-multi--single-accordion)
  - [04. Random Color Generator](#04-random-color-generator)
  - [05. Interactive Star Rating](#05-interactive-star-rating)
  - [06. Image Slider / Carousel](#06-image-slider--carousel)
  - [07. Load More Products Grid](#07-load-more-products-grid)
  - [08. Light / Dark Mode Toggle](#08-light--dark-mode-toggle)
  - [09. Custom Scroll Progress Indicator](#09-custom-scroll-progress-indicator)
  - [10. QR Code Generator](#10-qr-code-generator)
  - [11. Reusable Tabs Component](#11-reusable-tabs-component)
  - [12. Custom Modal Pop-Up](#12-custom-modal-pop-up)
  - [13. GitHub Profile Finder](#13-github-profile-finder)
  - [14. Search Auto-Complete & Filter](#14-search-auto-complete--filter)
  - [15. Tic-Tac-Toe Game](#15-tic-tac-toe-game)
  - [16. Smooth Scroll to Section & Ends](#16-smooth-scroll-to-section--ends)
  - [17. Food Recipe & Favorites App](#17-food-recipe--favorites-app)
- [Tech Stack & Tools](#-tech-stack--tools)
- [Getting Started & Installation](#-getting-started--installation)
- [Hooks & Concepts Mastered](#-hooks--concepts-mastered)

---

## 🎯 Overview & Learning Path

Each project is self-contained with its own `package.json`, dependencies, and Vite configuration, allowing you to run, explore, and modify them independently.

```text
├── 1. React Fundamentals & State Control      (Projects 1, 3, 4, 5)
├── 2. UI Patterns & Component Architecture    (Projects 6, 9, 10, 11, 12, 16)
├── 3. Custom Hooks & Browser Storage          (Projects 8, 13)
├── 4. Async Data Fetching & External APIs     (Projects 2, 6, 7, 13, 14, 17)
├── 5. Game Logic & State Arrays               (Project 15)
└── 6. Production SPA & Global State Routing   (Projects 2, 17)
```

---

## 📊 Quick Project Matrix

| # | Project Name | Directory | Primary Concepts / Hooks | Key Libraries & APIs |
|---|--------------|-----------|--------------------------|----------------------|
| **01** | **Stopwatch** | [`1_StopWatch_useRef`](./1_StopWatch_useRef) | `useRef`, `useState`, `setInterval`, non-rendering state | Tailwind CSS v4 |
| **02** | **Crypto Tracker** | [`2_crypto_tracker`](./2_crypto_tracker) | React Router v7, polling intervals, sorting & filtering | CoinGecko API, Recharts |
| **03** | **Accordion** | [`3_Accordion`](./3_Accordion) | Multi-select vs single-select logic, array state | Vanilla CSS |
| **04** | **Random Color Generator** | [`4_random_color`](./4_random_color) | HEX & RGB generation, dynamic inline styling | Vanilla CSS |
| **05** | **Star Rating** | [`5_star_rating`](./5_star_rating) | Dual state (`rating` vs `hover`), props defaults | `react-icons` |
| **06** | **Image Slider** | [`6_image_slider`](./6_image_slider) | Circular navigation, dot indicators, async fetch | Picsum Photos API |
| **07** | **Load More Products** | [`7_load_more`](./7_load_more) | Pagination (`skip`/`limit`), appending state, disable state | DummyJSON Products API |
| **08** | **Light / Dark Mode** | [`8_light_dark_mode`](./8_light_dark_mode) | Custom Hook (`useTheme`), `localStorage`, DOM classes | Vanilla CSS Themes |
| **09** | **Custom Scroll Indicator** | [`9_custom_scroll_indicator`](./9_custom_scroll_indicator) | Window scroll listeners, DOM metrics calculation, cleanup | Vanilla CSS |
| **10** | **QR Code Generator** | [`10_qr_code_generator`](./10_qr_code_generator) | Live input vs on-click generation modes | `react-qr-code` |
| **11** | **Interactive Tabs** | [`11_tabs`](./11_tabs) | Component composition, dynamic props data, active tab index | Vanilla CSS |
| **12** | **Modal Pop-Up** | [`12_modal_pop_up`](./12_modal_pop_up) | Modal overlay, callback triggers, conditional rendering | Vanilla CSS |
| **13** | **GitHub Profile Finder** | [`13_github_profile`](./13_github_profile) | Custom Hook (`useFetch`), 404 handling, async profile card | GitHub REST API |
| **14** | **Search Auto-Complete** | [`14_Search_Auto_Complete`](./14_Search_Auto_Complete) | Real-time case-insensitive string filtering, loading states | DummyJSON Users API |
| **15** | **Tic-Tac-Toe** | [`15_tic_tac_toe`](./15_tic_tac_toe) | 8-line winner algorithm, immutable board state, turn alternation | CSS Grid |
| **16** | **Scroll to Section** | [`16_scroll`](./16_scroll) | `useRef`, `scrollIntoView({ behavior: 'smooth' })`, window scroll | Vanilla CSS |
| **17** | **Food Recipe App** | [`17_food_recipe_app`](./17_food_recipe_app) | React Context API, React Router v7, global favorites bookmarking | Forkify API, Tailwind CSS v4 |

---

## 🚀 All 17 Projects Showcase

### 01. Stopwatch (`useRef`)
> **Folder**: [`1_StopWatch_useRef`](./1_StopWatch_useRef)  
> **Key Focus**: Distinguishing `useState` vs `useRef` for interval IDs.

- **Highlights**:
  - Leverages `useRef` to store the timer's interval ID without triggering unnecessary component re-renders.
  - Implements defensive checks to prevent multiple simultaneous intervals from firing if "Start" is clicked repeatedly.
  - Controls Start, Stop (`clearInterval`), and Clear/Reset operations.
  - Styled with a sleek dark-mode UI using **Tailwind CSS v4** (`@tailwindcss/vite`).

```bash
cd 1_StopWatch_useRef
npm install
npm run dev
```

---

### 02. Crypto Tracker
> **Folder**: [`2_crypto_tracker`](./2_crypto_tracker)  
> **Key Focus**: Multi-route SPA, live polling, financial data visualization, and search/sorting.

- **Highlights**:
  - Live cryptocurrency price monitoring with automated 3-second polling intervals via the **CoinGecko API**.
  - Search filter by coin name and ticker symbol.
  - Dynamic multi-field sorting by market cap rank, price, and 24-hour price change percentage.
  - Grid and List view layout toggle.
  - Detailed `/coin/:id` page featuring an interactive **Recharts** 7-day historical price chart, 24h high/low stats, and circulating supply metrics.
  - Formatter utilities for clean USD currency and market cap representations.

```bash
cd 2_crypto_tracker
npm install
npm run dev
```

---

### 03. Multi & Single Accordion
> **Folder**: [`3_Accordion`](./3_Accordion)  
> **Key Focus**: Array state manipulation, mutual exclusion vs multi-expansion modes.

- **Highlights**:
  - Supports two distinct modes: **Single-item accordion** (collapses previously open item when opening a new one) and **Multi-selection mode** (allows multiple items to stay open simultaneously).
  - Clean array filtering and spreading logic for toggling items in state.
  - Mode toggle button that gracefully resets state between modes.

```bash
cd 3_Accordion
npm install
npm run dev
```

---

### 04. Random Color Generator
> **Folder**: [`4_random_color`](./4_random_color)  
> **Key Focus**: Algorithmic color generation, state modes, and inline styling.

- **Highlights**:
  - Dynamically generates random **HEX** colors (`#RRGGBB` using base-16 hex values) or **RGB** colors (`rgb(r, g, b)` between 0–255).
  - Mode switcher allowing users to toggle between HEX and RGB color formats.
  - Instantly updates the full screen background color and displays the generated color code.

```bash
cd 4_random_color
npm install
npm run dev
```

---

### 05. Interactive Star Rating
> **Folder**: [`5_star_rating`](./5_star_rating)  
> **Key Focus**: Hover preview vs committed rating coordination, array mapping with props.

- **Highlights**:
  - Configurable star count via the `noStars` prop (defaults to 5).
  - Coordinated dual-state architecture: tracks current `rating` alongside transient `hover` index.
  - Interactive mouse events (`onMouseEnter`, `onMouseLeave`, `onClick`) with instant visual feedback.
  - Includes a clear/reset rating action.
  - Icons rendered via `react-icons/fa`.

```bash
cd 5_star_rating
npm install
npm run dev
```

---

### 06. Image Slider / Carousel
> **Folder**: [`6_image_slider`](./6_image_slider)  
> **Key Focus**: Asynchronous data loading, boundary wrapping, and carousel navigation.

- **Highlights**:
  - Fetches high-resolution images dynamically from the **Picsum Photos API**.
  - Circular navigation: wraps smoothly from the last image back to the first, and vice versa.
  - Interactive bottom indicator dots for direct jump navigation to any slide.
  - Responsive card container with fixed image bounds to prevent layout shifts.

```bash
cd 6_image_slider
npm install
npm run dev
```

---

### 07. Load More Products Grid
> **Folder**: [`7_load_more`](./7_load_more)  
> **Key Focus**: Batch pagination (`skip` & `limit`), incremental state merging, threshold disabling.

- **Highlights**:
  - Fetches e-commerce products incrementally in batches of 10 from **DummyJSON Products API**.
  - Seamlessly concatenates new batches into the existing state array (`[...product, ...items]`).
  - Automatically disables the "Load More" trigger once the 100-item inventory limit is reached with clear UI feedback ("No More Products").
  - Responsive CSS Grid layout with product category tags and hover states.

```bash
cd 7_load_more
npm install
npm run dev
```

---

### 08. Light / Dark Mode Toggle
> **Folder**: [`8_light_dark_mode`](./8_light_dark_mode)  
> **Key Focus**: Custom hooks, `localStorage` synchronization, and DOM theme attributes.

- **Highlights**:
  - Custom `useTheme()` hook managing theme state and synchronizing with browser `localStorage`.
  - Lazy state initializer reading from storage on initial mount to avoid theme flashing.
  - Toggles global `.dark-mode` class on `document.body` for smooth system-wide CSS variable transitions.

```bash
cd 8_light_dark_mode
npm install
npm run dev
```

---

### 09. Custom Scroll Progress Indicator
> **Folder**: [`9_custom_scroll_indicator`](./9_custom_scroll_indicator)  
> **Key Focus**: DOM scroll metrics, window event listeners, and effect cleanup.

- **Highlights**:
  - Calculates real-time scroll progress percentage using:
    $$\text{Progress} = \left(\frac{\text{scrollTop}}{\text{scrollHeight} - \text{clientHeight}}\right) \times 100$$
  - Pinned fixed reading progress bar at the very top of the viewport.
  - Properly unbinds event listeners in the `useEffect` cleanup return function to prevent memory leaks.

```bash
cd 9_custom_scroll_indicator
npm install
npm run dev
```

---

### 10. QR Code Generator
> **Folder**: [`10_qr_code_generator`](./10_qr_code_generator)  
> **Key Focus**: SVG QR code generation, live vs deferred state workflows.

- **Highlights**:
  - Integrates `react-qr-code` to generate crisp, scalable SVG QR codes.
  - Demonstrates two distinct input patterns:
    1. **Live Instant Mode**: Generates and redraws QR codes in real-time as the user types.
    2. **On-Demand Mode**: Captures input in a buffer and generates the QR code only when the user clicks "Generate".
  - Graceful empty state placeholders when inputs are blank.

```bash
cd 10_qr_code_generator
npm install
npm run dev
```

---

### 11. Reusable Tabs Component
> **Folder**: [`11_tabs`](./11_tabs)  
> **Key Focus**: Reusable UI component design, props-driven tab content, active indicators.

- **Highlights**:
  - Modular `<Tabs />` component accepting an array of tab objects (`{ label, content }`).
  - Active tab highlighting with smooth state transitions.
  - Easily scalable to support any number of tabs or complex nested component bodies.

```bash
cd 11_tabs
npm install
npm run dev
```

---

### 12. Custom Modal Pop-Up
> **Folder**: [`12_modal_pop_up`](./12_modal_pop_up)  
> **Key Focus**: Portal/overlay styling, backdrop dismissal, parent-child event callbacks.

- **Highlights**:
  - Clean modal dialog architecture with semi-transparent backdrop overlay.
  - Closes on explicit close button click or callback triggers.
  - Modern dark-themed container styling with clean typography.

```bash
cd 12_modal_pop_up
npm install
npm run dev
```

---

### 13. GitHub Profile Finder
> **Folder**: [`13_github_profile`](./13_github_profile)  
> **Key Focus**: Custom data-fetching hook, HTTP status handling, user card display.

- **Highlights**:
  - Abstracted `useFetch()` hook returning `[data, getData, notFound]` tuple.
  - Queries the public **GitHub REST API** (`https://api.github.com/users/{username}`).
  - Gracefully handles non-existent usernames with an explicit "User Not Found" error indicator.
  - Displays user avatar, username handle, bio, follower and following counts, and a direct link to the user's GitHub profile.

```bash
cd 13_github_profile
npm install
npm run dev
```

---

### 14. Search Auto-Complete & Filter
> **Folder**: [`14_Search_Auto_Complete`](./14_Search_Auto_Complete)  
> **Key Focus**: Real-time client-side array filtering, controlled input binding.

- **Highlights**:
  - Loads an initial directory of users from **DummyJSON Users API**.
  - Live filtering on every keystroke with case-insensitive matching (`.toLowerCase().includes()`).
  - Handles zero-match queries with a "No Results" fallback message.
  - Clean directory card styling.

```bash
cd 14_Search_Auto_Complete
npm install
npm run dev
```

---

### 15. Tic-Tac-Toe Game
> **Folder**: [`15_tic_tac_toe`](./15_tic_tac_toe)  
> **Key Focus**: Game loop logic, immutable array updates, winning combination matrix.

- **Highlights**:
  - Comprehensive win detection algorithm checking all **8 possible winning combinations** (3 rows, 3 columns, 2 diagonals):
    ```javascript
    const winningLines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    ```
  - Alternating player turns with clear visual state ("X" vs "Y").
  - Guards against clicking already-filled cells or playing after a winner is determined.
  - One-click restart button resetting board state back to initial values.

```bash
cd 15_tic_tac_toe
npm install
npm run dev
```

---

### 16. Smooth Scroll to Section & Ends
> **Folder**: [`16_scroll`](./16_scroll)  
> **Key Focus**: Programmatic scrolling, DOM node references via `useRef`.

- **Highlights**:
  - Implements smooth animated scrolling using native browser APIs (`behavior: 'smooth'`).
  - Uses `useRef` to directly target a designated "Special Section" element via `element.scrollIntoView()`.
  - Global navigation buttons to jump directly to the page top (`window.scrollTo({ top: 0 })`) or bottom (`document.documentElement.scrollHeight`).
  - Sticky control panel ensuring navigation is always accessible.

```bash
cd 16_scroll
npm install
npm run dev
```

---

### 17. Food Recipe & Favorites App
> **Folder**: [`17_food_recipe_app`](./17_food_recipe_app)  
> **Key Focus**: Multi-route SPA, React Context API, recipe search & details, favorites bookmarking.

- **Highlights**:
  - Full-featured recipe application powered by the **Forkify API**.
  - **React Context API** (`GlobalContext` & `GlobalState` provider) managing global search parameters, recipe collections, and persistent favorite recipe IDs.
  - **React Router v7**:
    - `/` : Recipe catalog and search results grid.
    - `/recipe/:id` : Deep-dive recipe view with publisher info, ingredients, and instructions link.
    - `/favourite` : Dedicated page showcasing bookmarked recipes.
  - Add / remove recipe to Favorites with instant state synchronization across all views.
  - Fully responsive layout styled with **Tailwind CSS v4** (`@tailwindcss/vite`).

```bash
cd 17_food_recipe_app
npm install
npm run dev
```

---

## 🛠️ Tech Stack & Tools

- **Core Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/) with Fast HMR
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Modern Vanilla CSS3 (Grid & Flexbox)
- **Data Visualization**: [Recharts v3](https://recharts.org/)
- **Icons & Utilities**: [React Icons](https://react-icons.github.io/react-icons/), [react-qr-code](https://www.npmjs.com/package/react-qr-code)
- **Public APIs Used**:
  - [CoinGecko API](https://www.coingecko.com/en/api) — Live cryptocurrency prices & market charts
  - [Forkify API (Jonas.io)](https://forkify-api.jonas.io/) — Recipes, ingredients, and preparation steps
  - [DummyJSON API](https://dummyjson.com/) — E-commerce products and user directory
  - [Picsum Photos API](https://picsum.photos/) — High quality placeholder images
  - [GitHub REST API](https://api.github.com/) — Public user profiles & repository statistics

---

## 💻 Getting Started & Installation

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18.0.0 or higher recommended) and `npm`.

### 1. Clone the Repository
```bash
git clone https://github.com/Abhinav-Anil-5670/Reactjs_Mini_Projects.git
cd Reactjs_Mini_Projects
```

### 2. Run Any Project
Navigate into any project folder, install its dependencies, and start its development server:

```bash
# Example: Running the Crypto Tracker
cd 2_crypto_tracker
npm install
npm run dev
```

```bash
# Example: Running the Food Recipe App
cd 17_food_recipe_app
npm install
npm run dev
```

Vite will start a local server (typically at `http://localhost:5173`). Open the URL in your browser to view the application.

---

## 🧠 Hooks & Concepts Mastered

| Concept / Hook | Applied In |
|---|---|
| `useState` | Used in all 17 projects for UI and state control |
| `useRef` | `1_StopWatch_useRef` (interval tracking), `16_scroll` (DOM node target) |
| `useEffect` | `2_crypto_tracker`, `6_image_slider`, `7_load_more`, `8_light_dark_mode`, `9_custom_scroll_indicator`, `14_Search_Auto_Complete`, `17_food_recipe_app` |
| `useContext` | `17_food_recipe_app` (GlobalState for search, recipes, and favorites) |
| **Custom Hooks** | `8_light_dark_mode` (`useTheme`), `13_github_profile` (`useFetch`) |
| **Routing (`react-router`)** | `2_crypto_tracker`, `17_food_recipe_app` |
| **Data Fetching (`fetch`)** | Projects 2, 6, 7, 13, 14, 17 |
| **Event Listeners & Cleanup** | `1_StopWatch_useRef` (`clearInterval`), `2_crypto_tracker` (polling interval), `9_custom_scroll_indicator` (`removeEventListener`) |
| **Storage Synchronization** | `8_light_dark_mode` (`localStorage`) |

---

## 👤 Author

Developed by **[Abhinav Anil](https://github.com/Abhinav-Anil-5670)**  
GitHub: [@Abhinav-Anil-5670](https://github.com/Abhinav-Anil-5670)

⭐ If you found this repository helpful for learning React, feel free to give it a star!
