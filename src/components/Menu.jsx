import Button from "./Button";

const Menu = ({ data, setMovieId }) => {
  return (
    <nav>
      {data.map(({ id, name }) => {
        return <Button key={id} name={name} id={id} setMovieId={setMovieId} />;
      })}
    </nav>
  );
};

export default Menu;
