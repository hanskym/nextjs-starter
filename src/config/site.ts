export const siteConfig = {
  name: 'Next.js Starter',
  url: 'https://acme.com',
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
  ogImage: 'https://acme.com/og-image.png',
};

export type SiteConfig = typeof siteConfig;
