import {AUTH} from '../actions/index'; 
const initialState = { isLogin: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        isLogin: action.payload
      };
    default:
      return state;
  }
}
