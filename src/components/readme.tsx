import Image from 'next/image';

import styles from '@/styles/readme.module.css';

import githubTemplate from '@/assets/use-this-template-button.png';

export default function ReadMe() {
  return (
    <div className={styles.container}>
      <h1 id="nextjs-starter">Next.js Starter</h1>
      <p>
        📦 A minimal Next.js starter template, packed with TypeScript, ESLint, Prettier, and Husky.
        Configured for quick setup with the necessary tools.
      </p>
      <h2 id="features">Features</h2>
      <ul>
        <li>
          🚀 <strong>Next.js</strong> with App Router
          <ul>
            <li>
              <a
                href="https://github.com/hanskym/nextjs-starter"
                rel="noopener noreferrer"
                target="_blank"
              >
                v15
              </a>
            </li>
            <li>
              <a
                href="https://github.com/hanskym/nextjs-starter/tree/v14"
                rel="noopener noreferrer"
                target="_blank"
              >
                v14
              </a>
            </li>
          </ul>
        </li>
        <li>
          ⚛️ <strong>React</strong> 19
        </li>
        <li>
          🟦 <strong>TypeScript</strong>: Adds type safety to the code
        </li>
        <li>
          ✔️ <strong>ESLint</strong>: Configured for code quality checks
        </li>
        <li>
          💅 <strong>Prettier</strong>: Code formatting and{' '}
          <a
            href="https://github.com/IanVS/prettier-plugin-sort-imports"
            rel="noopener noreferrer"
            target="_blank"
          >
            sorting imports
          </a>
        </li>
        <li>
          ✂️ <strong>Knip</strong>: Detects unused files, dependencies, and exports
        </li>
        <li>
          🧩 <strong>Zod</strong>: Type-safe schema validation
        </li>
        <li>
          🐶 <strong>Husky</strong>: Manages Git hooks that run automatically during commits and
          pushes
        </li>
        <li>
          🔄 <strong>Lint Staged</strong>: Automatically run code formatting and linters on
          pre-committed files
        </li>
        <li>
          📝 <strong>Commitlint</strong>: Enforces{' '}
          <a
            href="https://www.conventionalcommits.org/en/v1.0.0/"
            rel="noopener noreferrer"
            target="_blank"
          >
            conventional commit messages
          </a>
        </li>
        <li>
          ✍️ <strong>Commitizen</strong>: Simplifies the process of writing consistent commit
          messages
        </li>
        <li>
          🔍 <strong>Next.js Metadata</strong>: Preconfigured <code>metadata</code>,{' '}
          <code>robots</code>, <code>manifest</code>, and <code>sitemap</code> for SEO
        </li>
        <li>
          💨 <strong>Turbopack</strong>: Blazing fast bundler and compiler for Next.js
        </li>
        <li>
          📊 <strong>Bundle Analyzer</strong>: Analyze the size of your Next.js build
        </li>
        <li>
          📁 <strong>Absolute Import and Path Alias</strong>: Import components using the{' '}
          <code>@/</code> prefix
        </li>
        <li>
          💻 <strong>VSCode</strong>: Includes settings and recommended extensions
        </li>
      </ul>
      <h2 id="extend-your-nextjs-project">Extend Your Next.js Project</h2>
      <p>
        Customize and expand your Next.js project by integrating these libraries and tools, designed
        to meet specific project requirements such as styling, testing, state management,
        authentication, and more.
      </p>
      <ul>
        <li>
          🎨 <strong>CSS Frameworks</strong>
          <ul>
            <li>
              <a href="https://tailwindcss.com" rel="noopener noreferrer" target="_blank">
                Tailwind CSS
              </a>
            </li>
            <li>
              <a href="https://ui.shadcn.com" rel="noopener noreferrer" target="_blank">
                shadcn/ui
              </a>
            </li>
            <li>
              <a href="https://www.chakra-ui.com" rel="noopener noreferrer" target="_blank">
                Chakra UI
              </a>
            </li>
            <li>
              <a href="https://mui.com" rel="noopener noreferrer" target="_blank">
                Material UI (MUI)
              </a>
            </li>
            <li>
              <a href="https://mantine.dev" rel="noopener noreferrer" target="_blank">
                Mantine
              </a>
            </li>
            <li>
              <a href="https://panda-css.com" rel="noopener noreferrer" target="_blank">
                Panda CSS
              </a>
            </li>
            <li>
              <a href="https://ant.design" rel="noopener noreferrer" target="_blank">
                Ant Design
              </a>
            </li>
          </ul>
        </li>
        <li>
          🧪 <strong>Unit Testing</strong>
          <ul>
            <li>
              <a href="https://jestjs.io" rel="noopener noreferrer" target="_blank">
                Jest
              </a>
            </li>
            <li>
              <a href="https://www.cypress.io" rel="noopener noreferrer" target="_blank">
                Cypress
              </a>
            </li>
            <li>
              <a href="https://playwright.dev" rel="noopener noreferrer" target="_blank">
                Playwright
              </a>
            </li>
            <li>
              <a href="https://vitest.dev" rel="noopener noreferrer" target="_blank">
                Vitest
              </a>
            </li>
          </ul>
        </li>
        <li>
          🔃 <strong>Data Fetching</strong>
          <ul>
            <li>
              <a href="https://tanstack.com/query/latest" rel="noopener noreferrer" target="_blank">
                TanStack Query
              </a>
            </li>
            <li>
              <a href="https://swr.vercel.app" rel="noopener noreferrer" target="_blank">
                SWR
              </a>
            </li>
            <li>
              <a href="https://axios-http.com" rel="noopener noreferrer" target="_blank">
                Axios
              </a>
            </li>
          </ul>
        </li>
        <li>
          📑 <strong>Form Libraries</strong>
          <ul>
            <li>
              <a href="https://react-hook-form.com" rel="noopener noreferrer" target="_blank">
                react-hook-form
              </a>
            </li>
            <li>
              <a href="https://formik.org/" rel="noopener noreferrer" target="_blank">
                Formik
              </a>
            </li>
            <li>
              <a href="https://redux-form.com" rel="noopener noreferrer" target="_blank">
                Redux Form
              </a>
            </li>
            <li>
              <a href="https://final-form.org/react" rel="noopener noreferrer" target="_blank">
                React Final Form
              </a>
            </li>
          </ul>
        </li>
        <li>
          ⚙️ <strong>State Management</strong>
          <ul>
            <li>
              <a href="https://zustand.docs.pmnd.rs" rel="noopener noreferrer" target="_blank">
                Zustand
              </a>
            </li>
            <li>
              <a href="https://jotai.org" rel="noopener noreferrer" target="_blank">
                Jotai
              </a>
            </li>
            <li>
              <a href="https://valtio.dev" rel="noopener noreferrer" target="_blank">
                Valtio
              </a>
            </li>
            <li>
              <a href="https://recoiljs.org" rel="noopener noreferrer" target="_blank">
                Recoil
              </a>
            </li>
            <li>
              <a href="https://redux.js.org" rel="noopener noreferrer" target="_blank">
                Redux
              </a>
            </li>
            <li>
              <a href="https://rematchjs.org" rel="noopener noreferrer" target="_blank">
                Rematch
              </a>
            </li>
          </ul>
        </li>
        <li>
          🗄️ <strong>Database Setup</strong>
          <ul>
            <li>
              <a href="https://www.prisma.io" rel="noopener noreferrer" target="_blank">
                Prisma
              </a>
            </li>
            <li>
              <a href="https://orm.drizzle.team" rel="noopener noreferrer" target="_blank">
                Drizzle
              </a>
            </li>
          </ul>
        </li>
        <li>
          🔐 <strong>Authentication Libraries</strong>
          <ul>
            <li>
              <a href="https://authjs.dev" rel="noopener noreferrer" target="_blank">
                Auth.js/NextAuth
              </a>
            </li>
            <li>
              <a href="https://lucia-auth.com" rel="noopener noreferrer" target="_blank">
                Lucia
              </a>
            </li>
            <li>
              <a href="https://www.better-auth.com" rel="noopener noreferrer" target="_blank">
                BetterAuth
              </a>
            </li>
          </ul>
        </li>
        <li>
          🌍 <strong>Internationalization (i18n)</strong>
          <ul>
            <li>
              <a
                href="https://inlang.com/m/osslbuzt/paraglide-next-i18n"
                rel="noopener noreferrer"
                target="_blank"
              >
                Paraglide
              </a>
            </li>
            <li>
              <a href="https://lingui.dev" rel="noopener noreferrer" target="_blank">
                Lingui
              </a>
            </li>
            <li>
              <a
                href="https://tolgee.io/apps-integrations/next"
                rel="noopener noreferrer"
                target="_blank"
              >
                Tolgee
              </a>
            </li>
            <li>
              <a href="https://next-intl.dev" rel="noopener noreferrer" target="_blank">
                next-intl
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <h2 id="prerequisites">Prerequisites</h2>
      <p>Make sure you have the following installed:</p>
      <ul>
        <li>
          <a href="https://nodejs.org" rel="noopener noreferrer" target="_blank">
            Node.js
          </a>{' '}
          (version 20 or later)
        </li>
        <li>
          <a href="https://bun.sh" rel="noopener noreferrer" target="_blank">
            Bun
          </a>
        </li>
      </ul>
      <blockquote>
        <strong>Note:</strong> If using npm, Yarn, or pnpm, adjust the package commands accordingly,
        including Husky commit hooks.
      </blockquote>
      <h2 id="getting-started">Getting Started</h2>
      <h3 id="1-start-a-new-project">1. Start a New Project</h3>
      <p>You can start a new project using this repository as a template in three ways:</p>
      <ol>
        <li>
          <p>Use This Repository as Template</p>
          <Image src={githubTemplate} width={300} height={126} alt="use-this-template-button" />
        </li>
        <li>
          <p>
            Using <code>create-next-app</code>
          </p>
          <pre>
            <code className="language-bash">
              npx create-next-app -e https://github.com/hanskym/nextjs-starter my-project-name
              --use-bun # npm | pnpm | yarn
            </code>
          </pre>
        </li>
        <li>
          <p>Using Git Clone</p>
          <pre>
            <code className="language-bash">
              git clone https://github.com/hanskym/nextjs-starter my-project-name
            </code>
          </pre>
        </li>
      </ol>
      <h3 id="2-install-dependencies">2. Install Dependencies</h3>
      <pre>
        <code className="language-bash">bun install</code>
      </pre>
      <h3 id="3-prepare-husky">3. Prepare Husky</h3>
      <pre>
        <code className="language-bash">bun prepare</code>
      </pre>
      <h3 id="4-run-the-development-server">4. Run the Development Server</h3>
      <pre>
        <code className="language-bash">bun dev</code>
      </pre>
      <p>
        Open <a href="http://localhost:3000">http://localhost:3000</a> in your browser to view your
        Next.js application. You can start editing the page by modifying{' '}
        <code>src/app/page.tsx</code>, and the changes will update in real time.
      </p>
    </div>
  );
}
