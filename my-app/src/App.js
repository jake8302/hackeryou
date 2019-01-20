import React, { Component } from 'react';
import logo from './tiff.svg';
import './App.css';
import MovieCard from './MovieCard.js'

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
    const discoverUrl = "https://api.themoviedb.org/3/discover/movie?api_key=041ff7fe3df8f5abf78dd2b4cd34912a&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019&vote_count.gte=10";
    fetch(discoverUrl)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.results);
          const movies = result.results;
          movies.forEach(movie => {
            const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=041ff7fe3df8f5abf78dd2b4cd34912a&language=en-US`;
            fetch(movieDetailsUrl)
            .then(res => res.json()
            .then(
              (movie) => {
                movie.poster_src = "https://image.tmdb.org/t/p/w400" + movie.poster_path;
                const genresArry = [];
                movie.genres.forEach(genres=>{
                  genresArry.push(genres.name);
                })
                console.log(genresArry);
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

    return (
      <div className="App">
        <nav>
          <div className="titleBar">
            <img height="50vmin" src={logo} alt=""></img>
          </div>         
          <ul>
            <li>Festivals</li>
            <li>Festivals</li>
            <li>Festivals</li>
            <li>Festivals</li>
            <li>Festivals</li>
            <li>Festivals</li>
          </ul>
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
