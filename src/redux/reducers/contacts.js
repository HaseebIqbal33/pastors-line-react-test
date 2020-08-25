import {CONTACTS} from '../actions/index';
const initialState = { isLoded:false,contacts:[],usContacts:[]};
export const contacts =(state = initialState,action) =>{
      switch (action.type) {
          case CONTACTS:
            return {
              ...state,
              isLoded:true,
              contacts:action.payload.contacts,
              usContacts:action.payload.usContacts
            };
          default:
            return state;
        }
}
