import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ListPageContainer from './pages/ListPage/ListPageContainer';
import CreateMainPage from './pages/CreatePage/CreateMainPage';
import DetailPage from './pages/DetailPage/DetailPage';
import EditPage from './pages/EditPage/EditPage';
import SendMessagePage from './pages/SendMessagePage/SendMessagePage';
import MainPage from './pages/MainPage/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'list',
        element: <ListPageContainer />,
      },
      {
        path: 'post',
        element: <CreateMainPage />,
      },
      {
        path: 'post/:id',
        element: <DetailPage />,
      },
      {
        path: 'post/:id/edit',
        element: <EditPage />,
      },
      {
        path: 'post/:id/message',
        element: <SendMessagePage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
