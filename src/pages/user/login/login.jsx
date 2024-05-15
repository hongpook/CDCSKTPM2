import React, { useState } from 'react';
import './style.scss';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(users => {
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
          // Xử lý đăng nhập thành công
          const localUser = window.localStorage.setItem("user", user)
          window.location.href = '/admin';
        } else {
          setError('Tên người dùng hoặc mật khẩu không đúng.');
        }
      })
      .catch(error => {
        console.error('Lỗi khi lấy danh sách người dùng:', error);
        setError('Đã xảy ra lỗi. Vui lòng thử lại sau.');
      }); 
  };

  
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login for admin</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
