const EMAILCHANGESIGNUP = 'EMAILCHANGESIGNUP';
const PASSWORDCHANGESIGNUP = 'PASSWORDCHANGESIGNUP';
const SELECTCHANGESIGNUP = 'SELECTCHANGESIGNUP';

export function onChangeEmailSignup(event) {
  return function (dispatch) {
    dispatch({ type: EMAILCHANGESIGNUP, payload: event.target.value });
  };
}

export function onChangePasswordSignup(event) {
  return function (dispatch) {
    return dispatch({
      type: PASSWORDCHANGESIGNUP,
      payload: event.target.value,
    });
  };
}

export function onChangeSelectSignup(event) {
  return function (dispatch) {
    return dispatch({
      type: SELECTCHANGESIGNUP,
      payload: event.target.value,
    });
  };
}

const initialState = {
  emailSignup: '',
  passwordSignup: '',
  typeSignup: 'admin',
};

export function signupReducer(state = initialState, action) {
  switch (action.type) {
    case EMAILCHANGESIGNUP:
      return {
        ...state,
        emailSignup: action.payload,
      };
    case PASSWORDCHANGESIGNUP:
      return {
        ...state,
        passwordSignup: action.payload,
      };
    case SELECTCHANGESIGNUP:
      return {
        ...state,
        typeSignup: action.payload,
      };
    default:
      return state;
  }
}
