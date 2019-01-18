import React, { Component } from 'react';
import logo from './tiff.svg';
import './App.css';

var imgSrc = "https://image.tmdb.org/t/p/w400"
class App extends Component {
  constructor(props) {
    super(props);
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
            movie.poster_src = "https://image.tmdb.org/t/p/w400" + movie.poster_path;
            const movieRow = <img src={movie.poster_src} hspace="20" vspace="20"></img>;
            movieRows.push(movieRow);
            const testUrl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=041ff7fe3df8f5abf78dd2b4cd34912a&language=en-US`;
            fetch(testUrl)
            .then(res => res.json()
            .then(
              (result) => {
                console.log(result.overview);
              }
            ));
          });
          this.moviePoster = movieRows;
          console.log(this.movieInfo);
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
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img height="50vmin" src={logo}></img>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="title">
          <h1>Latest Release From 2019!</h1>
        </div>
        <div className="moviesBody">
          {this.moviePoster}
        </div>
      </div>
    );
  }
}

export default App;
