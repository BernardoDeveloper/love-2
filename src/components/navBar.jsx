import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function NavBar({ title }) {
  let [open, setOpen] = useState(false);

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

      {open && (
        <motion.div
          key="modal"
          initial={{ opacity: 1, y: '-20%' }}
          animate={{ opacity: 1, y: '0%' }}
          exit={{ opacity: 0 }}
          className="h-1/3 w-full absolute bottom-0 left-0 bg-white text-white font-semibold text-xl"
        >
          <ul className="bg-black/90 w-full h-full flex items-center justify-center flex-col space-y-3">
            <li>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setOpen(!open)}
                className="w-6 h-6 absolute top-5 right-5"
              >
                <img
                  className="fill-white"
                  src="/close-button-svgrepo-com.svg"
                  alt="close button"
                />
              </motion.button>
            </li>
            <li>
              <Link to="/">inicio</Link>
            </li>
            <li>
              <Link to="/we">casal</Link>
            </li>
            <li>
              <Link to="/all">familia</Link>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { NavBar };
