const Button = ({ id, name, setMovieId }) => {
  return (
    <button
      onClick={() => {
        setMovieId(id);
      }}
    >
      {name}
    </button>
  );
};

export default Button;
