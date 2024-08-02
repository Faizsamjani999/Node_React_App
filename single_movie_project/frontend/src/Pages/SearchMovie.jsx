import React, { useState } from 'react'
import Header from "../Component/Header"
import "./SearchMovie.modules.css"
import { useDispatch, useSelector } from "react-redux"
import { fetchAction } from '../Redux/SearchMovieReducer/action';
import { movieReducer } from "../Redux/SearchMovieReducer/movieReducer"

function SearchMovie() {
  const [state,setState] = useState();

  const handleChange = (e)=>{
    setState(e.target.value)
  }
  // console.log(state);

  const selector = useSelector((val)=>val.movieReducer)
  console.log(selector);

  const dispatch = useDispatch()

  const handleClick = ()=>{
    dispatch(fetchAction)(state)
  }
  return (
    <div id='main'>
      <div id='headerMain'>
        <Header />
      </div>
      <div id="sub">
      <input type="text" placeholder="Enter Movie Name" id="inputTag" onChange={handleChange} />
      <button onClick={handleClick}>SHOW</button>
      </div>
      <div id="design">
        <div id="designSub">
            <div id="box1">
              <div id="box1small">
                <img src={selector.data.Poster} alt="" />
              </div>
            </div>
            <div id="box2">
              <h1>Movie Name - {selector.data.Title}</h1>
              <h1>Actor - {selector.data.Actors}</h1>
              <h2>Cateogry - {selector.data.Genre}</h2>
              <h2>Director - {selector.data.Director}</h2>
              <h2>BoxOffice Collection - {selector.data.BoxOffice}</h2>
              <h2>Released Date - {selector.data.Released}</h2>
              <h2>Writer - {selector.data.Writer}</h2>
              <h2>IMDB Rating - {selector.data.imdbRating}</h2>
              <h2>Award - {selector.data.Awards}</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SearchMovie