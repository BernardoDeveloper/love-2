import { Banner } from '../components/banner';
import { NavBar } from '../components/navBar';

import { motion } from 'framer-motion';
import { transition } from './animation';

function Layout({ title, img, imagesArray, children }) {
  return (
    <motion.section
      initial={{ opacity: transition.initial }}
      animate={{ opacity: transition.animate }}
      exit={{ opacity: transition.exit }}
      transition={{ duration: transition.transition }}
      className="space-y-5 w-full"
    >
      <NavBar title={title} />

      <Banner imgSrc={`https://i.imgur.com/${img}`} />

      <p className="font-karla text-xl font-medium pb-10">{children}</p>

      <div className="columns-2 gap-3 w-full mx-auto space-y-3 pb-28">
        {imagesArray.map((image, index) => (
          <div
            className="bg-gray-200 break-inside-avoid rounded-xl"
            key={index}
          >
            <img
              src={'https://i.imgur.com/' + image.link}
              alt={`image number ${index}`}
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export { Layout };
