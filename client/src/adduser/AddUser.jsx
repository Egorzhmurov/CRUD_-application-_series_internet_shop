import React from 'react';
import { Link } from 'react-router-dom';
import './adduser.css';

const AddUser = () => {
  return (
    <div className="add-user-container">
      <div className="add-user-card">
        <Link to="/" className="add-user-back-btn">
          <i className="fa-solid fa-backward"></i> Back
        </Link>
        
        <h3>ADD NEW USER</h3>
        
        <form>
          <div className="add-user-input-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              autoComplete="off" 
              placeholder="Enter your name" 
            />
          </div>
          
          <div className="add-user-input-group">
            <label htmlFor="email">E-mail:</label>
            <input 
              type="email" 
              id="email" 
              autoComplete="off" 
              placeholder="Enter your email" 
            />
          </div>
          
          <div className="add-user-input-group">
            <label htmlFor="address">Address:</label>
            <input 
              type="text" 
              id="address" 
              autoComplete="off" 
              placeholder="Enter your address" 
            />
          </div>
          
          <div className="add-user-input-group">
            <button type="submit" className="add-user-submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;