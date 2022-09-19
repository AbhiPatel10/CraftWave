// import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"
import User from "../../models/User"
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method == "POST") {
        const {name, email, password} = req.body
        var secretKey = "AbhiPatelEpicWear321666232"
        var EncryptedPass = CryptoJS.AES.encrypt(password, secretKey).toString();
        let u = new User({name, email, password: EncryptedPass})
        await u.save()
        res.status(200).json({ success: true })
    }
    else {
        res.status(400).json({ error: "This Method is not allowed" })

    }
}

export default connectDb(handler);