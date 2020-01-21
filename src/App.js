import React, { Component } from 'react';
import mulan_movie_poster from './mulan-movie-poster.jpeg';
import titanic_kodflix from './titanic-kodflix.jpg';
import pirates from './pirates.jpg';
import chocolat_movie_poster from './chocolat-movie-poster.jpg';
import forrest_gump from  './forrest_gump.jpg';
import a_star_is_born from './a_star_is_born.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App"> 
      <div className='container'>
        <div className='item'>
          <img src={mulan_movie_poster} alt='mulan_movie_poster' />
          <div className='overlay'>
            <h3> MULAN </h3>
          </div>
        </div>
        <div className='item'>
          <img src={titanic_kodflix} alt='titanic-kodflix' />
          <div className='overlay'>
          <h3> TITANIC </h3>
          </div>
        </div>
        <div className='item'>
          <img src={pirates} alt='pirates' />
          <div className='overlay'>
          <h3>PIRATES OF THE CARRIBEAN </h3>
          /</div>
        </div>
      </div>

      <div className='container'> 
        <div className='item'>
          <img src={chocolat_movie_poster} alt='chocolate_movie_poster' />
          <div className='overlay'>
          <h3> CHOCOLAT </h3>
          </div>
        </div> 
        <div className='item'>
          <img src={forrest_gump} alt='forrest_gump' />
          <div className='overlay'>
          <h3> FORREST GUMP </h3>
          </div>
        </div> 
        <div className='item'>
          <img src={a_star_is_born} alt='a_star_is_born' />
          <div className='overlay'>
          <h3> A STAR IS BORN </h3>
          </div>
        </div>
      </div> 
      <MovieTitle name='Mulan' />
      <MovieTitle name='Titanic'/>
      <MovieTitle name='Pirates of the Carribean'/>
      <MovieTitle name=''
      />
    </div>
    );
  }
}
  
function MovieTitle(props) {
  return (
    <div className='item'>
      <img src={props.logo} alt={ `${props.name} logo`}  />
      <div className='overlay'>
        <h1>{props.name}</h1>

      </div>
    </div>
  )
}
export default App;
