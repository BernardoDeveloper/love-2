import { BannerText } from '../components/bannerText';
import { NavBar } from '../components/navBar';

import { motion } from 'framer-motion';

function Layout({ title, img, imagesArray, children }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-5 w-full"
    >
      <NavBar title={title} />

      <BannerText imgSrc={`https://i.imgur.com/${img}`} />

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
