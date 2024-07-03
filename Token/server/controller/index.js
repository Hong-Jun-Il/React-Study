const userDatabase = require("../Database");
const jwt = require("jsonwebtoken");

const signUp = (req, res) => {

}

const login = (req, res, next) => {
    const { email, password } = req.body;

    const userInfo = userDatabase.filter(user => {
        return user.email === email;
    })[0];

    if (!userInfo) {
        res.status(403).json("Not Authorized");
    } else {
        try {
            const accessToken = jwt.sign({
                id: userInfo.id,
                nickname: userInfo.nickname,
                email: userInfo.email,
            }, process.env.ACCESS_SECRET, {
                expiresIn: "1m",
                issuer: "Hong"
            })

            const refreshToken = jwt.sign({
                id: userInfo.id,
                nickname: userInfo.nickname,
                email: userInfo.nickname
            }, process.env.REFRESH_SECRET, {
                expiresIn: "24h",
                issuer: "Hong"
            })

            res.cookie("accessToken", accessToken, {
                secure: false,
                httpOnly: true
            })

            res.cookie("refreshToken", refreshToken, {
                secure: false,
                httpOnly: true
            })

            res.status(200).json("login success");
        } catch (error) {
            res.status(500).json(error, "sadsadasdadd");
        }
    }
}

module.exports = {
    login
}