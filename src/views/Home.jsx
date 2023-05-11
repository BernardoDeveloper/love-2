import { Banner } from '../components/banner';
import { Intro } from '../components/intro';
import { NavBar } from '../components/navBar';

import { motion } from 'framer-motion';
import { transition } from '../handlers/animation';

function Home() {
  return (
    <motion.section
      initial={{ opacity: transition.initial }}
      animate={{ opacity: transition.animate }}
      exit={{ opacity: transition.exit }}
      transition={{ duration: transition.transition }}
      className="space-y-5"
    >
      <NavBar title="Love" />

      <Banner imgSrc="https://i.imgur.com/AkKQ0IX.jpg" profile />
      <Intro />
    </motion.section>
  );
}

export { Home };
