import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import NavigationMenu from './NavigationMenu';
import TopRatedIndia from './IndianTopRated';
import CommingSoon from './CommingSoon';
import TopRated from './TopratedMovies';
import './app.css';
import RunningMovies from './NowPlaying';

const App = () => {
    return (
        <>
            <NavigationMenu />
            <Routes>


                <Route path='' element={<Home />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/moviesintheaters' element={<RunningMovies />}></Route>
                <Route path='/moviescoming' element={<CommingSoon />}></Route>
                <Route path='/topratedindia' element={<TopRatedIndia />}></Route>
                <Route path='/topratedmovies' element={<TopRated />}></Route>
                {/* <Route path='/favourit' element={< />}></Route> */}

            </Routes>
        </>
    );
};

export default App;