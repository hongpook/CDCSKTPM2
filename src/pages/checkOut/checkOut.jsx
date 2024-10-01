// PaymentComponent.js

import React, { useState } from 'react';
import axios from 'axios';

const PaymentComponent = () => {
  const [amount, setAmount] = useState('');
  const [bankCode, setBankCode] = useState('');
  const [orderDescription, setOrderDescription] = useState('');
  const [orderType, setOrderType] = useState('');
  const [language, setLanguage] = useState('vn');

  const handlePayment = async () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      alert('Vui lòng nhập số tiền hợp lệ');
      return;
    }

    try {
      // console.log("amount", amount)
      const response = await axios.post('http://localhost:8000/create_payment_url', {
        amount,
        bankCode,
        orderDescription,
        orderType,
        language
      });
      if (response.data && response.data.url) {
        window.location.href = response.data.url;

      }
    } catch (error) {
      console.error('There was an error creating the payment URL!', error);
    }
  };

  return (
    <div>
      <h2>Thanh toán với VNPAY</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Nhập số tiền"
      />
      <input
        type="text"
        value={bankCode}
        onChange={(e) => setBankCode(e.target.value)}
        placeholder="Nhập mã ngân hàng (nếu có)"
      />
      <input
        type="text"
        value={orderDescription}
        onChange={(e) => setOrderDescription(e.target.value)}
        placeholder="Nhập mô tả đơn hàng"
      />
      <input
        type="text"
        value={orderType}
        onChange={(e) => setOrderType(e.target.value)}
        placeholder="Nhập loại đơn hàng"
      />
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="vn">Tiếng Việt</option>
        <option value="en">English</option>
      </select>
      <button onClick={handlePayment}>Thanh toán</button>
    </div>
  );
};

export default PaymentComponent;
