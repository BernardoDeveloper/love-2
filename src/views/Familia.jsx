import { BannerText } from '../components/bannerText';
import { NavBar } from '../components/navBar';

function Familia() {
  const images = [
    { link: 'noJemYg.jpg' },
    { link: 'zCzdIxm.jpg' },
    { link: 'oqtxK8t.jpg' },
    { link: 'OXlhCWs.jpg' },
    { link: '2GJ5RNN.jpg' },
    { link: 'prt8TgB.jpg' },
    { link: '0WB3tey.jpg' },
    { link: 'dRhbJwi.jpg' },
    { link: 'YNLLzlS.jpg' },
    { link: 'k9gLx65.jpg' },
    { link: 'tNMjkXg.jpg' },
    { link: 'qAbuL9m.jpg' },
    { link: 'qyKIVaS.jpg' },
    { link: 'KsV0JhC.jpg' },
    { link: 'qEFk5ZA.jpg' },
    { link: 'QPrJ7wI.jpg' },
    { link: 'iAybbtT.jpg' },
    { link: 'VUYHD8d.jpg' },
    { link: 'oEkWe43.jpg' },
    { link: '1ICLmg9.jpg' },
    { link: 'qE4GB8T.jpg' },
    { link: 'b0RzPXh.jpg' },
    { link: 'NIsY1dG.jpg' },
    { link: 'CjnxLSa.jpg' },
    { link: 'lb4iUKq.jpg' },
    { link: 'I120MyL.jpg' },
    { link: 'oPvdRdp.jpg' },
    { link: 'PHHMxhI.jpg' },
    { link: '42nwVAF.jpg' },
  ];

  return (
    <section className="space-y-5 w-full">
      <NavBar title="Familia" />

      <BannerText imgSrc="https://i.imgur.com/jUOdNim.jpg" />

      <p className="font-karla text-xl font-medium pb-10">
        Uma familia linda e maravilhosa muito abençoada por Deus.
      </p>

      <div className="columns-2 gap-3 w-full mx-auto space-y-3 pb-28">
        {images.map((image, index) => (
          <div
            className="bg-gray-200 break-inside-avoid rounded-xl"
            key={index}
          >
            <img
              src={'https://i.imgur.com/' + image.link}
              alt="family image"
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export { Familia };
