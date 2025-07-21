import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  project: ['src/**/*.{js,jsx,ts,tsx,css,scss}'],
  ignore: ['src/config/site.ts'],
  ignoreDependencies: ['zod', '@commitlint/cli'],
};

export default config;
