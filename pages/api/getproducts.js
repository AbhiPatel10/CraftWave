import Product from '../../models/Product';
import connectDb from '../../middleware/mongoose';

const handler = async (req, res) => {
  try {
    if (req.method == 'GET') {
      let products = await Product.find();

      let Products = {};
      for (let item of products) {
        if (item.title in Products) {
          if (
            !Products[item.title].color.includes(item.color) &&
            item.availableQty > 0
          ) {
            Products[item.title].color.push(item.color);
          }
          if (
            !Products[item.title].size.includes(item.size) &&
            item.availableQty > 0
          ) {
            Products[item.title].size.push(item.size);
          }
        } else {
          Products[item.title] = JSON.parse(JSON.stringify(item));
          if (item.availableQty > 0) {
            Products[item.title].color = [item.color];
            Products[item.title].size = [item.size];
          } else {
            Products[item.title].color = [];
            Products[item.title].size = [];
          }
        }
      }
      res.status(200).json(JSON.parse(JSON.stringify(Products)));
    } else {
      res.status(400).json({ error: 'This Method is not allowed' });
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export default connectDb(handler);
