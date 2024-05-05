import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/blog');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from PostgreSQL</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <div>Name: {item.name}</div>
            <div
                    class="product__item__pic set-bg"
                    style={{ backgroundImage: `url(${require('../images/blogs/' + item.image)})` }}
                >
            </div>
            <div>Content: {item.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
