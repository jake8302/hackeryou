import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './MovieCard.css'

class MovieCard extends React.Component {

  render() {
    return (
    <Flippy
      flipOnHover={false}
      flipOnClick={true}
      flipDirection="horizontal"
      ref={(r) => this.flippy = r}
      style={{ width: '430px', height: '750px' }}
    >
      <FrontSide
      >
        <img src={this.props.img} alt={this.props.title}></img>
       <div className="movieCardDetails">
        <h3>{this.props.title}</h3>
        <h4>Release Date: {this.props.releaseDate}</h4>
       </div>

      </FrontSide>
      <BackSide>
        <div className="movieCardDetails">
          {<p><b>Overview: </b>{this.props.overview || <i>Not Available</i>}</p>}
          {<p><b>Tageline: </b>{this.props.tagline || <i>Not Available</i>}</p>}
          {<p><b>Genres: </b>{this.props.genres || <i>Not Available</i>}</p>}
          {<p><b>Runtime: </b>{this.props.runtime || <i>Not Available</i>}</p>}
        </div>
      </BackSide>
    </Flippy>
    )
  }
}

export default MovieCard;