# Next.js Starter

📦 A versatile Next.js starter template with TypeScript, ESLint, Prettier, and Husky. Preconfigured for seamless setup with essential tools.

## Features

- 🚀 **Next.js** with App Router
  - [v16](https://github.com/hanskym/nextjs-starter)
  - [v15](https://github.com/hanskym/nextjs-starter/tree/v15)
  - [v14](https://github.com/hanskym/nextjs-starter/tree/v14)
- ⚛️ **React** 18
- 🟦 **TypeScript**: Adds type safety to the code
- ✔️ **ESLint**: Configured for code quality checks
- 💅 **Prettier**: Code formatting and [sorting imports](https://github.com/IanVS/prettier-plugin-sort-imports)
- ✂️ **Knip**: Detects unused files, dependencies, and exports
- 🧩 **Zod**: Type-safe schema validation
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

- [Node.js](https://nodejs.org) (version 24 or later)
- [Bun](https://bun.sh) (optional)

> **Note:** This project uses Bun as the default package manager.  
> If you are using npm, Yarn, or pnpm, you can still proceed, but make sure to adjust all package commands accordingly, including Husky commit hooks.

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
