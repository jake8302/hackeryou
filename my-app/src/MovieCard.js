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
      style={{ width: '440px', height: '700px' }} /// these are optional style, it is not necessary
    >
      <FrontSide
        /*style={{
          backgroundColor: '#41669d',
        }}*/
      >
        {this.props.img}
        <h3>{this.props.title}</h3>
      </FrontSide>
      <BackSide
        /*style={{ backgroundColor: '#175852'}}*/>
        {this.props.overview}<br></br>
        {this.props.tagline}<br></br>
        {this.props.genres}<br></br>
        {this.props.runtime}<br></br>

      </BackSide>
    </Flippy>
    )
  }
}

export default MovieCard;