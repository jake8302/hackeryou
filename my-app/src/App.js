import React, { Component } from 'react';
import logo from './tiff.svg';
import './App.css';
import MovieCard from './MovieCard.js'

const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movieCards: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const discoverUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019&vote_count.gte=10`;
    fetch(discoverUrl)
      .then(res => res.json())
      .then(
        (result) => {
          const movies = result.results;
          movies.forEach(movie => {
            const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=en-US`;
            fetch(movieDetailsUrl)
            .then(res => res.json()
            .then(
              (movie) => {
                movie.poster_src = "https://image.tmdb.org/t/p/w400" + movie.poster_path;
                const genresArry = [];
                movie.genres.forEach(genres=>{
                  genresArry.push(genres.name);
                })
                const movieCard = <MovieCard key={movie.id} 
                  releaseDate = {movie.release_date}
                  img={movie.poster_src} 
                  title={movie.title}
                  overview={movie.overview}
                  tagline={movie.tagline}
                  genres={genresArry.join(', ')}
                  runtime={movie.runtime}
                ></MovieCard>
                this.setState({
                  isLoaded: true,
                  movieCards:[...this.state.movieCards, movieCard]
                });
              }
            ));
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    this.state.movieCards.sort(function compare(a,b) {
      if (a.props.releaseDate < b.props.releaseDate)
        return 1;
      if (a.props.releaseDate > b.props.releaseDate)
        return -1;
      return 0;
    });
    return (
      <div className="App">
        <nav>
          <div className="titleBar">
            <img height="50vmin" src={logo} alt=""></img>
          </div>
        </nav>
        <div className="title">
            <h1>Latest Release From 2019!</h1>
        </div>
        <div className="moviePoster">
          {this.state.movieCards}
        </div>
      </div>
    );
  }
}

export default App;
