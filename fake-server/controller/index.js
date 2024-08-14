const db = require("../database");

const getTodoIds = (req, res) => {
    try {
        const todos = db.todos;
        res.status(200).json({
            message: "성공함",
            data: todos
        })
    } catch (error) {
        res.status(400).json({
            message: "에러가 발생했습니다",
            error
        })
    }
}

const getTodos = (req, res) => {
    try {
        const { id } = req.query;
        const todos = db.todos;
        const targetTodo = todos.filter(todo => todo.id === Number(id))[0];

        res.status(200).json({
            message: "todo 조회에 성공함",
            data: targetTodo
        })
    } catch (e) {
        res.status(400).json({
            message: "todo 조회에 에러가 발생함",
            error: e
        })
    }
}

const createTodo = (req, res) => {
    const todos = db.todos;
    try {
        const { title, description } = req.body;
        const nextId = todos.length > 0 ? (todos[todos.length - 1].id + 1) : 1;

        const newTodo = {
            checked: false,
            title,
            description,
            id: nextId
        }

        todos.push(newTodo);

        res.status(200).json({
            message: "create todo success"
        })
    } catch (error) {
        res.status(400).json({
            message: "create todo error"
        })
    }
}

const completeTodo = (req, res) => {
    const { id } = req.body;

    const todos = db.todos;
    try {
        const targetTodoIndex = todos.findIndex(todo => todo.id === Number(id));
        todos[targetTodoIndex].checked = true;

        res.status(200).json({
            message: "todo complete update success"
        })
    } catch (e) {
        res.status(400).json({
            message: "todo complete update fail"
        })
    }
}

const deleteTodo = (req, res) => {
    const todos = db.todos;

    try {
        const { id: targetId } = req.query;

        const updateTodos = todos.filter(todo => todo.id !== Number(targetId));
        db.todos = updateTodos;

        res.status(200).json({
            message: "todo 삭제에 성공함"
        })
    } catch (error) {
        res.status(400).json({
            message: "todo 삭제에 실패함"
        })
    }
}

module.exports = {
    getTodoIds,
    getTodos,
    createTodo,
    completeTodo,
    deleteTodo
}