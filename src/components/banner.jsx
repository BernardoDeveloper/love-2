function Banner({ imgSrc, profile }) {
  return (
    <div className="space-y-3">
      <img
        src={imgSrc}
        alt="banner image"
        className={`rounded-3xl w-full object-cover ${profile ? 'h-96 object-top' : 'h-64'
          }`}
      />
    </div>
  );
}

export { Banner };
