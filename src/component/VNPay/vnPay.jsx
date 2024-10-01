const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const querystring = require('querystring');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const vnp_TmnCode = 'D58VZBLC';
const vnp_HashSecret = '0M8P1HJN1BA15DLDYJZ3TY6IYPN9JOUO0M8P1HJN1BA15DLDYJZ3TY6IYPN9JOUO';
const vnp_Url = 'https://pay.vnpay.vn/vpcpay.html';
const vnp_ReturnUrl = 'http://localhost:8000/vnpay_return';

function sortObject(obj) {
  const sorted = {};
  const keys = Object.keys(obj).sort();
  keys.forEach(key => {
    sorted[key] = obj[key];
  });
  return sorted;
}



app.get('/vnpay_return', (req, res) => {
  let vnp_Params = req.query;
  const secureHash = vnp_Params['vnp_SecureHash'];

  delete vnp_Params['vnp_SecureHash'];
  delete vnp_Params['vnp_SecureHashType'];

  vnp_Params = sortObject(vnp_Params);

  const secretKey = vnp_HashSecret;
  const querystring = require('qs');
  const signData = querystring.stringify(vnp_Params, { encode: false });
  const hmac = crypto.createHmac("sha512", secretKey);
  const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest("hex");

  if (secureHash === signed) {
    res.status(200).json({ code: vnp_Params['vnp_ResponseCode'] });
  } else {
    res.status(200).json({ code: '97' });
  }
});

app.get('/vnpay_ipn', (req, res) => {
  let vnp_Params = req.query;
  const secureHash = vnp_Params['vnp_SecureHash'];

  delete vnp_Params['vnp_SecureHash'];
  delete vnp_Params['vnp_SecureHashType'];

  vnp_Params = sortObject(vnp_Params);
  const secretKey = vnp_HashSecret;
  const querystring = require('qs');
  const signData = querystring.stringify(vnp_Params, { encode: false });
  const hmac = crypto.createHmac("sha512", secretKey);
  const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest("hex");

  if (secureHash === signed) {
    const orderId = vnp_Params['vnp_TxnRef'];
    const rspCode = vnp_Params['vnp_ResponseCode'];
    res.status(200).json({ RspCode: '00', Message: 'success' });
  } else {
    res.status(200).json({ RspCode: '97', Message: 'Fail checksum' });
  }
});

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
