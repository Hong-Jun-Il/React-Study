const db = require("../database.js");

const getStates = (req, res) => {
  const states = db.states;

  try {
    res.status(200).json({
      message: "states 성공함",
      states,
    });
  } catch (error) {
    res.status(400).json({
      messsage: "states 실패함",
      error,
    });
  }
};

const getLanguages = (req, res) => {
  const languages = db.languages;

  try {
    res.status(200).json({
      message: "get languages 성공",
      languages,
    });
  } catch (error) {
    res.status(400).json({
      message: "get languages 실패",
      error,
    });
  }
};

const getGenders = (req, res) => {
  const genders = db.genders;

  try {
    res.status(200).json({
      message: "get genders 성공",
      genders,
    });
  } catch (error) {
    res.status(400).json({
      message: "get genders 실패",
      error,
    });
  }
};

module.exports = {
  getStates,
  getLanguages,
  getGenders,
};
