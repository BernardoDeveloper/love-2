import { BannerText } from '../components/bannerText';
import { NavBar } from '../components/navBar';

function Casal() {
  const images = [
    { link: 'AzbnE53.jpg' },
    { link: 'LHB99cF.jpg' },
    { link: 'Ym5kKCl.jpg' },
    { link: 'gUhVNqi.jpg' },
    { link: '04KIQuc.jpg' },
    { link: 'yuOPTSl.jpg' },
    { link: 'ZAlHGtR.jpg' },
    { link: 'QrOidIo.jpg' },
    { link: '057B6WW.jpg' },
    { link: 'Jb6M6nL.jpg' },
    { link: 'LUtqEGu.jpg' },
    { link: 'o0hwcCl.jpg' },
    { link: 'L06gW1B.jpg' },
    { link: 'KzYXpJb.jpg' },
    { link: 'Y3JiL1Y.jpg' },
    { link: 'bgYvOYI.jpg' },
    { link: 'l8yqDOE.jpg' },
    { link: 'dxdaCbi.jpg' },
    { link: 'JLSM5Sn.jpg' },
    { link: '75DfSE0.jpg' },
    { link: 'flrSX4g.jpg' },
    { link: 'MrXDM56.jpg' },
    { link: 'odSjIQa.jpg' },
    { link: 'ElzzcwL.jpg' },
    { link: 'D68EAnr.jpg' },
    { link: 'VTJGMMw.jpg' },
    { link: '8CuwcBl.jpg' },
    { link: 'epjXv8T.jpg' },
    { link: 'op9wJuV.jpg' },
    { link: 'VcuFcmB.jpg' },
    { link: 'k47mKUj.jpg' },
    { link: '7rGVCx8.jpg' },
    { link: '1OuC465.jpg' },
    { link: 'fQCd6nl.jpg' },
    { link: 'dzlWBIK.jpg' },
    { link: 'RLghM9r.jpg' },
    { link: 'AkKQ0IX.jpg' },
    { link: '5g32aRe.jpg' },
    { link: 'p72WDqK.jpg' },
    { link: 'maelfOQ.jpg' },
    { link: 'SPRB4bT.jpg' },
    { link: '7S3Szhu.jpg' },
    { link: 'bSDCBX1.jpg' },
    { link: 'pwRNadm.jpg' },
    { link: 'XcqDGnq.jpg' },
    { link: '3hjDIPG.jpg' },
    { link: '1anAk49.jpg' },
    { link: 'yE3UwFl.jpg' },
  ];

  return (
    <section className="space-y-5 w-full">
      <NavBar title="Casal" />

      <BannerText imgSrc="https://i.imgur.com/od7mDco.jpg" />

      <p className="font-karla text-xl font-medium pb-10">
        Um cantinho para o casal mais lindo desse universo.
      </p>

      <div className="columns-2 gap-3 w-full mx-auto space-y-3 pb-28">
        {images.map((image, index) => (
          <div
            className="bg-gray-200 break-inside-avoid rounded-xl"
            key={index}
          >
            <img
              src={'https://i.imgur.com/' + image.link}
              alt="casal image"
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export { Casal };
