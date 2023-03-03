// const APIKEY = "14a4e4ac3e504e4c8ccd5573857f03d3";

const requests = {
  fetchTrending:
    "https://api.themoviedb.org/3/trending/all/week?api_key=14a4e4ac3e504e4c8ccd5573857f03d3&language=en-US",
  fetchNetflixOriginals:
    "https://api.themoviedb.org/3/discover/tv?api_key=14a4e4ac3e504e4c8ccd5573857f03d3&with_networks=213",
  fetchTopRated:
    "https://api.themoviedb.org/3/movie/top_rated?api_key=14a4e4ac3e504e4c8ccd5573857f03d3&language=en-US",
  fetchTopActionMovies:
    "https://api.themoviedb.org/3/discover/movie?api_key=14a4e4ac3e504e4c8ccd5573857f03d3&with_genres=28",
  fetchTopComedyMovies:
    "https://api.themoviedb.org/3/discover/movie?api_key=14a4e4ac3e504e4c8ccd5573857f03d3&with_genres=35",
  fetchTopHorrorMovies:
    "https://api.themoviedb.org/3/discover/movie?api_key=14a4e4ac3e504e4c8ccd5573857f03d3&with_genres=27",
  fetchTopRomanceMovies:
    "https://api.themoviedb.org/3/discover/movie?api_key=14a4e4ac3e504e4c8ccd5573857f03d3&with_genres=10749",
  fetchTopDocumentaries:
    "https://api.themoviedb.org/3/discover/movie?api_key=14a4e4ac3e504e4c8ccd5573857f03d3&with_genres=99",
};
export default requests;
