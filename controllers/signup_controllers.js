const {generateToken} = require('../helpers/token')

let users = [];
export const signup = (req, res) => {

    let signupuser = {
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password
    }
    let token =generateToken(signupuser);
    users.push(signupuser);
    res.status(201).json({ "user signed up": signupuser, "Token": token});
}

export const allsignupuser = (req, res) => {
    res.status(200).json({ message: "success", users });
}