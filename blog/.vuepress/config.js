module.exports = {
  title: 'feather',
  description: "feather's blog",
  base: '/',
  dest: 'dist/',
  evergreen: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'feather <feather.jiang@icloud.com>' }],
    [
      'meta',
      { name: 'copyright', content: '网站内容版权所有，转载请注明出处' },
    ],
    [
      'meta',
      {
        name: 'keywords',
        content: 'blog',
      },
    ],
  ],
  theme: 'ououe',
  themeConfig: {
    defaultTheme: 'dark',
    cover: '/img/cover.jpg',
    logo: '/img/logo.png',
    useVssue: true,
    postTime: {
      createTime: '创建时间',
      lastUpdated: '最后修改',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/posts/' },
      { text: 'Tags', link: '/tag/' },
      { text: 'Categories', link: '/category/' },
      { text: 'About', link: '/about/' },
    ],
    footer: [{ text: 'Github', link: 'https://github.com/FeatherJiang' }],
  },
  markdown: {
    lineNumbers: true,
  },
  postcss: {
    plugins: [
      require('postcss-propro'),
      require('postcss-flex-alias'),
      require('css-prefers-color-scheme/postcss'),
      require('autoprefixer'),
    ],
  },
  plugins: {
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        return new Date(timestamp).toISOString();
      },
    },
    'blog-multidir': {
      postsDir: {
        posts: 'posts/:year/:month/:day/:slug',
      },
    },
    'reading-progress': {
      readingDir: ['posts', 'lib'],
    },
    '@vssue/vuepress-plugin-vssue': {
      platform: 'github',
      owner: 'feather',
      repo: 'blog',
      clientId: '01b4251b3fc6c3412a05',
      clientSecret: 'b9ebd1d0b2f29a22b8c2efff8db5105c47136261',
    },
    sitemap: {
      hostname: 'https://FeatherJiang.github.io',
      changefreq: 'weekly',
    },
  },
};
