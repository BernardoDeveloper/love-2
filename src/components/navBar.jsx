import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { click } from '../handlers/animation';

function NavBar({ title }) {
  let [open, setOpen] = useState(false);

  const links = [
    { name: 'inicio', to: '/', id: 1 },
    { name: 'casal', to: '/we', id: 2 },
    { name: 'familia', to: '/all', id: 3 },
    { name: 'love', to: '/love', id: 4 },
  ];

  return (
    <AnimatePresence>
      <nav className="flex itens-center justify-between">
        <Link to="/" className="font-bold font-montserrat text-2xl">
          {title}
        </Link>

        <button
          className="font-montserrat font-semibold py-1 px-5 border-2 border-black/20 rounded-full hover:border-black/40 transition-all duration-200"
          onClick={() => setOpen(!open)}
        >
          menu
        </button>
      </nav>

      <motion.div
        layout
        className={`w-full fixed bottom-0 left-0 bg-white text-white font-semibold text-xl ${
          open ? 'h-1/3' : 'h-0'
        }`}
      >
        <ul className="bg-black/90 w-full h-full flex items-center justify-center flex-col space-y-3">
          <li>
            <motion.button
              whileTap={{ scale: click.scale }}
              onClick={() => setOpen(false)}
              className="w-6 h-6 absolute top-5 right-5"
            >
              <img
                className="fill-white"
                src="/close-button-svgrepo-com.svg"
                alt="close button"
              />
            </motion.button>
          </li>

          {links.map(({ name, to, id }) => (
            <motion.li whileTap={{ scale: click.scale }}>
              <Link key={id} to={to}>
                {name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  );
}

export { NavBar };
