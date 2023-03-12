import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Watch from './pages/Watch';
import Home from './pages/Home';
import Title from './pages/Title';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/watch/:id",
        element: <Watch />
      },
      {
        path: "/title/:id",
        element: <Title />
      }
    ]
  }
])
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);


