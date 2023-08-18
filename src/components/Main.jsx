import Movie from "./Movie";

const Main = ({ data, movieId }) => {
  return (
    <main>
      {data.map(({ id, name, actors }) => {
        if (movieId === id) {
          return <Movie name={name} actors={actors} key={id} />;
        } else {
          return null;
        }
      })}
    </main>
  );
};

export default Main;
