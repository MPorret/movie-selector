import Movie from "./Movie";

const Main = ({ movieChosen }) => {
  const { name, actors, id } = movieChosen;

  return (
    <main>
      <Movie name={name} actors={actors} key={id} />;
    </main>
  );
};

export default Main;
