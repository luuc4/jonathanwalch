## Projekt-Header

- **Name:** Jonathan Walch Portfolio
- **Domain:** jonathanwalch.at
- **Typ:** Persoenliche Portfolio-Website
- **Branche/Kontext:** UI/UX Design, Hochschulprojekt (InterMedia, FH Vorarlberg)

## Projektbeschreibung

Persoenliche Portfolio-Website fuer Jonathan Walch, InterMedia-Student an der FH Vorarlberg mit Schwerpunkt UI/UX Design. Die Seite praesentiert die Person, Kompetenzen und ausgewaehlte Hochschulprojekte aus den Bereichen Interactive Design, Web Design, Game Design und Interface Design. Zielgruppe sind potenzielle Auftraggeber, Arbeitgeber und Kommilitonen.

## Tech-Stack

| Bereich | Technologie |
|---|---|
| Markup | `HTML5` |
| Styling | `CSS3` (Custom Properties, Grid, Flexbox) |
| Interaktivitaet | `JavaScript` (Vanilla, kein Framework) |
| Typografie | `Google Fonts` (Inter, Space Grotesk) |
| Hosting | `GitHub Pages` |
| Domain | Custom Domain via `CNAME` |
| Versionierung | `Git` / `GitHub` |

## Features & Besonderheiten

### Design

- Dark Theme mit Akzentfarben-Gradient (Indigo/Violett)
- Durchgaengiges Design-System mit CSS Custom Properties (Farben, Spacing, Radien, Transitions)
- Zwei Display-Schriftarten: Inter (Body) und Space Grotesk (Headlines)

### UI-Komponenten

- Custom Cursor mit Hover-Effekt (Dot + Outline, reagiert auf interaktive Elemente)
- Animierte Gradient-Orbs im Hero-Bereich mit Parallax-Effekt bei Mausbewegung
- Floating Cards mit Schwebeanimation
- Scroll-Indikator (animierte Maus-Grafik)
- Bildergalerien mit Overlay-Beschreibungen bei Hover
- Profilbild mit Graustufen-zu-Farbe-Transition bei Hover

### Navigation

- Fixierte Navbar mit Blur-Backdrop bei Scroll
- Mobile Hamburger-Menue mit animiertem Fullscreen-Overlay
- Aktive Link-Hervorhebung basierend auf Scroll-Position
- Smooth Scrolling zu Ankerpunkten

### Responsive Design

- Vollstaendig responsive Layouts (Desktop, Tablet, Mobile)
- Breakpoints bei 1024px, 768px und 480px
- Angepasste Grid-Layouts pro Viewport (Projektgalerien, Skills, About)
- Touch-Device-Erkennung (Custom Cursor wird auf Touch-Geraeten ausgeblendet)

### Animationen

- Scroll-basierte Einblend-Animationen via Intersection Observer
- Seiten-Fade-In beim Laden
- Hover-Transitions auf Cards, Links und Buttons

### SEO & Meta

- Open Graph Meta-Tags fuer Social Media Sharing
- Semantisches HTML mit `section`, `article`, `nav`, `footer`
- Meta-Descriptions pro Seite
- SVG Favicon

### Datenschutz & Rechtliches

- Impressum-Seite gemaess oesterreichischem E-Commerce-Gesetz
- Keine externen Tracking-Scripts oder Cookies

## Seitenstruktur

- **Startseite** (`index.html`) - Hero-Bereich mit Portraet und Intro, Ueber-mich-Sektion mit persoenlichen Details, Skills-Grid (UI Design, UX Research, Prototyping, Disziplin), Werte-Bereich mit Zitat, Kontakt-Sektion mit E-Mail und LinkedIn
- **Projekte** (`projects.html`) - Vier Projekt-Case-Studies mit Beschreibung, Meta-Tags und Bildergalerien: Computational Empowerment (TouchDesigner/Arduino), Interactive City Symbols (Web Design/Shopify), Game Add-On Concept (Game Design/Print), Smart Fitness Interface (UI/UX/Figma)
- **Impressum** (`impressum.html`) - Rechtliche Angaben, Verantwortlicher, Domaininhaber, Haftungshinweise, Urheberrecht
- **Lebenslauf** - PDF-Download ueber Navigation (kein separater View)

## Entwicklung

- Versionierung mit `Git`, gehostet auf `GitHub`
- 26 Commits insgesamt, 2 Pull Requests
- 3 Mitwirkende
- Entwicklungszeitraum: Januar 2026
- Branch-basierter Workflow mit Feature-Branches und Merge via Pull Requests
- Iterative Bugfixes fuer Cross-Browser-Kompatibilitaet (Chrome-Rendering von Bildern)
- Deployment via GitHub Pages mit Custom Domain (jonathanwalch.at)

## Kurzbeschreibung

Persoenliche Portfolio-Website eines InterMedia-Studenten der FH Vorarlberg mit Fokus auf UI/UX Design. Die statische Website zeigt vier Hochschulprojekte aus den Bereichen Interactive Design, Web/Branding, Game Design und Interface Design, ergaenzt durch eine Ueber-mich-Sektion und Kontaktmoeglichkeiten. Umgesetzt als reine HTML/CSS/JS-Seite ohne Framework, gehostet auf GitHub Pages unter eigener Domain.
