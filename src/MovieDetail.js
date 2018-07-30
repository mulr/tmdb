import React, { Component } from 'react';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

class MovieDetail extends Component {

  state = {
    movie: []
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=dedc57357ee4715c48f64dd5ca30c8f6&language=en-US`);
      const movie = await res.json();
      this.setState({
        movie,
      })
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    //Deconstructing - rather than this.state.movie for everything
    const { movie } = this.state;
    
    return (
        <div>
            <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
        </div>
    );
  }
}

export default MovieDetail;