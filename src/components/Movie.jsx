const Movie = ({ name, actors }) => {
  return (
    <>
      <h2>{name}</h2>
      <div>
        {actors.map(({ name, picture }) => {
          return (
            <article key={name}>
              <img src={picture} alt={name} />
              <span>{name}</span>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Movie;
