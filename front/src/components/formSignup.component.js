import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  onChangeEmailSignup,
  onChangePasswordSignup,
  onChangeSelectSignup,
} from '../reducers/signup.reducer';

function FormSignup(props) {
  const { history } = props;
  const onSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: props.email,
      password: props.password,
      type: props.type,
    };
    try {
      axios({
        method: 'post',
        url: 'http://localhost:3000/users/signup',
        data: user,
      }).then((data) => {
        if (data.status === 200) {
          alert('User created!');
          history.push('/users/login');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="signup" onSubmit={onSubmit}>
      <label>Email </label>
      <input
        type="text"
        name="email__signup"
        id="email__signup"
        onChange={props.onChangeEmailSignup}
      />
      <label>Password </label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={props.onChangePasswordSignup}
      />
      <select name="type" id="type" onChange={props.onChangeSelectSignup}>
        <option value="admin">Administrador</option>
        <option value="author">Autor</option>
        <option value="lector">Lector</option>
      </select>
      <button>crear</button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.signupReducer.emailSignup,
    password: state.signupReducer.passwordSignup,
    type: state.signupReducer.typeSignup,
  };
};

const mapDispatchToProps = {
  onChangeEmailSignup,
  onChangePasswordSignup,
  onChangeSelectSignup,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSignup);
