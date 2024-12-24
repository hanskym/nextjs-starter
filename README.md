# Next.js Starter

📦 A minimal Next.js starter template, packed with TypeScript, ESLint, Prettier, and Husky. Configured for quick setup with the necessary tools.

## Features

- 🚀 **Next.js** with App Router
  - [v15](https://github.com/hanskym/nextjs-starter/tree/v15)
  - [v14](https://github.com/hanskym/nextjs-starter/tree/v14)
- ⚛️ **React** 18
- 🟦 **TypeScript**: Adds type safety to the code
- ✔️ **ESLint**: Configured for code quality checks
- 💅 **Prettier**: Code formatting and [sorting imports](https://github.com/IanVS/prettier-plugin-sort-imports)
- 🧩 **Zod**: Type-safe schema validation
- 🐶 **Husky**: Manages Git hooks that run automatically during commits and pushes
- 🔄 **Lint Staged**: Automatically run code formatting and linters on pre-committed files
- 📝 **Commitlint**: Enforces [conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/)
- ✍️ **Commitizen**: Simplifies the process of writing consistent commit messages
- 🔍 **Next.js Metadata**: Preconfigured `metadata`, `robots`, `manifest`, and `sitemap` for SEO
- 📊 **Bundle Analyzer**: Analyze the size of your Next.js build
- 📁 **Absolute Import and Path Alias**: Import components using the `@/` prefix
- 💻 **VSCode**: Includes settings and recommended extensions

## Extend Your Next.js Project

Customize and expand your Next.js project by integrating these libraries and tools, designed to meet specific project requirements such as styling, testing, state management, authentication, and more.

- 🎨 **Recommended CSS Frameworks**
  - [Tailwind CSS](https://tailwindcss.com)
  - [shadcn/ui](https://ui.shadcn.com)
  - [Chakra UI](https://www.chakra-ui.com)
  - [Material UI (MUI)](https://mui.com)
  - [Mantine](https://mantine.dev)
  - [Panda CSS](https://panda-css.com)
  - [Ant Design](https://ant.design)
- 🧪 **Unit Testing**
  - [Jest](https://jestjs.io)
  - [Cypress](https://www.cypress.io)
  - [Playwright](https://playwright.dev)
  - [Vitest](https://vitest.dev)
- 🔃 **Data Fetching**
  - [TanStack Query](https://tanstack.com/query/latest)
  - [SWR](https://swr.vercel.app)
  - [Axios](https://axios-http.com)
- 📑 **Form Libraries**
  - [react-hook-form](https://react-hook-form.com)
  - [Formik](https://formik.org/)
  - [Redux Form](https://redux-form.com)
  - [React Final Form](https://final-form.org/react)
- ⚙️ **State Management**
  - [Zustand](https://zustand.docs.pmnd.rs)
  - [Jotai](https://jotai.org)
  - [Valtio](https://valtio.dev)
  - [Recoil](https://recoiljs.org)
  - [Redux](https://redux.js.org)
  - [Rematch](https://rematchjs.org)
- 🗄️ **Database Setup**
  - [Prisma](https://www.prisma.io)
  - [Drizzle](https://orm.drizzle.team)
- 🔐 **Authentication Libraries**
  - [Auth.js/NextAuth](https://authjs.dev)
  - [Lucia](https://lucia-auth.com)
  - [BetterAuth](https://www.better-auth.com)
- 🌍 **Internationalization (i18n)**
  - [Paraglide](https://inlang.com/m/osslbuzt/paraglide-next-i18n)
  - [Lingui](https://lingui.dev)
  - [Tolgee](https://tolgee.io/apps-integrations/next)
  - [next-intl](https://next-intl.dev)

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org) (version 18 or later)
- [Bun](https://bun.sh)

> **Note:** If using npm, Yarn, or pnpm, adjust the package commands accordingly, including Husky commit hooks.

## Getting Started

### 1. Start a New Project

You can start a new project using this repository as a template in three ways:

1. Use This Repository as Template

   ![use-this-template-button](https://i.imgur.com/XO4Wntx.png)

2. Using `create-next-app`

   ```bash
   npx create-next-app -e https://github.com/hanskym/nextjs-starter my-project-name --use-bun # npm | pnpm | yarn
   ```

3. Using Git Clone

   ```bash
   git clone https://github.com/hanskym/nextjs-starter my-project-name
   ```

### 2. Install Dependencies

```bash
bun install
```

### 3. Prepare Husky

```bash
bun prepare
```

### 4. Run the Development Server

```bash
bun dev
```

Open http://localhost:3000 in your browser to view your Next.js application. You can start editing the page by modifying `src/app/page.tsx`, and the changes will update in real time.
