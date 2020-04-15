import axios from 'axios';

const ONCATEGORYNAMECHANGE = 'ONCATEGORYNAMECHANGE';
const ONCREATECATEGORY = 'ONCREATECATEGORY';
const GETCATEGORIES = 'GETCATEGORIES';

export function onCategoryNameChange(event) {
  return function (dispatch) {
    dispatch({
      type: ONCATEGORYNAMECHANGE,
      payload: event.target.value,
    });
  };
}

export function onCreateCategory(data) {
  return function (dispatch) {
    return dispatch({
      type: ONCREATECATEGORY,
      payload: data,
    });
  };
}

export function getCategories(props) {
  return function (dispatch) {
    axios({
      method: 'get',
      url: 'http://localhost:3000/categories',
      headers: {
        'Content-Type': 'application/json',
        authorization: sessionStorage.token,
      },
    }).then((data) => {
      if (data.status === 200) {
        dispatch({
          type: GETCATEGORIES,
          payload: data.data,
        });
      }
    });
  };
}

const initialState = {
  categoryName: '',
  categories: [],
};

export function createCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case ONCATEGORYNAMECHANGE:
      return {
        ...state,
        categoryName: action.payload,
      };
    case ONCREATECATEGORY:
      return {
        ...state,
        categories: state.categories.concat(action.payload),
      };
    case GETCATEGORIES:
      if (state.categories.length === 0) {
        return {
          ...state,
          categories: state.categories.concat(action.payload),
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}
