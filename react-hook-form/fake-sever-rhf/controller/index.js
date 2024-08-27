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

module.exports = {
    getStates
}