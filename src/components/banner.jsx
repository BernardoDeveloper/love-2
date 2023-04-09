function Banner({ imgSrc }) {
  return (
    <img
      src={imgSrc}
      alt="banner image"
      className="rounded-3xl h-96 w-full object-cover object-top"
    />
  );
}

export { Banner };
