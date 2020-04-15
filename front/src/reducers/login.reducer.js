const EMAILCHANGELOGIN = 'EMAILCHANGELOGIN';
const PASSWORDCHANGELOGIN = 'PASSWORDCHANGELOGIN';
const ISLOGGED = 'ISLOGGED';

export function onEmailChangeLogin(event) {
  return function (dispacth) {
    dispacth({
      type: EMAILCHANGELOGIN,
      payload: event.target.value,
    });
  };
}

export function onPasswordChangeLogin(event) {
  return function (dispacth) {
    dispacth({
      type: PASSWORDCHANGELOGIN,
      payload: event.target.value,
    });
  };
}

export function isLogged() {
  return function (dispatch) {
    dispatch({
      type: ISLOGGED,
      payload: true,
    });
  };
}

const initialState = {
  emailLogin: '',
  passwordLogin: '',
  isLogged: false,
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case EMAILCHANGELOGIN:
      return {
        ...state,
        emailLogin: action.payload,
      };
    case PASSWORDCHANGELOGIN:
      return {
        ...state,
        passwordLogin: action.payload,
      };
    case ISLOGGED:
      return {
        ...state,
        isLogged: action.payload,
      };
    default:
      return state;
  }
}
