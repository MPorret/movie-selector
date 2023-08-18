import Button from "./Button";

const Menu = ({ data, setShow, setMovieId }) => {
  return (
    <nav>
      {data.map(({ id, name }) => {
        return (
          <Button
            key={id}
            name={name}
            id={id}
            setShow={setShow}
            setMovieId={setMovieId}
          />
        );
      })}
    </nav>
  );
};

export default Menu;
