import React from 'react';
import FormLogin from '../components/formLogin.component';

function Login(props) {
  return (
    <div>
      <h1>Log in</h1>
      <FormLogin history={props.history} />
    </div>
  );
}

export default Login;
