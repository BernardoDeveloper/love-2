import { Link } from 'react-router-dom';

function ButtonLink({ link, children, bg }) {
  return (
    <Link
      to={'/' + link}
      className={`rounded-full py-3 px-10 font-semibold transition-all duration-200 ${
        bg
          ? 'bg-black/90 hover:bg-black/80 text-white border-2 border-black/90 hover:border-black/10'
          : 'border-2 border-black/20 hover:border-black/40'
      }`}
    >
      {children}
    </Link>
  );
}

export { ButtonLink };
