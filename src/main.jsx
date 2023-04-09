import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

// views
import { Home } from './views/Home';
import { Casal } from './views/Casal';
import { Familia } from './views/Familia';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/we',
    element: <Casal />,
  },
  {
    path: '/all',
    element: <Familia />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <section className="w-screen h-full overflow-y-hidden p-5 font-montserrat">
      <RouterProvider router={router} />
    </section>
  </React.StrictMode>
);
