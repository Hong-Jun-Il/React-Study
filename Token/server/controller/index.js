const userDatabase = require("../Database");
const jwt = require("jsonwebtoken");

const signUp = (req, res) => {

}

const login = (req, res) => {
    const { email, password } = req.body;

    const userInfo = userDatabase.filter(user => {
        return user.email === email;
    })[0];

    if (!userInfo) {
        res.status(403).json("Not Authorized");
    } 
    else if(userInfo.password!==password){
        res.status(401).json({
            message: "비밀번호가 맞지 않습니다."
        });
    }
    else {
        try {
            const accessToken = jwt.sign({
                id: userInfo.id,
                nickname: userInfo.nickname,
                email: userInfo.email,
            }, process.env.ACCESS_SECRET, {
                expiresIn: "30s",
                issuer: "Hong"
            })

            const refreshToken = jwt.sign({
                id: userInfo.id,
                nickname: userInfo.nickname,
                email: userInfo.email
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

            res.status(200).json({
                currentUserId: userInfo.id,
                message: "login success"
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

const accessToken = (req, res) =>{
    try{
        const token = req.cookies.accessToken;
        const data = jwt.verify(token, process.env.ACCESS_SECRET);
    
        const userData = userDatabase.filter(item=>{
          return item.email === data.email;
        })[0];    

        const {password, ...others} = userData;
        res.status(200).json(others);
    }catch(e){
        res.status(500).json(e);
    }
}

const refreshToken = (req, res) => {
    try{
        const token = req.cookies.refreshToken;
        const data = jwt.verify(token, process.env.REFRESH_SECRET);

        const userData = userDatabase.filter(user=>{
            return user.email===data.email;
        })[0];

        const accessToken = jwt.sign({
            id: userData.id,
            nickname: userData.nickname,
            email: userData.email,
        }, process.env.ACCESS_SECRET, {
            expiresIn: "30s",
            issuer: "Hong"
        })

        res.cookie("accessToken", accessToken, {
            secure: false,
            httpOnly: true
        });

        res.status(200).json("success");
    }catch(e){
        res.status(501).json(e);
    }
}

const loginSuccess = (req, res) => {
    try{
        const token = req.cookies.accessToken;
        const data = jwt.verify(token, process.env.ACCESS_SECRET);

        const userData = userDatabase.filter(user=>user.email === data.email)[0];

        const {password, ...others} = userData;

        res.status(200).json(others);
    }catch(e){
        res.status(500).json(e);
    }
}

const logout = (req, res) => {
    try {
      res.cookie('accessToken', '');
      res.status(200).json("Logout Success");
    } catch (error) {
      res.status(500).json(error);
    }
  };

const getUsers = (req, res) => {
    try{
        const users = userDatabase.map(user=>{
            return {
                id: user.id,
                email: user.email,
                nickname: user.nickname
            }
        })
        
        res.status(200).json(users);
    }catch(e){
        console.log(e);
    }
}

module.exports = {
    login,
    accessToken,
    refreshToken,
    loginSuccess,
    logout,
    getUsers
}