import {
  GET_CONTACTS_REQUEST,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAILURE
} from '../constants/ActionTypes'

const initialState = {
  loading: false,
  contacts: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_CONTACTS_SUCCESS:
      return {
        loading: false,
        error: null,
        contacts: [...state.contacts, ...action.payload]
      };
    case GET_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
