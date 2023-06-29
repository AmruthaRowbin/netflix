
import React from 'react';
 import {comedyMovies,action,orginals ,HorrorMovies,Documentaries} from './urls'
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';



function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={orginals} title="Netflix Orginals"/>
    <RowPost url={action} title="Action" isSmall/>
    <RowPost url={comedyMovies} title="comedy" isSmall/>
    <RowPost url={HorrorMovies} title="Horror" isSmall/>
    <RowPost url={Documentaries} title="Documentaries" isSmall/>
    
    
   
    </div>
  );
}

export default App;
