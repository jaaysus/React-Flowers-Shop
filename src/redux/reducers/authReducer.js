// src/redux/reducers/authReducer.js
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from '../actions/types';
  
  const initialState = {
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_START:
        return {
          ...state,
          loading: true,
          error: null
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          user: action.payload,
          error: null
        };
      case REGISTER_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  export default authReducer;