import { Link } from 'react-router-dom';

function ButtonLink({ link, children, bg }) {
  return (
    <Link
      to={'/' + link}
      className={`rounded-full py-3 px-10 font-semibold ${
        bg
          ? 'bg-black/90 text-white border-2 border-black/90'
          : 'border-2 border-black/20'
      }`}
    >
      {children}
    </Link>
  );
}

export { ButtonLink };
