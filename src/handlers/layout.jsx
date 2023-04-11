import { BannerText } from '../components/bannerText';
import { NavBar } from '../components/navBar';

function Layout({ title, img, imagesArray, children }) {
  return (
    <section className="space-y-5 w-full">
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
    </section>
  );
}

export { Layout };
