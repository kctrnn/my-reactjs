import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

import ImageUploaderPage from 'pages/image-uploader';
import NotFoundPage from 'pages/not-found';
import PortfolioPage from 'pages/portfolio';
import RandomQuotePage from 'pages/random-quote-generator';
import ReusableComponentPage from 'pages/reusable-component';
import TodoAppPage from 'pages/todo-app';
import WindBnbPage from 'pages/windbnb';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'todo-app',
        element: <TodoAppPage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'reuseable-component',
        element: <ReusableComponentPage />,
      },
      {
        path: 'image-uploader',
        element: <ImageUploaderPage />,
      },
      {
        path: 'random-quote-generator',
        element: <RandomQuotePage />,
      },
      {
        path: 'windbnb',
        element: <WindBnbPage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
