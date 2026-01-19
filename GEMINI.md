# Jonathan Walch - Personal Portfolio

## Project Overview

This is the personal portfolio website for **Jonathan Walch**, a UI/UX Designer and InterMedia Student. The site serves as a digital business card and portfolio showcase, highlighting his skills, background, and projects.

### Tech Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Hosting:** Static hosting (GitHub Pages compatible) with custom domain configuration (`CNAME`).
- **Language:** German (DE)

## Directory Structure

```text
/
├── CNAME           # Custom domain configuration (jonathanwalch.at)
├── index.html      # Main landing page (Hero, About, Skills, Contact)
├── projects.html   # Projects/Portfolio listing page
├── script.js       # Frontend logic (Navigation, Animations, Mobile Menu)
├── styles.css      # Main stylesheet
└── assets/         # (Inferred) Directory for images and downloadable files (e.g., CV)
```

## Key Files Analysis

*   **`index.html`**: The primary entry point. It contains:
    *   **Hero Section**: Introduction and "Available for projects" status.
    *   **About Section**: Personal background, education (InterMedia at FH Vorarlberg), and values.
    *   **Skills**: specific UI/UX and soft skills.
    *   **Contact**: Links to email and LinkedIn.
*   **`projects.html`**: A dedicated page for portfolio items. Currently includes a "Coming Soon" state and hidden placeholder slots for future project entries.
*   **`script.js`**: Handles user interaction:
    *   Sticky navbar on scroll.
    *   Mobile hamburger menu toggle.
    *   Smooth scrolling for anchor links.
    *   Scroll-triggered animations (fade-in/slide-up).
    *   Subtle parallax mouse movement effect on hero background.

## Development & Usage

### Running Locally
Since this is a static site, it can be viewed directly in a browser or served via a simple local server.

**Using Python:**
```bash
python3 -m http.server 8000
# Open http://localhost:8000 in your browser
```

**Using Node (http-server):**
```bash
npx http-server .
```

### Conventions
*   **HTML**: Semantic HTML5 tags are used (`nav`, `section`, `article`, `footer`).
*   **CSS**: Styling is linked via `styles.css`. No preprocessors (Sass/Less) detected in the root.
*   **JavaScript**: Vanilla JS with no external framework dependencies. Uses modern features like `IntersectionObserver` for animations.
*   **Assets**: Images and documents are referenced in an `assets/` folder (e.g., `assets/cv-jonathan-walch.pdf`).
*   **Localization**: Content is in German.

## Action Items / TODOs inferred from Code
*   **Projects Page**: The `projects.html` file has a "Coming Soon" section active and the actual grid `projects-grid` is hidden. This needs to be populated with real content when ready.
*   **Images**: Several image placeholders (`image-placeholder`) are present in `index.html` and `projects.html`. These need to be replaced with actual assets.
