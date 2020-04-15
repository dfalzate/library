import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/Login';
import SignUp from './pages/Signup';
import CreateCategories from './pages/CreateCategory';
import CreateBook from './pages/CreateBook';
import { connect } from 'react-redux';

function PrivateLink(props) {
  if (!props.isLogged) {
    return (
      <nav>
        <Link to="/users/signup">Signup</Link>
        <Link to="/users/login">Login</Link>
        <Redirect from="*" to="/users/signup" />
      </nav>
    );
  } else {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Crear categoria</Link>
        <Redirect from="*" to="/" />
      </nav>
    );
  }
}

function App(props) {
  return (
    <div className="App">
      <Router>
        <PrivateLink isLogged={props.isLogged} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/signup" component={SignUp} />
          <Route exact path="/users/login" component={LogIn} />
          <Route exact path="/categories" component={CreateCategories} />
          <Route exact path="/books" component={CreateBook} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLogged: state.loginReducer.isLogged,
});

export default connect(mapStateToProps)(App);
