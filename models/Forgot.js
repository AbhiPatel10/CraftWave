const mongoose = require('mongoose');

const ForgotSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    token: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model('Forgot', ForgotSchema);
