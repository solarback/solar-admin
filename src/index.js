import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Devices from './components/Devices';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, 
    children: [
      {index: true, element: <Home />},
      {
        path: "/devices",
        element: <Devices />,
      }, 
      {
        path: "/login",
        element: <Login />,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

