module.exports = {
  posts: Array.from({ length: 54 }, (_, i) => ({
    id: i + 1,
    title: `Title${i + 1}`,
  })),
};
