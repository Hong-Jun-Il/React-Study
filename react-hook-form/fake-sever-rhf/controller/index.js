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

const getSkills = (req, res) => {
  const skills = db.skills;

  try {
    res.status(200).json({
      message: "get skills 성공",
      skills,
    });
  } catch (error) {
    res.status(400).json({
      message: "get skills 실패",
      error,
    });
  }
};

const getUsers = (req, res) => {
  const users = db.users;

  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getUser = (req, res) => {
  const users = db.users;

  try {
    const {id: targetId} = req.query;

    const targetUser = users.find(user=>String(user.id)===targetId);

    res.status(200).json(targetUser);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  getStates,
  getLanguages,
  getGenders,
  getSkills,
  getUsers,
  getUser
};
