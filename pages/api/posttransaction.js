import connectDb from "../../middleware/mongoose"
import Order from "../../models/Order"
import Product from '../../models/Product'
import PaytmChecksum from "paytmchecksum";

const handler = async (req, res) => {
  try {

    let order;
    var paytmChecksum = "";
    var paytmParams = {}
    const received_data = req.body

    for (var key in received_data) {
      if (key == "CHECKSUMHASH") {
        paytmChecksum = received_data[key];
      } else {
        paytmParams[key] = received_data[key];
      }
    }
    var isValidChecksum = PaytmChecksum.verifySignature(paytmParams, process.env.NEXT_PUBLIC_PAYTM_MKEY, paytmChecksum);
    if (!isValidChecksum) {
      res.status(500).send("Some error occurs")
      return
    } else {
      if (req.body.STATUS == 'TXN_SUCCESS') {
        order = await Order.findOneAndUpdate({ orderId: req.body.ORDERID }, { status: 'Paid', paymentInfo: JSON.stringify(req.body), tansactionid: req.body.TXNID })
        let products = order.products
        for (let slug in products) {
          await Product.findOneAndUpdate({ slug: slug }, { $inc: { "availableQty": - products[slug].qty } })
        }
        res.redirect('/order?clearCart=1&id=' + order._id, 200)
      }
      else if (req.body.STATUS = 'PENDING') {
        order = await Order.findOneAndUpdate({ orderId: req.body.ORDERID }, { status: 'Pending', paymentInfo: JSON.stringify(req.body), tansactionid: req.body.TXNID })
        // res.status(400).send("Payment is Pending")
        res.redirect('/checkout?payment=fail', 400)
        // return
      }
    }
    
    // res.status(200).json({ body: req.body })
  }catch(error){
    res.status(400).send({error: error})

  }
}

export default connectDb(handler);
