import { useEffect, useState } from 'react';
import './App.css';




function App() {

  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [])

  return (
    <div className="App">
      {data.map((movie) =>
      (
        <div key={movie.id}>
          <p>{movie.name}</p>
          <img src={movie.image} alt='' width="100px" height="120px"/>
          <div>
            <span>{movie.year}</span>
            <br></br>
            <span>{movie.raiting}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
