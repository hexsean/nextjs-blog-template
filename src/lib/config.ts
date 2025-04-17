export const config = {
  site: {
    title: "H Blog",
    name: "H Blog",
    description: "学习中",
    keywords: ["H Blog", "AI", "Full Stack Developer"],
    url: "https://xxx.com",
    baseUrl: "https://xxx.com",
    image: "https://xxx.com/og-image.png",
    favicon: {
      ico: "/favicon.ico",
      png: "/favicon.png",
      svg: "/favicon.svg",
      appleTouchIcon: "/favicon.png",
    },
    manifest: "/site.webmanifest",
    rss: {
      title: "H Blog",
      description: "Thoughts on Full-stack development, AI",
      feedLinks: {
        rss2: "/rss.xml",
        json: "/feed.json",
        atom: "/atom.xml",
      },
    },
  },
  author: {
    name: "Hex sean",
    email: "jxfn8zil1y@hexsean.link",
    bio: "javaer -> 全栈开发",
  },
  social: {
    github: "https://github.com/hexsean"
  },
  giscus: {
    repo: "hexsean/nextjs-blog-template",
    repoId: "R_kgDOOa-LBw",
    categoryId: "DIC_kwDOOa-LB84CpLmh",
  },
  navigation: {
    main: [
      { 
        title: "文章", 
        href: "/blog",
      },
    ],
  },
  seo: {
    metadataBase: new URL("https://xxx.com"),
    alternates: {
      canonical: './',
    },
    openGraph: {
      type: "website" as const,
      locale: "zh_CN",
    },
    twitter: {
      card: "summary_large_image" as const,
      creator: "@xxx",
    },
  },
};
