const db = require("../database");

const getTodoIds = (req, res) => {
    const todos = db.todos;

    try {
        const idArray = todos.map(todo => todo.id);

        res.status(200).json({
            message: "id 조회에 성공함",
            data: idArray
        })
    } catch (error) {
        res.status(400).json({
            message: "id 조회에 실패함",
            error
        })
    }
}

const getTodo = (req, res) => {
    const todos = db.todos;

    try {
        const { id } = req.query;
        const todo = todos[todos.findIndex(todo => todo.id === Number(id))];

        res.status(200).json({
            message: "tood 조회에 성공함",
            data: todo
        })
    } catch (e) {
        res.status(400).json({
            message: "todo 조회에 실패함",
            error: e
        })
    }
}

const toggleCompleteTodo = (req, res) => {
    const todos = db.todos;

    try {
        const { id: targetId } = req.body;

        const targetTodoIndex = todos.findIndex(todo => todo.id === Number(targetId));


        todos[targetTodoIndex].done = !todos[targetTodoIndex].done;

        console.log(todos[targetTodoIndex].done)

        res.status(200).json({
            message: "todo toggle에 성공함"
        })
    } catch (error) {
        res.status(400).json({
            message: "todo toggle에 실패함",
            error
        })
    }
}

const createTodo = (req, res) => {
    const todos = db.todos;

    try {
        const { title, description } = req.body;
        const nextId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

        todos.push({
            id: nextId,
            done: false,
            title,
            description
        })

        res.status(200).json({
            message: "create todo 성공함"
        })
    } catch (e) {
        res.status(400).json({
            message: "create todo 실패",
            error: e
        })
    }
}

const deleteTodo = (req, res) => {
    const todos = db.todos;

    try {
        const { id: targetId } = req.query;

        db.todos = todos.filter(todo => todo.id !== Number(targetId));

        res.status(200).json({
            message: "delete todo 성공"
        })
    } catch (error) {
        res.status(400).json({
            message: "delete todo 에러남"
        })
    }
}

module.exports = {
    getTodoIds,
    getTodo,
    toggleCompleteTodo,
    createTodo,
    deleteTodo
}