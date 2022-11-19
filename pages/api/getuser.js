import User from "../../models/User"
import connectDb from "../../middleware/mongoose"
import jsonwebtoken from "jsonwebtoken"

const handler = async (req, res) => {
    try {
        if (req.method == "GET") {


            let token = req.body.token
            let user = jsonwebtoken.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET)
            console.log('User---', user)

            // let user = await User.find({email: req.body.email})

            res.status(200).json(JSON.parse(JSON.stringify(Products)))
        } else {
            res.status(400).json({ error: "This Method is not allowed" })
        }

    } catch (error) {
        res.status(400).json({ error: error })
    }


}

export default connectDb(handler);