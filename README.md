# Modern Performance Portfolio

A high-performance, visually stunning, and fully responsive developer portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Designed to showcase technical expertise with premium aesthetics and seamless bilingual support.

![Portfolio Preview](public/preview.png) _(Note: Add your own preview image here)_

## 🚀 Key Features

- **Bilingual Support (i18n)**: Fully integrated English and Arabic support using `next-intl`, including RTL (Right-to-Left) layout optimization.
- **Premium Bento Grid**: Dynamic skills section featuring interactive "Global Store" state management and responsive multi-device design visualizations.
- **Animated Tech Stack**: A custom-built, interactive visualization of tools and technologies using `framer-motion` and animated beams.
- **Fully Responsive**: Mobile-first design architecture ensuring a perfect experience on smartphones, tablets, and desktops.
- **Modern UI/UX**: Built with **Radix UI**, **Lucide Icons**, and custom **Glassmorphism** effects for a high-end feel.
- **Performance Optimized**: Leveraging Next.js Server Components, optimized font loading, and smooth entry animations.

## 🛠️ Tech Stack

- **Core**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: shadcn/ui (Radix UI)

## 🏁 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/takieeldeen/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Open the app:**
    Navigate to `http://localhost:3000` in your browser.

## ⚙️ Customization Guide

### 1. Updating Personal Information

All text content is managed via translation files to support multiple languages.

- **English**: Edit `messages/en.json`
- **Arabic**: Edit `messages/ar.json`

### 2. Changing the Tech Stack

The tech stack visualization icons and tooltips are defined in:

- `sections/tech-stack/tech-stack.tsx`
- Update the `navItems` or specific technology icons using `react-icons` or `lucide-react`.

### 3. Modifying Projects

Projects are listed in the `sections/projects` component.

- Locate `sections/projects/views/main-view.tsx` to update project titles, descriptions, images, and links.

### 4. Adjusting Theme & Colors

- Primary colors and global styles are defined in `app/[locale]/globals.css`.
- Tailwind configuration (if using specialized plugins) is in `tailwind.config.ts` (or standard Tailwind 4.0 configuration).

## 📱 Responsive Support

The project is built with a **Mobile-First** approach. Key responsive features include:

- **Navbar**: Transforms into a mobile-friendly hamburger menu with a smooth overlay.
- **Bento Cards**: Automatically stack and resize based on screen dimensions.
- **Tech Beams**: Vertical stacking logic for small screens to ensure readability.

## 📄 License

This project is open-source and available under the MIT License.

---

Created with ❤️ by [Takie Eldeen](https://github.com/takieeldeen)
