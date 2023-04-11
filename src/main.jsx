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
    <LazyLoad once>
      <section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-screen h-full overflow-y-hidden p-5 font-montserrat"
      >
        <AnimatePresence>
          <RouterProvider router={router} />
        </AnimatePresence>
      </section>
    </LazyLoad>
  </React.StrictMode>
);
