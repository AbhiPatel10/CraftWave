// import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"
import User from "../../models/User"
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');


const handler = async (req, res) => {
    if (req.method == "POST") {
        let user = await User.findOne({ "email": req.body.email })
        
        var bytes   = CryptoJS.AES.decrypt(user.password, process.env.NEXT_PUBLIC_AES_SECRET);
        var Decrypt_password = bytes.toString(CryptoJS.enc.Utf8);
        if (user) {
            if (req.body.email == user.email && Decrypt_password == req.body.password) {
                var token = jwt.sign({ email: user.email, name: user.name },  process.env.NEXT_PUBLIC_JWT_SECRET, { expiresIn: '2d' })
                res.status(200).json({ success: true, token: token, email: user.email })
            }else{
                res.status(400).json({ success: false, error: "Invalid Credentials" })
            }
        }
        else {
            res.status(400).json({ success: 'false', error: "No User Found" })
        }
    }
    else {
        res.status(400).json({ error: "This Method is not allowed" })
    }
}

export default connectDb(handler);