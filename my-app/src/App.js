import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var discover_url = "https://api.themoviedb.org/3/discover/movie?api_key=041ff7fe3df8f5abf78dd2b4cd34912a&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019&vote_count.gte=10" 
var imgSrc = "https://image.tmdb.org/t/p/w500"
class App extends Component {
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
          this.data = result.results[0].backdrop_path;
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

  getImgUrl=()=> {
    return (imgSrc + this.data);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
              Hello World!
          </p>
          <a
            className="App-link"
            href="https://www.themoviedb.org/settings/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            API KEY
          </a>
          <button onClick={this.fetchData}>Useless Button</button>
          <img src={this.getImgUrl()}></img>
        </header>
      </div>
    );
  }
}

export default App;
