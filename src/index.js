import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ListPage from './pages/ListPage/ListPage';
import CreatePage from './pages/CreatePage/CreatePage';
import DetailPage from './pages/DetailPage/DetailPage';
import EditPage from './pages/EditPage/EditPage';
import SendMessagePage from './pages/SendMessagePage/SendMessagePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/list',
    element: <ListPage />,
  },
  {
    path: '/post',
    element: <CreatePage />,
  },
  {
    path: '/post/:id',
    element: <DetailPage />,
  },
  {
    path: '/post/:id/edit',
    element: <EditPage />,
  },
  {
    path: '/post/:id/message',
    element: <SendMessagePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
