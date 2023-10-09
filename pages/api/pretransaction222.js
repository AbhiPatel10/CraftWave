const https = require('https');
const PaytmChecksum = require('paytmchecksum');

export default async function pretransaction(req, res) {
  try {
    if (req.method === 'POST') {
      // var reqBody = JSON.parse(req.body);
      var orderId = 'RSGI' + Math.floor(Math.random(6) * 1000000);
      var amount = req.body.amount;
      var callbackUrl = 'http://localhost:3000/api/posttransaction';
      var userInfo = {
        custId: 62626562662, // CLIENT CUSTOMER ID
        mobile: 9106924843,
        email: 'abhi@gmail.com',
      };
      const paytmParams = {};

      paytmParams.body = {
        requestType: 'Payment',
        mid: 'HVIKdD19189774087900',
        websiteName: 'www.google.com',
        orderId: orderId,
        callbackUrl: callbackUrl,
        txnAmount: {
          value: amount,
          currency: 'INR',
        },
        userInfo: userInfo,
      };

      PaytmChecksum.generateSignature(
        JSON.stringify(paytmParams.body),
        '__44SRLIbTQ@lZHM'
      ).then(function (checksum) {
        paytmParams.head = {
          signature: checksum,
        };

        var post_data = JSON.stringify(paytmParams);

        var options = {
          /* for Staging */
          // hostname: "securegw-stage.paytm.in",

          /* for Production */
          hostname: 'securegw.paytm.in',

          port: 443,
          path: `/theia/api/v1/initiateTransaction?mid=HVIKdD19189774087900&orderId=${orderId}`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': post_data.length,
          },
        };

        var response = '';
        var post_req = https.request(options, function (post_res) {
          post_res.on('data', function (chunk) {
            response += chunk;
          });

          post_res.on('end', function () {
            response = JSON.parse(response);
            console.log('txnToken:', response);

            res.status(200).json(response);
          });
        });
        console.log('Post data', post_data);
        post_req.write(post_data);
        post_req.end();
      });
    } else {
      res.send(req.body);
    }
  } catch (error) {
    console.log('eeeeerorrr', error);
    res.status(400).json('error', error);
  }
}
