// components
import { Banner } from '../components/banner';
import { Intro } from '../components/intro';
import { NavBar } from '../components/navBar';

import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-5"
    >
      <NavBar title="Love" />

      <Banner imgSrc="https://i.imgur.com/zcr8Sb9.jpg" />
      <Intro />
    </motion.section>
  );
}

export { Home };
