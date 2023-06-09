import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import LazyLoad from 'react-lazyload';

// views
import { Home } from './views/Home';
import { Casal } from './views/Casal';
import { Familia } from './views/Familia';
import { AnimatePresence } from 'framer-motion';
import { Love } from './views/Love';
import { Upload } from './views/Upload';

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
  {
    path: '/love',
    element: <Love />,
  },
  {
    path: '/upload',
    element: <Upload />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LazyLoad once>
      <section className="w-screen lg:max-w-xl lg:mx-auto lg:h-screen h-full p-5 font-montserrat">
        <AnimatePresence>
          <RouterProvider router={router} />
        </AnimatePresence>
      </section>
    </LazyLoad>
  </React.StrictMode>
);
