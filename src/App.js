import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from './slice/contentSlice';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import MovieSlider from './components/MovieSlider';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent())
  }, [dispatch])

  const contents = useSelector((state) => state.content.contents)
  const [filteredMovies,setFilteredMovies] =useState(contents)


  return (
    <div className="">
      <Header contents={contents} filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies}/>
      <MovieSlider contents={contents}/>
      <MovieCard  contents={contents} filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies} />
    </div>
  );
}

export default App;
