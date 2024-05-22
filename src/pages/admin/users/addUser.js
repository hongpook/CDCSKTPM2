import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    img_user: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
  try {
    // Extracting just the filename from the path
    const imgFilename = formData.img_user.split('\\').pop();

    // Creating a new formData object with just the filename
    const formDataWithFilename = {
      ...formData,
      img_user: imgFilename
    };

    const response = await axios.post('http://localhost:3001/users', formDataWithFilename);
    alert('New user created:');
    // Handle success, maybe redirect to a different page or show a success message
  } catch (error) {
    alert('Error creating user:');
    // Handle error, maybe show an error message to the user
  }
  };


  return (
    <div className='container'>
      <br/>
      <div >
        <h2>User Registration</h2>
        

      </div>
      <form onSubmit={handleSubmit} className='row'>
        <div className="col-6">
          <label htmlFor="username">Username:</label>
          <input className="col-12" type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="col-6">
          <label htmlFor="email">Email:</label>
          <input className="col-12" type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="col-6">
          <label htmlFor="password">Password:</label>
          <input className="col-12" type="password" id="password" name="password" value={formData.password} onChange={handleChange} />

        </div>
        <div className="col-6">

          <label htmlFor="img_user">Image URL:</label>
          <input className="col-12" type="file" id="img_user" name="img_user" value={formData.img_user} onChange={handleChange} />
        </div>
        <br/>
        <div className="col-6">

          <button className="col-3" type="submit">Submit</button> 
        </div>
      </form>
    </div>
  );
};

export default UserRegistration;
