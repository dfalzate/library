import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  onEmailChangeLogin,
  onPasswordChangeLogin,
  isLogged,
} from '../reducers/login.reducer';

function FormLogin(props) {
  const { history } = props;
  const onSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: props.email,
      password: props.password,
    };
    axios({
      method: 'post',
      url: 'http://localhost:3000/users/login',
      data: user,
    }).then((data) => {
      if (data.status === 200) {
        sessionStorage.setItem('token', data.data);
        history.push('/');
        props.isLogged();
      }
    });
  };
  return (
    <form className="login" onSubmit={onSubmit}>
      <label>Email</label>
      <input
        type="text"
        name="email__login"
        id="email__login"
        onChange={props.onEmailChangeLogin}
      />
      <label>Password</label>
      <input
        name="password"
        type="password"
        id="password"
        onChange={props.onPasswordChangeLogin}
      />
      <button>Login</button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.loginReducer.emailLogin,
    password: state.loginReducer.passwordLogin,
    isLogged: state.loginReducer.isLogged,
  };
};

const mapDispatchToProps = {
  onEmailChangeLogin,
  onPasswordChangeLogin,
  isLogged,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
