function BannerText({ imgSrc }) {
  return (
    <div className="space-y-3">
      <img
        src={imgSrc}
        alt="banner image"
        className="rounded-3xl h-64 w-full object-cover"
      />
    </div>
  );
}

export { BannerText };
