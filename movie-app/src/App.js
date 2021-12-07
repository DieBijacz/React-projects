import React, {useEffect, useState} from "react";
import { Movie } from "./components/Movie";

// const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

export default function App() {
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([])
  const [searchedTerm, setSearchedTerm] = useState('')
  
  const incrementPage = () => { 
    setPage(pageN => pageN + 1)
  }
  const decrementPage = () => {
    page > 1 ? setPage(pageN => pageN - 1) : alert('you are on first page')
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if(searchedTerm) {
      getMovies(`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${searchedTerm}`)
      setSearchedTerm('')
    }
  }

  const handleOnChange = (e) => {
    setSearchedTerm(e.target.value)
  }

  // `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`

  const getMovies = (API) => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      setMovies(data.results)
    })
  }

  useEffect(() => {
    getMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`)
  },[page])

  return (
    <>
      <header>
        <div className='header-buttons'>
          <button onClick={decrementPage}><i class="fas fa-angle-left"></i></button>
          <button onClick={() => setPage(1)}>Main Page</button>
          <button onClick={incrementPage}><i class="fas fa-angle-right"></i></button>
        </div>
        <form onSubmit={handleOnSubmit}>
          <input onChange={handleOnChange} className="searchbar" type="search" placeholder="Search..." value={searchedTerm}/>
        </form>
      </header>
      <div className='movies'>{movies.length > 0 && //only if there are movies
        movies.map(movie => 
          //use ... to spread prop and pass them seperatly
        <Movie key={movie.id} {...movie} />
      )}</div>
    </>
  );
}