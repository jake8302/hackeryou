import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class MovieCard extends React.Component {

  render() {
    return (
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: '440px', height: '720px' }} /// these are optional style, it is not necessary
    >
      <FrontSide
        /*style={{
          backgroundColor: '#41669d',
        }}*/
      >
        <img src={this.props.img} alt={this.props.title}></img>
        <h3>{this.props.title}</h3>
        <h4>Release Date: {this.props.releaseDate}</h4>
      </FrontSide>
      <BackSide
        /*style={{ backgroundColor: '#175852'}}*/>
        {<p>Overview: {this.props.overview || "Not Available" }</p>}
        {<p>Tageline: {this.props.tagline || "Not Available"}</p>}
        {<p>Genres: {this.props.genres}</p>}
        {<p>Runtime: {this.props.runtime || "Not Available"}</p>}

      </BackSide>
    </Flippy>
    )
  }
}

export default MovieCard;