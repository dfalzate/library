const ONTITLECHANGE = 'ONTITLECHANGE';
const ONDESCRPTIONCHANGE = 'ONDESCRPTIONCHANGE';
const ONAUTHORCHANGE = 'ONAUTHORCHANGE';
const GETID = 'GETID';

export function onTitleChange(event) {
  return function (dispatch) {
    dispatch({
      type: ONTITLECHANGE,
      payload: event.target.value,
    });
  };
}

export function onDescriptionChange(event) {
  return function (dispatch) {
    dispatch({
      type: ONDESCRPTIONCHANGE,
      payload: event.target.value,
    });
  };
}

export function onAuhorChange(event) {
  return function (dispatch) {
    dispatch({
      type: ONAUTHORCHANGE,
      payload: event.target.value,
    });
  };
}

export function getCategoryId(categoryId) {
  return function (dispatch) {
    dispatch({
      type: GETID,
      payload: categoryId,
    });
  };
}

let initialState = {
  title: '',
  description: '',
  author: '',
  categoryId: '',
};

export function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ONTITLECHANGE:
      return {
        ...state,
        title: action.payload,
      };
    case ONDESCRPTIONCHANGE:
      return {
        ...state,
        description: action.payload,
      };
    case ONAUTHORCHANGE:
      return {
        ...state,
        author: action.payload,
      };
    case GETID:
      return {
        ...state,
        categoryId: action.payload,
      };
    default:
      return state;
  }
}
