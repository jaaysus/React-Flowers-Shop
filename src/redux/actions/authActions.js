// src/redux/actions/authActions.js
import { 
    REGISTER_START, 
    REGISTER_SUCCESS, 
    REGISTER_FAIL 
  } from './types';
  
  export const registerUser = (userData) => {
    return async (dispatch) => {
      dispatch({ type: REGISTER_START });
      
      try {
        // Simulate API call
        // await new Promise(resolve => setTimeout(resolve, 1000));
        
        dispatch({
          type: REGISTER_SUCCESS,
          payload: userData
        });
      } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error?.message || 'Une erreur s\'est produite'
          });
      }
    };
  };
