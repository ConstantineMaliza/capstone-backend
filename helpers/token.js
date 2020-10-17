const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const secret = process.env.SECRET_KEY;

exports.generateToken = (userDetails)=>{
    console.log(secret);
 return jwt.sign(userDetails, secret ,{expiresIn: '1000s'});

}