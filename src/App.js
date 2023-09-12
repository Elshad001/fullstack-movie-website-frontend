import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from './slice/contentSlice';




function App() {

  // const [data, setData] = useState([]);
  

  // useEffect(() => {
  //   fetch("/api")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, [])

const dispatch = useDispatch();

useEffect(()=>
{
  dispatch(fetchContent())
},[dispatch])

const contents = useSelector((state)=>state.content.contents)

console.log(contents)
  return (
    <div className="App">
      {contents.map((movie) =>
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
