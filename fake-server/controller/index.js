const db = require("../database");

const getPosts = (req, res) => {
  const posts = db.posts;
  try {
    const { page } = req.query;

    const limit = 5;
    const start = (Number(page) - 1) * limit;
    const end = start + limit;

    const data = posts.slice(start, end);

    res.status(200).json({
      message: "get posts 성공",
      data,
    });
  } catch (error) {
    res.status(400).json({
      message: "get posts 실패",
      error,
    });
  }
};

module.exports = {
  getPosts,
};
