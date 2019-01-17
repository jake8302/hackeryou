import React, { Component } from 'react';
//import logo from './logo.svg';
import logo from './tiff.svg';
import './App.css';

var discover_url = "https://api.themoviedb.org/3/discover/movie?api_key=041ff7fe3df8f5abf78dd2b4cd34912a&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019&vote_count.gte=10" 
var imgSrc = "https://image.tmdb.org/t/p/w400"
class App extends Component {
  data = [];
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    // For initial data
    this.fetchData();
  }

  fetchData = () => {
    fetch(discover_url)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          console.log(result.results[0].title);
          console.log(Object.keys(result.results));
          console.log(Object.keys(result.results).length);
          for (let i = 0; i < Object.keys(result.results).length; i++) {
            this.data.push(imgSrc + result.results[i].poster_path);
          }

          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      
  }
  
  buttonClick() {
    alert("pewpewpepwpewppwe");
  }

  getImgUrl=(imageNum)=> {
    return <img src={this.data[imageNum]}></img>;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://www.themoviedb.org/settings/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            API KEY
          </a>
          <button onClick={this.fetchData}>Useless Button</button>
        </header>
        <div id="App-movies">
          {this.getImgUrl(0)}
          {this.getImgUrl(1)}
          {this.getImgUrl(2)}
          {this.getImgUrl(3)}
          {this.getImgUrl(4)}
          {this.getImgUrl(5)}
          {this.getImgUrl(6)}
          {this.getImgUrl(7)}
          {this.getImgUrl(8)}
          {this.getImgUrl(9)}
          {this.getImgUrl(10)}
          {this.getImgUrl(11)}
          {this.getImgUrl(12)}
          {this.getImgUrl(13)}
        </div>

      </div>
    );
  }
}

export default App;
