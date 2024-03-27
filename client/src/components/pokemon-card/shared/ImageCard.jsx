const ImageCard = ({ filterColor, url, name }) => {
  return (
    <div
      style={{
        filter: `drop-shadow(0 0 10px ${
          // colors[pokemon.types.split(",")[0]]
          filterColor
        })`,
        marginRight: "20px",
      }}
    >
      <img className="image" src={url} alt={name} />
    </div>
  );
};

export default ImageCard;
