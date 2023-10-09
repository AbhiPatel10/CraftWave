import User from '../../models/User';
import connectDb from '../../middleware/mongoose';
import jsonwebtoken from 'jsonwebtoken';
var CryptoJS = require('crypto-js');

const handler = async (req, res) => {
  try {
    if (req.method == 'POST') {
      let token = req.body.token;
      let user = jsonwebtoken.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);
      let dbUser = await User.findOne({ email: user.email });

      var bytes = CryptoJS.AES.decrypt(
        dbUser.password,
        process.env.NEXT_PUBLIC_AES_SECRET
      );
      var Decrypt_password = bytes.toString(CryptoJS.enc.Utf8);

      if (
        Decrypt_password == req.body.password &&
        req.body.npassword == req.body.cpassword
      ) {
        var EncryptedPass = CryptoJS.AES.encrypt(
          req.body.cpassword,
          process.env.NEXT_PUBLIC_AES_SECRET
        ).toString();

        await User.findOneAndUpdate(
          { email: user.email },
          { password: EncryptedPass }
        );

        res.status(200).json({ success: true });
        return;
      } else {
        res.status(200).json({ success: false });
        return;
      }
    } else {
      res.status(400).json({ error: 'This Method is not allowed' });
      return;
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export default connectDb(handler);
