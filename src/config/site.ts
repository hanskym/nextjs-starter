export const siteConfig = {
  name: 'Next.js Starter',
  url: 'https://nextjs-starter.hansky.dev',
  aboutMe: {
    altName: 'JDoe',
    fullName: 'John Doe',
    shortName: 'John',
    socials: {
      email: 'email@acme.com',
      github: 'https://github.com/username',
      gravatar: 'https://gravatar.com/username',
      twitter: 'https://x.com/username',
      twitterUsername: '@username',
    },
  },
  description: 'A starter template for building Next.js.',
  keywords: ['Next.js', 'Starter Template', 'Next.js App Router'],
  ogImage: '/og-image.png',
};

export type SiteConfig = typeof siteConfig;
