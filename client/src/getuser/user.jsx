import React from 'react';
import './user.css'; // Importing component styles

const User = () => {
  return (
    /* Card container for the user table */
    <div className="userTable">
      {/* Primary Bootstrap button to add a user */}
      <button type="button" className="btn btn-primary">Add User</button>

      {/* Main Bootstrap bordered table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>john@gmail.com</td>
            <td>Canada</td>
            <td>Update | Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;