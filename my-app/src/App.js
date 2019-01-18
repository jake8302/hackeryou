import React, { Component } from 'react';
import logo from './tiff.svg';
import './App.css';
import MovieCard from './MovieCard.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.testingStuff = []
    this.movieInfo = {
      title: [],
      poster_path: []
    }
    this.state = {
      error: null,
      isLoaded: false,
    };

    this.moviePoster = []
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
          const movie = result.results;
          var movieRows = [];
          movie.forEach(movie => {
            const testUrl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=041ff7fe3df8f5abf78dd2b4cd34912a&language=en-US`;
            fetch(testUrl)
            .then(res => res.json()
            .then(
              (movie) => {
                //console.log(result.overview);
                movie.poster_src = "https://image.tmdb.org/t/p/w400" + movie.poster_path;
                const testCard = <MovieCard 
                  img={<img src={movie.poster_src} alt={movie.title}></img>} 
                  title={<p>{movie.title}</p>}
                  overview={<p>{movie.overview}</p>}
                  tagline={<p>{movie.tagline}</p>}
                  runtime={<p>{movie.runtime}</p>}
                ></MovieCard>
                movieRows.push(testCard);
                this.setState({
                  isLoaded: true,
                });
              }
            ));
          });
          this.moviePoster = movieRows;
          console.log(this.movieInfo);
          /*const test = <CardExample></CardExample>
          this.testingStuff = test;*/
          this.setState({
            isLoaded: true,
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
            <img height="50vmin" src={logo}></img>
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
          {this.moviePoster}
        </div>
      </div>
    );
  }
}

export default App;
