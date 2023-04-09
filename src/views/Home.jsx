// components
import { Banner } from '../components/banner';
import { Intro } from '../components/intro';
import { NavBar } from '../components/navBar';

function Home() {
  return (
    <section className="space-y-5">
      <NavBar title="Love" />

      <Banner imgSrc="https://i.imgur.com/zcr8Sb9.jpg" />
      <Intro />
    </section>
  );
}

export { Home };
