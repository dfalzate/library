import { signupReducer } from './signup.reducer';
import { loginReducer } from './login.reducer';
import { createCategoryReducer } from './category.reducer';
import { bookReducer } from './book.reducer';
import { combineReducers } from 'redux';

export const allReducers = combineReducers({
  signupReducer,
  loginReducer,
  createCategoryReducer,
  bookReducer,
});
