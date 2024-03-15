const home = {
  title: 'Home',
  publishedAt: '2024-01-02T23:00:00.000Z',
  // isPublished: true,
  views: 236,
  description: 'Lorem ipsum dolor sit amet lobortis tempus fusce.',
  sections: [
    {
      _type: 'heroBanner',
      title: 'Welcome!',
      coverImage: {
        src: '/uploads/pexels-vedanti-239975.jpg',
        alt: 'Alt text image',
      },
      link: 'tests/fake/content/blogs/article-1.md',
    },
  ],
  seo: {
    title: 'Site title',
    description: 'Site description',
    noIndex: false,
    keywords: ['keyword 1', 'keyword 2'],
  },
};

export default home;
