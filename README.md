# Next.js Starter

📦 A minimal Next.js starter template, packed with TypeScript, ESLint, Prettier, and Husky. Configured for quick setup with the necessary tools.

## Features

- 🚀 **Next.js** 14 with App Router
- ⚛️ **React** 18
- 🟦 **TypeScript**: Adds type safety to the code
- ✔️ **ESLint**: Configured for code quality checks
- 💅 **Prettier**: Code formatting and sorting imports
- 🐶 **Husky**: Manages Git hooks that run automatically during commits and pushes
- 🔄 **Lint Staged**: Automatically run code formatting and linters on pre-committed files
- 📝 **Commitlint**: Enforces [conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/)
- ✍️ **Commitizen**: Simplifies the process of writing consistent commit messages
- 🔍 **Next.js Metadata**: Preconfigured `metadata`, `robots`, `manifest`, and `sitemap` for SEO
- 📊 **Bundle Analyzer**: Analyze the size of your Next.js build
- 📁 **Absolute Import and Path Alias**: Import components using the `@/` prefix
- 💻 **VSCode**: Includes settings and recommended extensions

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
