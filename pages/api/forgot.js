import User from '../../models/User';
const nodeMailer = require('nodemailer');
import connectDb from '../../middleware/mongoose';
import Forgot from '../../models/Forgot';
var CryptoJS = require('crypto-js');

const handler = async (req, res) => {
  if (req.body.sendMail) {
    let dbuser = await User.findOne({ email: req.body.email });

    if (dbuser != null) {
      const transporter = nodeMailer.createTransport({
        host: 'smtp-mail.outlook.com',
        auth: {
          user: 'help.epicwear@outlook.com',
          pass: 'Abhi@7751#',
        },
      });

      let token = 'sdsdsasfsdfdfsfsfdzdvdsvs6545sd45sd4sd555555555555';

      let emailTemplate = `
                        We have sent you this email in response to your request to reset your password on Craft Wave
                        
                        To reset your password, please follow the link below: 
                        
                        http://localhost:3000/forgot?token=${token} - Click here to reset your password
                        
                        We recommend that you keep your password secure and not share it with anyone. If you feel your password has
                        been compromised, you can change it by going to your My Account Page and Change your password.
                        `;

      await transporter.sendMail({
        text: emailTemplate,
        from: 'help.epicwear@outlook.com',
        to: req.body.email,
        subject: 'Change Password - Craft Wave',
      });
      let dbForgot = await Forgot.findOne({ email: req.body.email });

      if (dbForgot == null) {
        let forgot = new Forgot({
          email: req.body.email,
          token: token,
        });
        await forgot.save();
      } else {
        await Forgot.updateOne(
          { email: req.body.email },
          {
            email: req.body.email,
            token: token,
          }
        );
      }

      res
        .status(200)
        .json({ success: true, message: 'Mail Sent Successfully' });
      return;
    } else {
      res.status(400).json({
        success: false,
        message: 'Your Account is not registered',
        error: 'Your account is not registered',
      });
      return;
    }
  } else {
    // Reset User Password

    let dbUser = await Forgot.findOne({ token: req.body.token });

    if (dbUser != null) {
      var EncryptedPass = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.NEXT_PUBLIC_AES_SECRET
      ).toString();
      await User.findOneAndUpdate(
        { email: dbUser.email },
        { password: EncryptedPass }
      );
      res
        .status(200)
        .json({ success: true, message: 'Password Changed Successfully' });
      return;
    } else {
      res
        .status(400)
        .json({ success: false, message: 'User Not Found', error: 'error' });
      return;
    }
  }
};

export default connectDb(handler);
