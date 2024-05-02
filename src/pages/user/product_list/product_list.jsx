import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Lỗi lấy dữ liệu:', error);
      });
  }, []);

  return (
    <div>
      <h1>Dữ liệu từ PostgreSQL</h1>
      <ul>
        {data.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <img src={item.image} alt=''></img>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DataComponent;