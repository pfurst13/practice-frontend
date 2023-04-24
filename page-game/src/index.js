import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from './component/MainPage';
import Admin from './component/Admin';
import CreatePage from './component/CreatePage';
import ListPage from './component/ListPage';

const router = createBrowserRouter([
  {path: '/', element: <MainPage />},
  {path: '/admin', element: <Admin />},
  {path: '/create-page', element: <CreatePage />},
  {path: '/list-page', element: <ListPage />},

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
