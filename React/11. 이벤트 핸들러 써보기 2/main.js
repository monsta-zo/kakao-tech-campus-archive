const rootElement = document.getElementById("root");

const App = () => {
  const [data, setDate] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch("https://example.com")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setDate(myJson);
      })
      .catch((error) => setError(error.message));
  }, []);
  if (error != null) {
    return <p>{error}</p>;
  }
  if (data == null) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <p>People</p>
      {data.people.map((person) => {
        <div>
          <span>name: {person.name} </span>
          <span>age: {person.age}</span>
        </div>;
      })}
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
