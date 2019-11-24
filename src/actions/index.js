import {
  GET_CONTACTS_REQUEST,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAILURE
} from '../constants/ActionTypes'

import axios from 'axios'  // или fetch, или любой другой http клиент

const getContactsSuccess = (contacts) => ({
  type: GET_CONTACTS_SUCCESS,
  payload: contacts
})

const getContactsStarted = () => ({
  type: GET_CONTACTS_REQUEST
})

const getContactsFailure = (error) => ({
  type: GET_CONTACTS_FAILURE,
  payload: {
    error  // error: error
  }
})

export const getContacts = () => {
  return (dispatch, getState) => {
    console.log('state: ', getState())
    dispatch(getContactsStarted())

    axios
      .get(`https://tt-front.now.sh/prepods`)
      .then(res => {
        dispatch(getContactsSuccess(res.data))
      })
      .catch(err => {
        dispatch(getContactsFailure(err.message))
      })
  }
}
