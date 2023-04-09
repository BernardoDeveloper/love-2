import { useState } from 'react';

function NavBar({ title }) {
  let [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex itens-center justify-between">
        <a href="/" className="font-bold font-montserrat text-2xl">
          {title}
        </a>

        <button
          className="font-montserrat font-semibold py-1 px-5 border-2 border-black/20 rounded-full hover:border-black/40 transition-all duration-200"
          onClick={() => setOpen(!open)}
        >
          menu
        </button>
      </nav>

      {open ? (
        <div className="h-1/3 w-full absolute bottom-0 left-0 bg-white text-white font-semibold text-xl">
          <ul className="bg-black/90 w-full h-full flex items-center justify-center flex-col space-y-3">
            <li>
              <button
                onClick={() => setOpen(!open)}
                className="w-6 h-6 absolute top-5 right-5"
              >
                <img
                  className="fill-white"
                  src="/close-button-svgrepo-com.svg"
                  alt="close button"
                />
              </button>
            </li>
            <li>
              <a href="/">inicio</a>
            </li>
            <li>
              <a href="/we">casal</a>
            </li>
            <li>
              <a href="/all">familia</a>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export { NavBar };
