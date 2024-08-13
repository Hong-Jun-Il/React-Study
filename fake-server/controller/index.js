const db = require("../database");

const getTodos = (req, res) => {
    try {
        const todos = db.todos;
        res.status(200).json({
            message: "success",
            data: todos
        })
    } catch (error) {
        res.status(400).json({
            message: "에러가 발생했습니다",
            error
        })
    }
}

module.exports = {
    getTodos
}