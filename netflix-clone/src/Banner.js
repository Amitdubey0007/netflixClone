import React, { useEffect, useState } from "react";
import requests from "./requests";
import axios from "axios";
import "./Banner.css";

function Banner() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    // async function fetchData() {
    //   const response = await fetch(requests.fetchNetflixOriginals);
    //   const data = await response.json();
    //   setMovies(data[Math.floor(Math.random() * data.length - 1)]);
    //   return data;
    //   //   console.log(data, "@@@@@@@@@@");
    // }
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("http://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}>
      <div className="banner_contents">
        {/* title */}
        <h1 className="banner_title">
          {movies?.name || movies?.title || movies?.original_name}
        </h1>
        {/* buttons  */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        {/* description */}
        <h1 className="banner_description">
          {truncate(movies?.overview, 150)}
        </h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner;
