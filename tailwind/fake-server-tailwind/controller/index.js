const db = require("../database");

const getItems = (req, res)=>{
    const items = db.items;

    try {
        const page = Number(req.query.page);
        const limit = Number(req.query.limit);
        
        const start = (page - 1) * limit;
        const end = start + limit;
        
        const target = items.slice(start, end);

        res.status(200).json({
            message: "get items 성공",
            items: target
        })
    } catch (e) {
        res.status(400).json({
            message: "get items 실패",
            error: e
        })
    }
}

module.exports = {
    getItems
}