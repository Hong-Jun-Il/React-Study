const db = require("../database.js");

const getStates = (req, res)=>{
    const states = db.states;

    try {
        res.status(200).json({
            message: "states 성공함",
            states
        })
    } catch (error) {
        res.status(400).json({
            messsage: "states 실패함",
            error
        })
    }
}

const getLanguages =(req, res)=>{
    const languages = db.languages;

    try {
        res.status(200).json({
            message: "get languages 성공",
            languages
        })
    } catch (error) {
        res.status(400).json({
            message: "get languages 실패",
            error
        })
    }
}

module.exports = {
    getStates,
    getLanguages
}