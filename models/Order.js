const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    orderId: {
        type: String,
        required: true
    },
    paymentInfo:{
        type: String,
        default: ''
    },
    products: {
        type: Object,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    transactionid:{
        type: String,
        default: ""
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "Initiated"
    },
    deliveryStatus: {
        type: String,
        required: true,
        default: "unShipped"
    }
}, {timestamps: true});
mongoose.models = {}
export default mongoose.model("Order", OrderSchema);