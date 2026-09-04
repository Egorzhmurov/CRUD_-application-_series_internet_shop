import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import User from './getuser/user';
import AddUser from './adduser/AddUser';
import './App.css';

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;