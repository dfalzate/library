import React from 'react';
import FormSignUp from '../components/formSignup.component';

function SignUp(props) {
  return (
    <div>
      <h1>Signup</h1>
      <FormSignUp history={props.history} />
    </div>
  );
}

export default SignUp;
