import { USER_ACTION_TYPES } from "./user.types";
import { signInFailed, signUpFailed, signOutFailed, signOutSuccess, signInSuccess } from './user.action';
import { UserData } from '../../utils/firebase/firebase.utils';

export const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  if (signInFailed.match(action) || signUpFailed.match(action) || signOutFailed.match(action)) {
    return { ...state, error: action.payload };
  }

  return state;
};