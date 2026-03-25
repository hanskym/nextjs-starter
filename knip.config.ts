import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  project: ['src/**/*.{js,jsx,ts,tsx,css,scss}'],
  ignore: ['src/config/site.ts'],
  ignoreDependencies: [
    'zod',
    '@eslint/js',
    'eslint-config-next',
    'eslint-config-prettier',
    'eslint-plugin-prettier',
  ],
};

export default config;
