import React from "react";

const PriceComponent = ({ price }) => {
    // Format price to Vietnamese Dong (VND)
    const formattedPrice = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  
    return formattedPrice;
  }
  
export default PriceComponent;