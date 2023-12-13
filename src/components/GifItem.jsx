export const GifItem = ({ title, url, id }) => {
  return (
    <div className="card">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={url} alt={title} />
        <h1>{"Descargar"}</h1>
      </a>
    </div>
  );
};
