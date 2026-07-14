# StudyFlow Design System

StudyFlow uses a light, product-oriented visual system adapted from the Resend
DESIGN.md reference in `resend/DESIGN.md`. The reference provides discipline,
not brand assets: StudyFlow keeps its own name, content, mint accent, Vietnamese
learning context, routes, and product behavior.

## Direction

- Build a calm LMS/SaaS interface, not a generic marketing template.
- Prefer warm off-white canvas, white surfaces, black text, and deliberate mint.
- Use typography, spacing, and one-pixel borders to establish hierarchy.
- Avoid dark mode, heavy shadows, empty illustration frames, fake charts, and
  unverified performance claims.
- Keep the product legible at its rendered size. Dashboard previews must contain
  meaningful learning content rather than placeholder rectangles.

## Tokens

The active tokens live in `app/studyflow-resend.css`.

| Role            | Token                  | Value        |
| --------------- | ---------------------- | ------------ |
| Background      | `--sf-background`      | `#f7f7f2`    |
| Soft background | `--sf-background-soft` | `#f2f4ef`    |
| Surface         | `--sf-surface`         | `#ffffff`    |
| Muted surface   | `--sf-surface-muted`   | `#f8faf8`    |
| Primary text    | `--sf-text`            | `#121513`    |
| Secondary text  | `--sf-text-secondary`  | `#626963`    |
| Border          | `--sf-border`          | `#dfe4df`    |
| Strong border   | `--sf-border-strong`   | `#bbc4bc`    |
| Mint accent     | `--sf-accent`          | `#55d6a7`    |
| Strong mint     | `--sf-accent-strong`   | `#19a976`    |
| Soft mint       | `--sf-accent-soft`     | `#dcf8ec`    |
| Radius          | `--sf-radius`          | `10px`       |
| Container       | `--sf-container`       | `1320px`     |
| Transition      | `--sf-transition`      | `180ms ease` |

Spacing follows a 4px base: 4, 8, 12, 16, 24, 32, 48, 72, and 96px.

## Typography

- Use Inter for display, body, and UI text.
- Use the system monospace stack for metadata, statuses, step numbers, and
  compact product labels.
- Display headings use medium weight, responsive `clamp()` sizing, compact line
  height, and zero letter spacing.
- Body copy stays between 16 and 20px with a 1.55 to 1.72 line height.
- Do not shrink product-demo copy until it becomes decorative noise.

## Components

- Cards use a 1px border, white surface, 10px radius, and no default shadow.
- Buttons use 6px radius. Primary actions are black with white text; mint is for
  progress, active state, focus, and contextual emphasis.
- Pills are reserved for status and metadata.
- Product diagrams use real HTML and CSS with readable labels and values.
- Feature cards share equal dimensions and reveal detail in one consistent strip.
- Lesson blocks remain focused reading surfaces with a narrow mint edge marker.

## Layout

- Marketing sections cap at 1320px with responsive page gutters.
- Section spacing ranges from 64px on mobile to 112px on desktop.
- Split sections use balanced narrative and product-interface columns.
- Large desktop feature grids use four columns, tablet uses two, mobile uses one.
- Dashboard sidebars become horizontal navigation on small screens instead of
  shrinking the whole mockup.
- Learning-system nodes become a vertical timeline on small screens.

## Interaction And Accessibility

- Interaction transitions run between 150 and 250ms.
- Hover states may adjust border, surface, or move at most 2px without layout shift.
- All controls need visible `:focus-visible` treatment.
- Prefer buttons and anchors over clickable generic containers.
- Decorative icons use `aria-hidden="true"`.
- Honor `prefers-reduced-motion` globally.
- Prevent horizontal page overflow at 390, 768, 1024, 1280, and 1440px.

## Preservation Rules

- Keep all hash routes and lesson/course slugs.
- Keep existing element IDs and JavaScript hooks unless the corresponding code is
  updated in the same change.
- Keep localStorage, IndexedDB, backend payloads, API routes, authentication,
  roles, teacher approval, learning progress, quiz, reflection, Q&A, media,
  editor, and publishing behavior intact.
- Frontend copy changes must not require database migrations.
- Do not replace course data with content from a public deployment or reference.
