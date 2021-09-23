import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import User from './components/User';
import { authenticate } from './store/session';
import Home from './components/Home';
import Games from './components/Games'
import SearchQuestions from './components/Search-Questions'
import NavBar from './components/NavBar';
import {getGames} from './store/games'





function App() {
  const [loaded, setLoaded] = useState(false);
  const [gamesLoaded, setGamesLoaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
      await dispatch(getGames());
      setGamesLoaded(true);
    })();
    

  }, [dispatch]);




  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/games' exact={true}>
          <Games user={user}/>
        </Route>
        <Route path='/search-questions'>
          <SearchQuestions user={user} gamesLoaded={gamesLoaded}/>
        </Route>
        <Route path='/' exact={true}>
          <Home user={user}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
