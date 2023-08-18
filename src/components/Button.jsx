const Button = ({ id, name, setShow, setMovieId }) => {
  return (
    <button
      onClick={() => {
        setMovieId({ id });
        if (id === "112233") {
          setShow("harry");
        } else if (id === "223344") {
          setShow("ring");
        } else if (id === "334455") {
          setShow("starwars");
        }
      }}
    >
      {name}
    </button>
  );
};

export default Button;
