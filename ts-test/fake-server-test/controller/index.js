const db = require("../database");

const getItems = (req, res) => {
  const items = db.items;

  try {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);

    const start = (page - 1) * limit;
    const end = start + limit;

    const sendData = items.slice(start, end);

    res.status(200).json({
      message: "pagination 성공",
      items: sendData,
      totalPages: Math.ceil(items.length / limit),
    });
  } catch (error) {
    res.status(400).json({
      message: "pagination 에러",
      error,
    });
  }
};

module.exports = {
  getItems,
};
