import { Banner } from '../components/banner';
import { NavBar } from '../components/navBar';
import { Bold } from '../handlers/bold';

function Love() {
  return (
    <section className="w-full space-y-5">
      <NavBar title="My Love" />

      <Banner imgSrc="https://i.imgur.com/04KIQuc.jpg" />

      <p className="font-karla text-xl font-medium">
        Meu amor pela minha princesa <Bold>Aynoã</Bold>{' '}
      </p>

      <p className="bg-white border-l-2 border-black p-5 rounded-lg shadow-lg">
        O amor que eu sinto por você não poderia ser descrito por palavras,
        somente agradeço a <Bold>Deus</Bold> todos os dias em minhas orações por
        ter colocado você no meu caminho.
        <br />
        <Bold>Obrigado por tudo meu anjo.</Bold>
      </p>

      <p>
        Amor, você é tão <Bold>especial</Bold> e <Bold>maravilhosa</Bold> que
        não consegue nem IMAGINAR, é perfeito ter você ao meu lado como a minha
        companheira. Sempre me ajuda em tudo e está sempre comigo.
      </p>

      <h3 className="font-montserrat text-medium text-xl text-center">
        ~ EU TE AMO ~
      </h3>
    </section>
  );
}

export { Love };
