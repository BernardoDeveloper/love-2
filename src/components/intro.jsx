import { ButtonLink } from '../handlers/buttonLink';

const months = () => {
  return Math.floor(
    (new Date() - new Date('September 24, 2022')) / 1000 / 60 / 60 / 24 / 30
  );
};

function Intro() {
  return (
    <section className="flex flex-col justify-between items-center space-y-10">
      <div className="space-y-3">
        <h2 className="w-full text-2xl font-bold text-start">Eternamente:</h2>

        <p className="font-karla text-black/80">
          {months()} meses perfeitos e maravilhosos. Aynoã, você é o amor da
          minha vida. Eu te agradeço por tudo, não existe palavras que consiga
          descrever nosso amor.
        </p>
      </div>

      <div className="flex items-center space-x-5">
        <ButtonLink link="all">familia</ButtonLink>
        <ButtonLink link="we" bg>
          casal
        </ButtonLink>
      </div>
    </section>
  );
}

export { Intro };
